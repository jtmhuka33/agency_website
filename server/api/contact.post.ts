import { Resend } from 'resend';
import * as z from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.email(),
  company: z.string().min(1),
  service: z.string().min(1),
  projectDescription: z.string().min(1),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  source: z.string().optional()
});

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const resend = new Resend(config.resendApiKey);
  const recipientEmail = config.contactEmail;

  const body = await readValidatedBody(event, contactSchema.parse);

  const { data, error } = await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: [recipientEmail],
    replyTo: body.email,
    subject: `New inquiry from ${body.firstName} ${body.lastName} — ${body.service}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Company:</strong> ${body.company}</p>
      <p><strong>Service:</strong> ${body.service}</p>
      <p><strong>Project Description:</strong></p>
      <p>${body.projectDescription}</p>
      ${body.budget ? `<p><strong>Budget:</strong> ${body.budget}</p>` : ''}
      ${body.timeline ? `<p><strong>Timeline:</strong> ${body.timeline}</p>` : ''}
      ${body.source ? `<p><strong>Source:</strong> ${body.source}</p>` : ''}
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    throw createError({
      status: 500,
      statusText: 'Failed to send email. Please try again later.',
    });
  }

  return { id: data?.id };
});