<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | brutalDO',
  description: 'Privacy Policy for brutalDO — a task management app by Mhuka Consulting. Your tasks stay on your device; we collect only anonymous usage analytics.',
  ogTitle: 'Privacy Policy | brutalDO',
  ogDescription: 'Privacy Policy for brutalDO — a task management app by Mhuka Consulting. Your tasks stay on your device; we collect only anonymous usage analytics.',
  ogUrl: 'https://mhuka-consulting.com/brutaldo/privacy-policy',
})

const sections = [
  {
    title: 'Introduction',
    body: 'Mhuka Consulting ("we", "us", or "our") operates the brutalDO mobile application. This Privacy Policy explains how we collect, use, and protect your information when you use our app.\n\nLast updated: April 7, 2026',
  },
  {
    title: 'Data Storage',
    body: 'brutalDO stores all your data locally on your device using on-device storage. We do not operate servers that collect or store your personal data. Your tasks, settings, and preferences remain entirely on your device.',
  },
  {
    title: 'Information We Do Not Collect',
    body: 'We do not collect, transmit, or store your tasks, notes, or to-do items; personal identification information such as your name or email; location data; contacts or address book data; or photos, media, or files.',
  },
  {
    title: 'Anonymous Usage Analytics',
    body: 'To help us understand how the app is used and improve it over time, brutalDO sends anonymous usage events to PostHog (EU cloud). A randomly-generated identifier is created on your device the first time you open the app — this ID is not linked to your name, email, or any other personal information.\n\nThe events we track include actions such as creating or completing tasks, starting the Pomodoro timer, and creating projects. The properties sent with these events describe feature usage (e.g. whether a task has a due date or subtasks) — never the content of your tasks.\n\nWe do not collect your IP address, location, or device fingerprint beyond what PostHog\'s SDK may capture by default. Data is processed on PostHog\'s EU infrastructure and is not used for advertising or profiling.\n\nLegal basis: Legitimate interests (Art. 6(1)(f) GDPR) in improving the product through aggregate, non-identifiable usage patterns.\n\nTo opt out, email contact@mhuka-consulting.com with the subject "Analytics opt-out".',
  },
  {
    title: 'Notifications',
    body: 'brutalDO may request permission to send local notifications for task reminders and Pomodoro timer alerts. These notifications are scheduled and delivered entirely on your device. No notification data is sent to external servers.',
  },
  {
    title: 'In-App Purchases',
    body: 'brutalDO offers optional premium subscriptions and one-time purchases processed through Apple\'s App Store or Google Play Store. We do not directly collect or process payment information. All transactions are handled by Apple or Google according to their respective privacy policies. We may receive anonymised transaction confirmations to verify your subscription status.',
  },
  {
    title: 'Third-Party Services',
    body: 'The app integrates with the following third-party services:\n\n• Apple App Store / Google Play Store — for in-app purchases and subscription management\n• Expo — for app updates and build infrastructure\n• PostHog (EU cloud) — for anonymous usage analytics (see "Anonymous Usage Analytics" above)\n\nEach of these services has its own privacy policy governing their data practices.',
  },
  {
    title: "Children's Privacy",
    body: 'brutalDO does not knowingly collect personal information from children under 13. Since all data is stored locally and we do not collect user data, the app can be used by individuals of all ages.',
  },
  {
    title: 'Data Deletion',
    body: 'Since all data is stored locally on your device, you can delete all brutalDO data by uninstalling the app or clearing the app\'s data through your device settings.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this Privacy Policy from time to time. Changes will be reflected in the app with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the updated policy.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this Privacy Policy, contact us at contact@mhuka-consulting.com',
  },
]
</script>

<template>
  <UContainer class="py-16 max-w-3xl">
    <!-- Header -->
    <div class="mb-12">
      <NuxtLink
        to="/"
        class="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 mb-8 transition-colors"
      >
        <UIcon name="i-lucide-arrow-left" class="size-4" />
        Back to home
      </NuxtLink>

      <div class="flex items-center gap-3 mb-4">
        <div class="size-10 rounded-lg bg-red-500 flex items-center justify-center shrink-0">
          <UIcon name="i-lucide-shield-check" class="size-5 text-white" />
        </div>
        <span class="text-sm font-semibold text-red-500 uppercase tracking-widest">brutalDO</span>
      </div>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Privacy Policy
      </h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Last updated: April 7, 2026
      </p>

      <USeparator class="mt-8" />
    </div>

    <!-- Intro callout -->
    <div class="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5 mb-10 flex gap-4">
      <UIcon name="i-lucide-lock" class="size-5 text-red-500 mt-0.5 shrink-0" />
      <p class="text-sm text-red-700 dark:text-red-300 leading-relaxed">
        All your tasks, settings, and data remain <strong>on your device</strong>. We collect only anonymous usage analytics to improve the app — no personal information, no task content, and no advertising data.
      </p>
    </div>

    <!-- Sections -->
    <div class="space-y-8">
      <section
        v-for="(section, index) in sections"
        :key="index"
      >
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {{ section.title }}
        </h2>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line text-sm">
          {{ section.body }}
        </p>
        <USeparator v-if="index < sections.length - 1" class="mt-8" />
      </section>
    </div>

    <!-- Footer note -->
    <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
      <p class="text-xs text-gray-400 dark:text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Mhuka Consulting. brutalDO is available on the
        <a href="https://apps.apple.com" target="_blank" rel="noopener" class="underline hover:text-red-500 transition-colors">App Store</a>.
      </p>
    </div>
  </UContainer>
</template>
