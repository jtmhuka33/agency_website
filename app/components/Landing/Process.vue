<script setup lang="ts">

const steps = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and target audience. Through an in-depth consultation, we define the project scope and identify the best path forward.',
    icon: 'i-lucide-search',
  },
  {
    title: 'Strategy & Design',
    description: 'We craft a detailed roadmap and design system tailored to your brand. Wireframes and prototypes are shared early so you can visualize the final product before a single line of code is written.',
    icon: 'i-lucide-pencil-ruler',
  },
  {
    title: 'Development',
    description: 'Our engineers build your solution using modern, scalable technologies. You receive regular progress updates and demos throughout the sprint cycle.',
    icon: 'i-lucide-code',
  },
  {
    title: 'Launch & Support',
    description: 'After thorough testing and your final approval, we deploy to production. Post-launch, we provide ongoing support and optimization to keep things running smoothly.',
    icon: 'i-lucide-rocket',
  },
]
</script>

<template>
  <UPageSection
    title="Our Process"
    :ui="{ container: 'py-8 sm:py-12 lg:py-16' }"
  >
    <UTimeline
      color="primary"
      size="xl"
      :items="steps"
    />
  </UPageSection>
</template>
