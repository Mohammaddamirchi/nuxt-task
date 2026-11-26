<script setup lang="ts">
const { data, status, error, refresh } = useJobStatistics()

const items = [
  { key: 'application_count', label: 'درخواست‌ها', icon: 'i-lucide-file-text' },
  { key: 'position_count', label: 'فرصت‌های فعال', icon: 'i-lucide-briefcase' },
  { key: 'accepted_count', label: 'قبول شده‌ها', icon: 'i-lucide-user-check' }
] as const
</script>

<template>
  <UContainer>
    <UAlert
      v-if="error"
      color="error"
      variant="subtle"
      icon="i-lucide-circle-alert"
      title="دریافت آمار ممکن نشد."
      :actions="[{ label: 'تلاش دوباره', color: 'error', onClick: () => refresh() }]"
    />

    <UPageGrid v-else>
      <UPageCard
        v-for="item in items"
        :key="item.key"
        :icon="item.icon"
        :description="item.label"
        variant="subtle"
      >
        <template #title>
          <USkeleton
            v-if="status === 'pending'"
            class="h-9 w-20"
          />
          <span
            v-else
            class="text-3xl font-bold"
          >{{ data?.[item.key] ?? '—' }}</span>
        </template>
      </UPageCard>
    </UPageGrid>
  </UContainer>
</template>
