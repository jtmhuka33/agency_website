<script setup lang="ts">
const cards = useState(() => [
  {
    title: "Web Development",
    description:
      "Custom-built, blazing-fast websites that turn visitors into customers. We use cutting-edge frameworks to deliver pixel-perfect designs that load instantly and rank higher on search engines.",
    icon: "i-lucide-code",
  },
  {
    title: "AI Integration",
    description:
      "Supercharge your business with intelligent automation. From chatbots to predictive analytics, we seamlessly integrate the latest AI models to streamline workflows and unlock new revenue streams.",
    icon: "i-lucide-brain",
  },
  {
    title: "Mobile App Development",
    description:
      "Native-quality apps for iOS and Android that your customers will love. We build smooth, intuitive mobile experiences that keep users engaged and drive growth across every device.",
    icon: "i-lucide-smartphone",
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
