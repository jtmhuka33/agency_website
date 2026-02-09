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

const toast = useToast()
const loading = ref(false)

async function onSubmit() {
  loading.value = true
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: formState.value
    })
    toast.add({
      title: 'Thank you for your interest',
      description: 'We will get back to you in 24 - 48 hours',
      icon: 'i-lucide-badge-check'
    })
  } catch {
    toast.add({
      title: 'Failed to send contact information',
      description: 'Please try again later',
      icon: 'i-lucide-circle-x'
    })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <UContainer class="min-h-screen flex flex-col items-center justify-center py-12">
    <div class="w-full max-w-2xl">
      <UPageSection
        title="Contact Us"
        description="Interested in working together? Fill out the form below and we'll get back to you as soon as possible."
        class="mb-8 text-center"
      />
      <UForm class="space-y-6" :schema="schema" :state="formState" @submit="onSubmit">
        <div class="grid grid-cols-2 gap-4">
          <UFormField required label="First Name" name="firstName" class="w-full">
            <UInput v-model="formState.firstName" class="w-full"/>
          </UFormField>
          <UFormField required label="Last Name" name="lastName" class="w-full">
            <UInput v-model="formState.lastName" class="w-full"/>
          </UFormField>
        </div>
        <UFormField required label="Email" name="email" class="w-full">
          <UInput v-model="formState.email" type="email" class="w-full"/>
        </UFormField>
        <UFormField required label="Company" name="company" class="w-full">
          <UInput v-model="formState.company" class="w-full"/>
        </UFormField>
        <UFormField required label="Service Interested In" name="service" class="w-full">
          <USelect v-model="formState.service" :items="serviceOptions" class="w-full"/>
        </UFormField>
        <UFormField required label="Project Description" name="projectDescription" class="w-full">
          <UTextarea v-model="formState.projectDescription" class="w-full" :rows="4"/>
        </UFormField>
        <div class="grid grid-cols-2 gap-4">
          <UFormField label="Budget" name="budget" class="w-full">
            <USelect v-model="formState.budget" :items="budgetOptions" class="w-full"/>
          </UFormField>
          <UFormField label="Timeline" name="timeline" class="w-full">
            <USelect v-model="formState.timeline" :items="timelineOptions" class="w-full"/>
          </UFormField>
        </div>
        <UFormField label="How Did You Hear About Us?" name="source" class="w-full">
          <USelect v-model="formState.source" :items="sourceOptions" class="w-full"/>
        </UFormField>
        <UButton type="submit" class="w-full" size="lg" :loading="loading">
          Submit
        </UButton>
      </UForm>
    </div>
  </UContainer>
</template>
<style scoped>

</style>
