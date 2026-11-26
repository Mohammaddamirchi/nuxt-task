<script setup lang="ts">
import type { TimelineItem } from '@nuxt/ui'

const items: TimelineItem[] = [
  { title: 'ثبت نام', description: 'اول توی سایت ثبت نام کن', icon: 'i-lucide-user-plus' },
  { title: 'ورود', description: 'ورود به سایت رو بزن و وارد شو', icon: 'i-lucide-log-in' },
  { title: 'تکمیل پروفایل', description: 'پروفایلت رو تکمیل کن', icon: 'i-lucide-id-card' },
  { title: 'موقعیت‌های شغلی', description: 'وارد بخش موقعیت‌های شغلی شو', icon: 'i-lucide-search' },
  { title: 'ارسال درخواست', description: 'شغل مورد نظرتو درخواست بده', icon: 'i-lucide-send' },
  { title: 'بررسی', description: 'منتظر بمون تا درخواستت تایید بشه', icon: 'i-lucide-clock' },
  { title: 'همکاری', description: 'تبریک میگم همکار ما شدی!', icon: 'i-lucide-party-popper' }
]
</script>

<template>
  <UPageSection title="چطور همکار ما بشی؟">
    <UTimeline
      :items="items"
      :default-value="items.length - 1"
      class="mx-auto w-full max-w-md"
    />
  </UPageSection>
</template>
