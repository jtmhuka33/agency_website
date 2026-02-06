<script setup lang="ts">
import type {NavigationMenuItem} from "@nuxt/ui";

const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Contact",
    to: "/contact",
    active: route.path.startsWith("/contact"),
  },
]);
</script>
<template>
  <UHeader>
    <template #left>
      <NuxtImg
        src="/MhukaLogo.png"
        alt="Company Logo"
        formate="webp"
        height="75"
      />
    </template>
    <UNavigationMenu :items="items"/>
    <template #right>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>
