<template>
  <div class="shopping-list-item">
    <img
      class="shopping-list-item__img"
      :src="src"
      :alt="item.product.label"
    />
    <div class="shopping-list-item__body">
      <div class="shopping-list-item__details">
        <span class="shopping-list-item__title">
          {{ item.product.label }}
        </span>
        <span class="shopping-list-item__description">
          {{ item.product.description }}
        </span>
        <span class="shopping-list-item__article">
          Артикул: {{ item.product.article }}
        </span>
      </div>
      <div class="shopping-list-item__quantity-controls">
        <button
          class="shopping-list-item__button shopping-list-item__button--decrease"
          title="Уменьшить кол-во товаров"
          @click="decrease"
        >
          &#8722;
        </button>
        <div class="shopping-list-item__quantity">{{ item.quantity }}</div>
        <button
          class="shopping-list-item__button shopping-list-item__button--increase"
          title="Увеличить кол-во товаров"
          @click="increase"
        >
          &#43;
        </button>
      </div>
      <div class="shopping-list-item__total-price">{{ totalPrice }} ₽</div>
    </div>
    <div
      class="shopping-list-item__delete"
      title="Удалить из корзины"
      @click="deleteProduct"
    >
      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5"/>
        <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheShoppingListItem',
  props: {
    item: {
      type: Object,
      default: ()=>({})
    },
  },
  computed: {
    totalPrice() {
      const total = this.item?.product?.price * this.item?.quantity;
      return total ? total.toLocaleString('ru-RU') : '0';
    },
    src() {
      try {
        return require(`@/assets/img/${this.item.product.image}`);
      } catch (e) {
        console.error(e);
        return '';
      }
    },
  },
  methods: {
    decrease() {
      if (this.item?.quantity === 1) {
        this.deleteProduct();
        return
      }
      this.$store.commit('shoppingList/setQuantityProduct', { id: this.item.product.id, value: this.item?.quantity - 1});
    },
    increase() {
      this.$store.commit('shoppingList/setQuantityProduct', { id: this.item.product.id, value: this.item?.quantity + 1});
    },
    deleteProduct() {
      this.$store.commit('shoppingList/deleteProduct', this.item.product.id)
    },
  },
}
</script>



<style scoped lang="sass">
.shopping-list-item
  width: 800px
  gap: 30px
  display: flex
  padding-bottom: 20px
  border-bottom: 1px solid var(--very-light-gray)
  position: relative
  &:last-child
    border-bottom: none
  &__img
    width: 100px
    height: 100px
    object-fit: cover
  &__body
    flex-grow: 1
    display: flex
    justify-content: space-between
    align-items: center
  &__details
    display: flex
    flex-direction: column
  &__title
    font-weight: 600
    font-size: 16px
    line-height: 23.1px
  &__description
    max-width: 263px
    font-weight: 400
    font-size: 12px
    line-height: 17.4px
    color: var(--gray-blue)
  &__article
    font-size: 14px
    font-weight: 400
    line-height: 21px
    color: var(--gray)
  &__quantity-controls
    display: flex
    align-items: center
    gap: 10px
  &__quantity
    text-align: center
    padding: 7px 5px
    height: 34px
    min-width: 34px
    background: var(--background)
  &__button
    height: 34px
    width: 34px
    background: var(--background)
    color: var(--navy)
    cursor: pointer
    transition: all .25s ease-out
    &:hover
      transform: scale(1.13)
    &:active
      transform: scale(0.97)
    &--decrease
      border-radius: var(--radius) 0 0 var(--radius)
    &--increase
      border-radius: 0 var(--radius) var(--radius) 0
  &__total-price
    min-width: 85px
    font-weight: 500
    font-size: 18px
    line-height: 26.1px
    font-family: 'Roboto', sans-serif
  &__delete
    width: 12px
    height: 12px
    position: absolute
    cursor: pointer
    top: 2px
    right: 5px
    transition: all .25s ease-out
    &:hover
      transform: scale(1.13)
    &:active
      transform: scale(0.97)
</style>
