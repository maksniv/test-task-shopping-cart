<template>
  <button
    class="button"
    :class="{
    'button--outlined': outlined,
    'button--small-text': smallText
    }"
    @click="$emit('click')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'TheButton',
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    smallText: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="sass" scoped>
.button
  width: 100%
  height: 54px
  border-radius: var(--radius)
  background-color: var(--blue)
  color: var(--white)
  font-size: 18px
  font-weight: 600
  line-height: 26.1px
  cursor: pointer
  user-select: none
  transition: all .25s ease-out
  padding: 15px 50px
  &:hover
    transform: scale(1.03)
  &:active
    transform: scale(0.97)
  &--outlined
    color: var(--blue)
    border: 1px solid var(--blue)
    background-color: var(--white)
  &--small-text
    font-size: 16px
    line-height: 23.2px
  &:disabled
    cursor: default
    transform: scale(1.0)
    background-color: var(--very-light-gray)
    border: 1px solid var(--gray)
    color: var(--gray)
</style>
