<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Services",
    to: "/services",
    active: route.path.startsWith("/services"),
  },
  {
    label: "Method",
    to: "/method",
    active: route.path.startsWith("/method"),
  },
  {
    label: "About",
    to: "/about",
    active: route.path.startsWith("/about"),
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
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      <UColorModeButton />
    </template>
  </UHeader>
</template>
