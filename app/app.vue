<script setup lang="ts">
import { fa_ir } from '@nuxt/ui/locale'

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],

  link: [{ rel: 'icon', href: '/favicon.ico' }],
  
  htmlAttrs: {
    lang: fa_ir.code,
    dir: fa_ir.dir
  }
})

const title = 'همکاری با مجتمع فرهنگی آموزشی معلم'
const description = 'فرصت‌های شغلی را ببینید و برای همکاری درخواست دهید.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description
})
</script>

<template>
  <UApp :locale="fa_ir">
    <AppHeader />

    <UMain>
      <NuxtPage />
    </UMain>

    <UFooter>
      <p class="text-sm text-muted">
        مجتمع فرهنگی آموزشی پسرانه معلم
      </p>
    </UFooter>
  </UApp>
</template>
