<script setup lange="ts"></script>
<template>
  <UPageSection>
    <UPageCTA
      title="Ready to Bring Your Vision to Life"
      description="From concept to code, we build high-performance software tailored to your specific market needs."
      variant="soft"
      :links="[
        {
          label: 'Start Your Project',
          to: 'https://ui.nuxt.com/docs/getting-started/installation/nuxt',
          target: '_blank',
          trailingIcon: 'i-lucide-arrow-right',
          color: 'neutral',
        },
        {
          label: 'See How We Work',
          to: '/method',
          target: '_blank',
          color: 'neutral',
          variant: 'outline',
        },
      ]"
    />
  </UPageSection>
</template>
