<template>
  <div class="shopping-cart">
    <TheShoppingList/>
    <TheTotalCart class="shopping-cart__total-card"/>
  </div>
</template>

<script>
import TheTotalCart from '@/components/components/shoppingCart/TheTotalCart.vue'
import TheShoppingList  from '@/components/components/shoppingCart/TheShoppingList.vue'

export default {
  name: 'TheShoppingCart',
  components: { TheTotalCart, TheShoppingList },
}
</script>

<style scoped lang="sass">
.shopping-cart
  width: 100%
  display: flex
  flex-direction: row
  justify-content: space-between
  &__total-card
    position: relative
    top: 75px
</style>
