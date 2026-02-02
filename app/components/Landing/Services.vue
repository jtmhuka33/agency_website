<script setup lang="ts">
const cards = useState(() => [
  {
    title: "Web Development",
    description:
      "High-performance, responsive websites using modern technologies.",
    icon: "i-lucide-smile",
  },
  {
    title: "AI Integration",
    description: "The best flagship models at your fingertips",
    icon: "i-lucide-a-large-small",
  },
  {
    title: "Mobile App Development",
    description:
      "iOS and Android app development reaching your customers on any device",
    icon: "i-lucide-sun-moon",
  },
]);
</script>

<template>
  <UContainer>
    <UPageGrid :ui="{ wrapper: 'sm:grid-cols-1' }">
      <UPageCard v-for="(card, index) in cards" :key="index" v-bind="card" />
    </UPageGrid>
  </UContainer>
</template>

<style scoped></style>
