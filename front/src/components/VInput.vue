<template>
  <div class="v-input">
    <div class="placeholder">{{ placeholder }}</div>
    <input v-model="valueProxy" :placeholder="placeholder" type="text" :class="{ 'disabled': disabled }" :readonly="disabled" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: {
    modelValue:   { type: String, required: true },
    placeholder:  { type: String, required: true },
    disabled:     { type: Boolean, default: false },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    const valueProxy = computed({
      get() { return props.modelValue },
      set(value: string) { updateValue(value) },
    })

    const updateValue = (value: string) => {
      if (props.disabled) return
      emit('update:modelValue', value)
    }

    return { valueProxy }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
.v-input {
  width: 100%;
  .placeholder {
    margin-left: $hp;
    margin-bottom: .1em;
    font-size: 0.9em;
  }
  input {
    width: 100%;
    border: none;
    padding: $hp;
    border-radius: $br;
    background-color: $lightgray;
    transition: .3s ease opacity;
    &.disabled {
      opacity: .5;
      cursor: not-allowed;
    }
  }
}
</style>
