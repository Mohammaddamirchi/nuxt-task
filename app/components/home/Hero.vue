<script setup lang="ts">
const { links } = useAppConfig()
</script>

<template>
  <section class="relative isolate overflow-hidden lg:min-h-72">
    <div class="relative h-56 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-3/5">
      <svg
        class="absolute inset-0 size-full text-secondary"
        viewBox="0 0 1100 275"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          class="opacity-40"
          d="M0 0C45 70 60 150 170 153C260 156 330 125 400 127C510 130 540 210 615 275H1100V0Z"
        />
        <path d="M14 0C55 70 75 150 175 153C260 156 330 125 405 127C520 130 555 210 630 275H1100V0Z" />
      </svg>
      <img
        src="/images/resume.svg"
        alt=""
        width="320"
        height="270"
        class="absolute inset-y-0 right-4 h-full w-auto lg:right-12"
      >
    </div>

    <UContainer class="relative flex py-12 lg:min-h-72 lg:justify-end lg:py-16">
      <div class="w-full text-center lg:w-2/5">
        <h1 class="text-3xl text-toned">
          همین حالا درخواست بده
        </h1>
        <p class="mt-2 text-sm text-muted">
          همکار ما شو!
        </p>

        <div class="mt-6 flex flex-wrap justify-center gap-4">
          <UButton
            :to="links.jobs"
            label="فرصت‌های شغلی"
            size="xl"
            external
          />
          <UButton
            :to="links.apply"
            label="درخواست همکاری"
            size="xl"
            variant="outline"
            external
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
