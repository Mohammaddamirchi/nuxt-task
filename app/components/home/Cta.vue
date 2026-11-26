<script setup lang="ts">
const { links } = useAppConfig()
</script>

<template>
  <UContainer class="pb-16">
    <UPageCTA
      title="آماده‌ای شروع کنی؟"
      variant="subtle"
      :links="[{ label: 'مشاهده موقعیت‌های شغلی', to: links.jobs, external: true }]"
    />
  </UContainer>
</template>
