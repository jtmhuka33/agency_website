<script setup lang="ts">
import * as z from 'zod';

  const formState = useState(() => ({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    source: ''
  }));

  const budgetOptions = [
    '< 5,000€',
    '5,000€ - 20,000€',
    '20,000€ - 50,000€',
    '> 50,000€'
  ];

  const serviceOptions = [
    'Web Development',
    'AI / Chatbot Integration',
    'Mobile App Development',
    'MVP Development',
    'Other/Not Sure'
  ];

  const timelineOptions = [
    'ASAP',
    '1-2 months',
    '3-6 months',
    'Not sure'
  ];

  const sourceOptions = [
    'Google Search',
    'Social Media',
    'Referral',
    'Other'
  ];

  const schema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.email('Please enter a valid email address'),
    company: z.string().min(1, 'Company is required, helps us understand your needs'),
    service: z.string().min(1, 'Please select a service'),
    projectDescription: z.string().min(1, 'Please provide a project description'),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    source: z.string().optional()
  });

  function onSubmit() {
    //TODO: send email to company email with form data
  }
</script>

<template>
  <UContainer>
    <UPageSection
      title="Contact Us"
      description="Interested in working together? Fill out the form below and we'll get back to you as soon as possible."
      class="mb-8"
    />
    <UForm :schema="schema" :state="formState" :ui="{ wrapper: 'max-w-2xl mx-auto space-y-6' }" @submit="onSubmit">
      <UFormField required label="First Name" name="firstName">
        <UInput v-model="formState.firstName"/>
      </UFormField>
      <UFormField required label="Last Name" name="lastName">
        <UInput v-model="formState.lastName"/>
      </UFormField>
      <UFormField required label="Email" name="email">
        <UInput v-model="formState.email" type="email"/>
      </UFormField>
      <UFormField required label="Company" name="company">
        <UInput v-model="formState.company"/>
      </UFormField>
      <UFormField required label="Service Interested In" name="service">
        <USelect v-model="formState.service" :items="serviceOptions"/>
      </UFormField>
      <UFormField required label="Project Description" name="projectDescription">
        <UTextarea v-model="formState.projectDescription"/>
      </UFormField>
      <UFormField label="Budget" name="budget">
        <USelect v-model="formState.budget" :items="budgetOptions"/>
      </UFormField>
      <UFormField label="Timeline" name="timeline">
        <USelect :items="timelineOptions"/>
      </UFormField>
      <UFormField label="How Did You Hear About Us?" name="source">
        <USelect v-model="formState.source" :items="sourceOptions"/>
      </UFormField>
      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </UContainer>
</template>
<style scoped>

</style>
