<template>
  <div class="total-cart">
    <span class="total-cart__title">Итого</span>
    <div class="total-cart__description">
      <div class="total-cart__item">
        <span class="total-cart__label">Сумма заказа</span>
        <span class="total-cart__value">{{ storeTotalPrice }} ₽</span>
      </div>
      <div class="total-cart__item">
        <span class="total-cart__label">Количество</span>
        <span class="total-cart__value">{{ storeTotalQuantityProduct }} шт</span>
      </div>
      <div class="total-cart__item">
        <span class="total-cart__label">Установка</span>
        <span class="total-cart__value"> {{ storeInstallation ? 'Да' : 'Нет' }}</span>
      </div>
    </div>
    <div class="total-cart__item total-cart__item--separator">
      <span class="total-cart__total-label">Стоимость {{ getEnding(storeTotalQuantityProduct) }}</span>
      <span class="total-cart__total-value">{{ storeTotalPrice }} ₽</span>
    </div>
    <div class="total-cart__actions">
      <TheButton
        :disabled="storeTotalQuantityProduct === 0"
        @click="makePurchase()"
      >
        Оформить заказ
      </TheButton>
      <TheButton
        :disabled="storeTotalQuantityProduct === 0"
        outlined @click="makePurchase()"
      >
        Купить в 1 клик
      </TheButton>
    </div>
  </div>
</template>

<script>
import { getEnding } from '@/utils/getEnding'
import TheButton from '@/components/ui/TheButton.vue'

export default {
  name: 'TheTotalCart',
  components: { TheButton },
  computed: {
    storeTotalPrice() {
      return this.$store.getters['shoppingList/getTotalPrice'];
    },
    storeTotalQuantityProduct() {
      return this.$store.getters['shoppingList/getTotalQuantityProduct'];
    },
    storeInstallation() {
      return this.$store.getters['shoppingList/getInstallation'];
    },
  },
  methods: {
    getEnding,
    makePurchase() {
      this.$store.dispatch('shoppingList/makePurchase');
    },
  },

}
</script>

<style scoped lang="sass">
.total-cart
  width: 425px
  height: 458px
  padding: 35px 30px
  border-radius: 5px
  display: flex
  flex-direction: column
  flex-wrap: nowrap
  gap: 30px
  background: var(--background)
  &__title
    font-weight: 600
    font-size: 24px
    line-height: 28.93px
  &__description
    display: flex
    flex-direction: column
    gap: 18px
  &__item
    display: flex
    justify-content: space-between
    &--separator
      padding-top: 10px
      border-top: 1px solid var(--light-gray)
  &__total-label
    font-weight: 600
    font-size: 18px
    line-height: 26.1px
  &__total-value
    font-weight: 700
    font-size: 26px
    line-height: 33.8px
    font-family: 'Roboto', sans-serif
  &__label
    font-weight: 500
    line-height: 23.2px
  &__value
    font-weight: 400
    line-height: 23.2px
    font-family: 'Roboto', sans-serif
  &__actions
    display: flex
    flex-direction: column
    gap: 12px
</style>
