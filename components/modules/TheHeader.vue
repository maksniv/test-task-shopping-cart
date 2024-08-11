<template>
  <header class="header">
    <TheShoppingCart/>
  </header>
</template>

<script>
import TheShoppingCart from '@/components/components/header/TheShoppingCart.vue'

export default {
  name: 'TheHeader',
  components: { TheShoppingCart }
}
</script>

<style lang="sass" scoped>
.header
  height: 141px
  width: 100%
  display: flex
  align-items: center
  justify-content: flex-end
</style>
