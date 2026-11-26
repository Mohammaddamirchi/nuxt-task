<script setup lang="ts">
const { links } = useAppConfig()

interface Step {
  before?: string
  link?: { label: string, to: string }
  after?: string
}

const steps: Step[] = [
  { before: 'اول توی سایت ', link: { label: 'ثبت نام', to: links.register }, after: ' کن' },
  { link: { label: 'ورود', to: links.login }, after: ' به سایت رو بزن و وارد شو' },
  { before: 'پروفایلت رو تکمیل کن' },
  { before: 'وارد بخش موقعیت‌های شغلی شو' },
  { before: 'شغل مورد نظرتو درخواست بده' },
  { before: 'منتظر بمون تا درخواستت تایید بشه' },
  { before: 'تبریک میگم همکار ما شدی!' }
]
</script>

<template>
  <section class="py-16">
    <UContainer class="max-w-4xl">
      <h2 class="mb-12 text-center text-2xl text-toned">
        چطور همکار ما بشی؟
      </h2>

      <ol class="grid gap-x-14 gap-y-5 md:grid-cols-2">
        <li
          v-for="(step, index) in steps"
          :key="index"
          class="flex items-center gap-3 rounded-full bg-default py-1.5 ps-1.5 pe-4 shadow-md md:last:odd:col-span-2 md:last:odd:w-1/2 md:last:odd:justify-self-center"
        >
          <UAvatar
            :text="String(index + 1)"
            :ui="{ root: 'bg-secondary/5', fallback: 'text-secondary' }"
          />
          <p class="flex-1 text-center text-sm text-muted">
            {{ step.before }}<ULink
              v-if="step.link"
              :to="step.link.to"
              class="font-medium text-secondary hover:underline"
              external
            >{{ step.link.label }}</ULink>{{ step.after }}
          </p>
        </li>
      </ol>
    </UContainer>
  </section>
</template>
