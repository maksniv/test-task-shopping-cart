<template>
  <div class="swiper-item">
    <img
      class="swiper-item__img"
      :src="require('~/assets/img/img1.png')"
    />
    <div class="swiper-item__body">
      <div class="swiper-item__details">
        <div class="swiper-item__up">
          <span class="swiper-item__title">{{ item.label }}</span>
          <span class="swiper-item__description">{{ item.description }}</span>
        </div>
        <div class="swiper-item__down">
          <div class="swiper-item__price swiper-item__price--rub">{{ item.priceRUB }}</div>
          <div class="swiper-item__price swiper-item__price--euro">{{ item.priceEURO }}</div>
        </div>
      </div>
      <TheButton small-text>Подробнее</TheButton>
    </div>
  </div>
</template>

<script>
import TheButton from '@/components/ui/TheButton.vue'

export default {
  name: 'TheSwiperItem',
  components: { TheButton },
  props: {
    item: {
      type: Object,
      default: ()=>({})
    },
  },
}
</script>



<style scoped lang="sass">
.swiper-item
  width: 305px
  border-radius: var(--big-radius)
  background: var(--background)
  padding: 25px
  gap: 10px
  display: flex
  flex-direction: column
  &__img
    width: 245px
    height: 245px
    object-fit: cover
  &__body
    display: flex
    flex-direction: column
    gap: 20px
  &__details
    display: flex
    flex-direction: column
    gap: 30px
  &__up
    display: flex
    flex-direction: column
    gap: 10px
  &__title
    font-weight: 700
    font-size: 22px
    line-height: 26.51px
  &__description
    min-height: 60px
    font-weight: 400
    font-size: 14px
    line-height: 20.3px
  &__down
    display: flex
    flex-direction: column
    gap: 3px
  &__price
    &--rub
      font-weight: 500
      font-size: 22px
      line-height: 28.6px
      font-family: 'Roboto', sans-serif
    &--euro
      color: var(--gray)
      font-weight: 400
      font-size: 16px
      line-height: 23.2px
</style>
