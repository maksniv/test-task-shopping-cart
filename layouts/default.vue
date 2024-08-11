<template>
  <div class="container">
    <TheHeader></TheHeader>
    <TheBreadcrumbs></TheBreadcrumbs>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
import TheHeader from '@/components/modules/TheHeader.vue'
import TheBreadcrumbs from '@/components/modules/TheBreadcrumbs.vue'

export default {
  name: 'LayoutDefault',
  components: { TheHeader, TheBreadcrumbs }
};
</script>

<style lang="sass" scoped>
.container
  width: 100%
  max-width: 1280px
  height: 100vh
  display: flex
  align-items: center
  flex-direction: column
  flex-wrap: nowrap
  margin: auto
</style>
