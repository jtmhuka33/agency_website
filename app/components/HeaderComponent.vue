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

const isDarkMode = computed(() => useColorMode().value === 'dark');
const logoSrc = computed(() => isDarkMode.value ? '/MhukaLogoDark.png' : '/MhukaLogo.png');
</script>
<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <NuxtImg
          :src="logoSrc"
          alt="Company Logo"
          formate="webp"
          height="75"
        />
      </NuxtLink>

    </template>
    <UNavigationMenu :items="items"/>
    <template #right>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>
