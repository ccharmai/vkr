<template>
  <div class="v-check" @click="valueProxy = !valueProxy">
    <div class="box" :class="{ 'active': valueProxy }">
      <div class="ok"></div>
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: Boolean, required: true },
    text:       { type: String,  required: true },
    disabled:   { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    const valueProxy = computed({
      get() { return props.modelValue },
      set(value: boolean) { updateValue(value) },
    })

    const updateValue = (value: boolean) => {
      if (props.disabled) return
      emit('update:modelValue', value)
    }

    return { valueProxy }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
.v-check {
  display: flex;
  align-items: center;
  gap: calc($hp / 2);
  cursor: pointer;
  .box {
    width: 1em;
    height: 1em;
    border: 2px solid $gray;
    border-radius: .2em;
    transition: .2s ease border;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active {
      border: 2px solid #605BFF;
      .ok {
        opacity: 1;
      }
    }
    .ok {
      $size: .5em;
      width: $size;
      height: $size;
      border-radius: $size;
      background-color: #605BFF;
      opacity: 0;
      transition: .2s ease opacity;
    }
  }
}
</style>
