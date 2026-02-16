<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});

useSeoMeta({
  title: 'Software Consulting | Mhuka Consulting',
  description: 'We build custom software and AI solutions for businesses in Europe.',
  ogTitle: 'Software Consulting | Mhuka Consulting',
  ogDescription: 'We build custom software and AI solutions for businesses in Europe.',
  ogImage: 'https://mhuka-consulting.com/og-image.png',
  ogType: 'website',
  ogUrl: 'https://mhuka-consulting.com',
  ogSiteName: 'Mhuka Consulting',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://mhuka-consulting.com/og-image.png',
})
</script>

<template>
  <UApp>
    <HeaderComponent />
    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator />

    <UFooter>
      <template #default>
        <p class="text-sm text-muted">
          Mhuka Consulting • © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </UApp>
</template>
