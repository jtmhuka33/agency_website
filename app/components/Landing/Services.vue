<script setup lang="ts">
const cards = useState(() => [
  {
    title: "Web / App Development",
    description:
      "Custom-built, blazing-fast websites and mobile applications that turn visitors into customers. We use cutting-edge frameworks to deliver pixel-perfect designs that load instantly and rank higher on search engines.",
    icon: "i-lucide-code",
  },
  {
    title: "AI Integration & Automation",
    description:
      "Supercharge your business with intelligent automation. From chatbots to internal assistants, we seamlessly integrate the latest AI models to streamline workflows",
    icon: "i-lucide-brain",
  },
]);
</script>

<template>
  <UContainer>
    <div class="flex flex-col sm:flex-row gap-8">
      <UPageCard v-for="(card, index) in cards" :key="index" :ui="{root:'sm:w-1/2' }" v-bind="card"/>
    </div>
  </UContainer>
</template>

<style scoped></style>
