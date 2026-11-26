<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { links } = useAppConfig()

const actions: ButtonProps[] = [
  { label: 'فرصت‌های شغلی', to: links.jobs, external: true, size: 'xl', icon: 'i-lucide-briefcase' },
  { label: 'درخواست همکاری', to: links.register, external: true, size: 'xl', color: 'neutral', variant: 'subtle' }
]
</script>

<template>
  <UPageHero
    headline="همکار ما شو!"
    title="همین حالا درخواست بده"
    description="فرصت‌های شغلی مجتمع فرهنگی آموزشی معلم را ببین و برای همکاری درخواست بده."
    :links="actions"
  />
</template>
