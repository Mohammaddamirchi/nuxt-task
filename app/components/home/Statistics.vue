<script setup lang="ts">
const { data, status, error, refresh } = useJobStatistics()

const items = [
  { key: 'applicationCount', label: 'درخواست‌ها', class: 'bg-stat-applications' },
  { key: 'positionCount', label: 'فرصت‌های فعال', class: 'bg-stat-positions' },
  { key: 'acceptedCount', label: 'قبول شده‌ها', class: 'bg-stat-accepted' }
] as const
</script>

<template>
  <section
    aria-label="آمار استخدام"
    class="relative mt-8 border-y border-default py-6"
  >
    <span
      class="absolute inset-y-0 right-0 my-auto hidden h-18 w-5 bg-secondary sm:block"
      aria-hidden="true"
    />
    <span
      class="absolute inset-y-0 left-0 my-auto hidden h-18 w-5 bg-secondary sm:block"
      aria-hidden="true"
    />

    <UContainer>
      <UAlert
        v-if="error"
        color="error"
        variant="subtle"
        title="دریافت آمار ممکن نشد."
        :actions="[{ label: 'تلاش دوباره', color: 'error', onClick: () => refresh() }]"
        class="mx-auto max-w-md"
      />

      <dl
        v-else
        class="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-3"
      >
        <UCard
          v-for="item in items"
          :key="item.key"
          variant="solid"
          class="size-28 text-center text-white shadow-md ring-0"
          :class="item.class"
          :ui="{ body: 'p-3 sm:p-3' }"
        >
          <dt class="text-xs font-medium">
            {{ item.label }}
          </dt>
          <dd class="mt-5 flex justify-center text-sm font-bold">
            <USkeleton
              v-if="status === 'pending'"
              class="h-5 w-10 bg-white/30"
            />
            <span v-else>{{ data?.[item.key] ?? '—' }}</span>
          </dd>
        </UCard>
      </dl>
    </UContainer>
  </section>
</template>
