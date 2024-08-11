<template>
    <div class="swiper">
      <div class="swiper__header">
        <h2 class="swiper__title">Просмотренные товары</h2>
        <div class="swiper__action">
          <button class="swiper__btn swiper__btn--prev" title="Предыдущий слайд" @click="prev()">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 19L1 10L9 0.999999" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </button>
          <span class="swiper__current">{{ currentSlide }}</span>
          /
          <span class="swiper__total">{{ totalSlides }}</span>
          <button class="swiper__btn swiper__btn--next" title="Следующий слайд" @click="next()">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 10L1 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="swiper-wrapper">
        <TheSwiperItem
          v-for="item in items"
          :key="item.id"
          class="swiper-slide"
          :item="item"
        />
      </div>
    </div>
</template>

<script>
import TheSwiperItem from '@/components/components/swiper/TheSwiperItem.vue'
import items from '@/components/components/swiper/mocData.js'

export default {
  name: 'TheSwiper',
  components: { TheSwiperItem },
  data() {
    return {
      items: items.items,
      swiper: null,
      currentSlide: 1,
      totalSlides: items.items.length / 4,
    };
  },
  computed: {
  },
  mounted() {
    this.swiper = new this.$swiper('.swiper', {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      speed: 1000,
      effect: 'slide',
      loop: false,
      init: false,
    });
    this.swiper.on('slideChange', () => {
      this.currentSlide = (this.swiper.activeIndex + 4) / 4;
    });
    this.swiper.init();
  },
  methods: {
    next(){
      const swiper = document.querySelector('.swiper').swiper;
      swiper.slideNext();
    },
    prev(){
      const swiper = document.querySelector('.swiper').swiper;
      swiper.slidePrev();
    },
  },
}
</script>

<style scoped lang="sass">
.swiper
  margin-top: 95px
  position: relative
  &__header
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: flex-start
    height: 100px
  &__title
   font-size: 30px
   font-weight: 600
  &__action
    display: flex
    justify-content: center
    align-items: center
    gap: 10px
  &__btn
    width: 50px
    height: 50px
    background: var(--blue-gray)
    border-radius: 50%
    color: var(--white)
    display: flex
    align-items: center
    justify-content: center
    transition: all .25s ease-out
    &:hover
      transform: scale(1.03)
    &:active
      transform: scale(0.97)
    &--next
      margin-left: 5px
      svg
        padding-left: 3px
    &--prev
      margin-right: 5px
      svg
        padding-right: 3px
  &__current
    font-size: 24px
    font-weight: 400
    color: var(--black)
    line-height: 36px
  &__total
    font-size: 18px
    font-weight: 400
    line-height: 27px
</style>
