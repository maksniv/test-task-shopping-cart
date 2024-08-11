<template>
  <div class="shopping-list">
    <div class="shopping-list__header">
      <div class="shopping-list__description">
        <h1 class="shopping-list__title">Ваша корзина</h1>
        <span class="shopping-list__quantity-product">{{ storeTotalQuantityProduct }} {{ getEnding(storeTotalQuantityProduct) }}</span>
      </div>
      <button
        class="shopping-list__btn-clear"
        title="Очистить корзину"
        @click="clearShoppingCart"
      >
        Очистить корзину
      </button>
    </div>
    <div class="shopping-list__body">
      <TheShoppingListItem
        v-for="item in storeShoppingList"
        :key="item.product.id"
        :item="item"
      />
    </div>
   <TheShoppingListAction/>
  </div>
</template>

<script>
import TheShoppingListItem from '@/components/components/shoppingCart/TheShoppingListItem.vue'
import TheShoppingListAction from '@/components/components/shoppingCart/TheShoppingListAction.vue'
import { getEnding } from '@/utils/getEnding'

export default {
  name: 'TheShoppingList',
  components: { TheShoppingListAction, TheShoppingListItem },
  computed: {
    storeShoppingList() {
      return this.$store.getters['shoppingList/getShoppingList'];
    },
    storeTotalQuantityProduct() {
      return this.$store.getters['shoppingList/getTotalQuantityProduct'];
    },
  },
  methods: {
    getEnding,
    clearShoppingCart(){
      this.$store.commit('shoppingList/clearShoppingCart');
    }
  }
}
</script>



<style scoped lang="sass">
.shopping-list
  width: 800px
  &__header
    display: flex
    align-items: flex-end
    justify-content: space-between
  &__description
    display: flex
    align-items: flex-end
    gap: 22px
  &__quantity-product
    font-weight: 400
    font-size: 18px
    line-height: 26.1px
    color: var(--gray)
    padding-bottom: 4px
  &__btn-clear
    color: var(--gray)
    border-bottom: 1px solid var(--gray)
    cursor: pointer
    transition: all .25s ease-out
    &:hover
      transform: scale(1.03)
    &:active
      transform: scale(0.97)
  &__title
    font-weight: 700
    font-size: 44px
    line-height: 53.03px
  &__body
    margin-top: 50px
    min-height: 400px
    margin-bottom: 24px
    display: flex
    flex-direction: column
    gap: 20px

</style>
