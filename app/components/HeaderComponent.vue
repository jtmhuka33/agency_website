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
    <template #title>
      <NuxtLink to="/">
        <NuxtImg
          src="/MhukaLogo.png"
          alt="Company Logo"
          format="webp"
          height="75"
          class="dark:hidden"
        />
        <NuxtImg
          src="/MhukaLogoDark.png"
          alt="Company Logo"
          format="webp"
          height="75"
          class="hidden dark:block"
        />
      </NuxtLink>

    </template>
    <UNavigationMenu :items="items"/>
    <template #right>
      <UColorModeButton/>
    </template>
    <template #body>
      <UNavigationMenu :items="items" orientation="horizontal" />
    </template>
  </UHeader>
</template>
