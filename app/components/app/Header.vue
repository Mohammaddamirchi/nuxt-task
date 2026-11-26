<script setup lang="ts">
const { links } = useAppConfig()
</script>

<template>
  <UHeader
    title="مجتمع معلم"
    :toggle="false"
  >
    <template #right>
      <UButton
        :to="links.login"
        label="ورود"
        color="neutral"
        variant="ghost"
        external
      />
      <UButton
        :to="links.register"
        label="ثبت نام"
        external
      />
    </template>
  </UHeader>
</template>
