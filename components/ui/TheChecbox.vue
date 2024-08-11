<template>
  <label class="checkbox__label" :title="title">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked="value"
      @input="
        localValue = $event.target.checked;
        $emit('input', localValue)
       "
    />
    <span class="checkbox__icon"></span>
    {{label}}
  </label>
</template>

<script>
export default {
  name: 'TheCheckbox',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    title: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      localValue: this.value
    };
  },
  watch: {
    value(val) {
      this.localValue = val;
    }
  }
}
</script>

<style scoped lang="sass">
.checkbox__label
  cursor: pointer
  height: 20px
  width: fit-content
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: center
  align-items: center
  .checkbox__input
    appearance: none
    -webkit-appearance: none
    width: 1px
    height: 1px
    overflow: hidden
    clip: rect(0, 0, 0, 0)
  .checkbox__icon
    position: relative
    display: inline-block
    width: 20px
    height: 20px
    border-radius: calc(var(--radius) / 2)
    border: 1px solid var(--gray)
    background-color: var(--white)
    transition: color .15s, border .15s ease
    z-index: 10
    margin-right: 5px
    &::after
      transition: color .15s, border .15s ease
    &::before
      content: ""
      display: inline-block
      position: absolute
      top: 2px
      right: 6px
      width: 6px
      height: 11px
      border-right: 2px solid var(--white)
      border-bottom: 2px solid var(--white)
      transform: rotate(45deg) scale(0)
      transition: transform 0.15s ease
      z-index: 9

.checkbox__input:checked + .checkbox__icon
  background-color: var(--blue)
  &::before
    transform: rotate(45deg) scale(1)
</style>
