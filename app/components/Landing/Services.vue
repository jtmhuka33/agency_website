<script setup lang="ts">
const cards = useState(() => [
  {
    title: 'Web Development',
    description: 'High-performance, responsive websites using modern technologies.',
    icon: 'i-lucide-smile',
  },
  {
    title: 'Custom Software',
    description: 'Internal tools and dashboards to automate workflows.',
    icon: 'i-lucide-a-large-small',
  },
  {
    title: 'Mobile App Development',
    description: 'Responsive apps that work on any device.',
    icon: 'i-lucide-sun-moon',
  },
])
</script>

<template>
  <UContainer>
    <UPageGrid>
      <UPageCard
        v-for="(card, index) in cards"
        :key="index"
        v-bind="card"
      />
    </UPageGrid>
  </UContainer>
</template>

<style scoped>

</style>
