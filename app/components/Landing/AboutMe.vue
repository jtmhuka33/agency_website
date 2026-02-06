<script setup lang="ts">
import type {PageFeatureProps} from "#ui/components/PageFeature.vue";

const aboutFeatures = ref<PageFeatureProps[]>([
  {
    title: 'Experience',
    description: 'Approaching 4 years of professional development experience – Full-Stack Software Developer at A-Digital ONE, Germany, with previous work at viind GmbH developing AI chatbot solutions.',
    icon: 'i-lucide-briefcase',
    to: '#'
  },
  {
    title: 'Education',
    description: 'B.Sc. in Interactive Media from TH Augsburg (GPA: 1.83, graduated October 2025) – combining technical development skills with UX design principles ensures I build solutions that are not only functional but user-centered and visually compelling. Bachelor thesis focused on AI-powered VS Code extensions, demonstrating expertise in AI integration and developer tooling.',
    icon: 'i-lucide-graduation-cap',
    to: '#'
  },
  {
    title: 'Background',
    description: 'Zimbabwean-German based in Augsburg, Bayern.',
    icon: 'i-lucide-map-pin',
    to: '#'
  }
])
</script>

<template>
  <UPageSection
    title="Tadiwanashe John Mhuka"
    orientation="horizontal"
    :features="aboutFeatures"
    class="justify-center items-center gap-12 lg:gap-24"
  >

    <NuxtImg
      src="/about-me.png"
      alt="About Me Image"
      format="webp"
      height="550"
      class="rounded-2xl"
    />
  </UPageSection>
</template>

<style scoped>

</style>
