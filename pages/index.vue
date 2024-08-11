<template>
  <div class="page">
    <TheShoppingCart/>
    <TheSwiper/>
  </div>
</template>

<script>
import TheSwiper from '@/components/modules/TheSwiper.vue'
import TheShoppingCart from '@/components/modules/TheShoppingCart.vue'

export default {
  name: 'IndexPage',
  components: { TheShoppingCart, TheSwiper }
}
</script>

<style lang="sass" scoped>
.page
  width: 100%
  margin-top: 60px
  padding: 0 0 90px
</style>
