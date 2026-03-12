<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service | brutalDO',
  description: 'Terms of Service for brutalDO — a task management app by Mhuka Consulting.',
  ogTitle: 'Terms of Service | brutalDO',
  ogDescription: 'Terms of Service for brutalDO — a task management app by Mhuka Consulting.',
  ogUrl: 'https://mhuka-consulting.com/brutaldo/terms-of-service',
})

const sections = [
  {
    title: 'Introduction',
    body: 'These Terms of Service ("Terms") govern your use of the brutalDO mobile application developed by Mhuka Consulting ("we", "us", or "our"). By using brutalDO, you agree to these Terms.\n\nLast updated: February 17, 2026',
  },
  {
    title: 'License Grant',
    body: 'We grant you a limited, non-exclusive, non-transferable, revocable license to use brutalDO for personal, non-commercial purposes on devices you own or control, subject to these Terms and applicable app store terms.',
  },
  {
    title: 'Subscription Terms',
    body: 'brutalDO offers optional premium features through a monthly subscription, yearly subscription, or one-time lifetime purchase.\n\nSubscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. You can manage and cancel subscriptions through your Apple App Store or Google Play Store account settings.\n\nPrices are displayed in your local currency and may vary by region.',
  },
  {
    title: 'Free Trial',
    body: 'If a free trial is offered, it will convert to a paid subscription at the end of the trial period unless cancelled at least 24 hours before the trial ends. Any unused portion of a free trial is forfeited when you purchase a subscription.',
  },
  {
    title: 'Refunds',
    body: 'All purchases are processed by Apple or Google. Refund requests must be directed to the respective app store:\n\n• Apple: https://support.apple.com/en-us/HT204084\n• Google: https://support.google.com/googleplay/answer/2479637\n\nWe do not process refunds directly.',
  },
  {
    title: 'Acceptable Use',
    body: 'You agree not to reverse engineer, decompile, or disassemble the app; modify, adapt, or create derivative works; remove or alter any proprietary notices or labels; use the app for any unlawful purpose; attempt to gain unauthorised access to the app\'s systems; or redistribute, sublicense, or resell the app.',
  },
  {
    title: 'Intellectual Property',
    body: 'brutalDO, including its design, code, graphics, and content, is the intellectual property of Mhuka Consulting and is protected by applicable copyright and trademark laws. All rights not expressly granted are reserved.',
  },
  {
    title: 'Disclaimer of Warranties',
    body: 'brutalDO is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not warrant that the app will be uninterrupted, error-free, or free of harmful components.\n\nWe are not responsible for any data loss resulting from device failure, app updates, or uninstallation.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, Mhuka Consulting shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of brutalDO.\n\nOur total liability shall not exceed the amount you paid for the app in the 12 months preceding the claim.',
  },
  {
    title: 'Termination',
    body: 'We reserve the right to terminate or suspend your access to brutalDO at any time, without notice, for conduct that we determine violates these Terms or is harmful to other users or the app.\n\nUpon termination, your license to use the app is revoked. Sections regarding intellectual property, disclaimers, and limitation of liability survive termination.',
  },
  {
    title: 'Changes to These Terms',
    body: 'We may update these Terms from time to time. Changes will be reflected in the app with an updated "Last Updated" date. Continued use of the app after changes constitutes acceptance of the updated Terms.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about these Terms, contact us at contact@mhuka-consulting.com',
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
          <UIcon name="i-lucide-file-text" class="size-5 text-white" />
        </div>
        <span class="text-sm font-semibold text-red-500 uppercase tracking-widest">brutalDO</span>
      </div>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">
        Terms of Service
      </h1>
      <p class="text-gray-500 dark:text-gray-400 text-sm">
        Last updated: February 17, 2026
      </p>

      <USeparator class="mt-8" />
    </div>

    <!-- Intro callout -->
    <div class="rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 p-5 mb-10 flex gap-4">
      <UIcon name="i-lucide-scroll-text" class="size-5 text-red-500 mt-0.5 shrink-0" />
      <p class="text-sm text-red-700 dark:text-red-300 leading-relaxed">
        By downloading or using <strong>brutalDO</strong>, you agree to be bound by these Terms of Service. Please read them carefully before using the app.
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
