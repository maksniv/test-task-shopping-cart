<template>
  <div class="breadcrumbs">
    <router-link
      class="breadcrumbs__link"
      title="Главная"
      :to="{ name: '' }"
    >
      Главная
    </router-link>
    <div class="breadcrumbs__separator">
      <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.8" d="M0 8V0L5 4L0 8Z" fill="#33374E"/>
      </svg>
    </div>
    <router-link
      class="breadcrumbs__link breadcrumbs__link--active"
      title="Корзина"
      :to="{ name: '' }"
    >
      Корзина
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="sass" scoped>
.breadcrumbs
  height: 21px
  align-self: flex-start
  display: flex
  gap: 10px
  .breadcrumbs__separator
    display: flex
    align-items: center
    justify-content: center
    padding: 2px 0 0
  .breadcrumbs__link
    font-size: 14px
    font-weight: 400
    line-height: 21px
    color: var(--navy)
    &--active
      color: var(--gray)
</style>
