<template>
  <div class="circle-progress">
    <circle-progress
      :percent="percent"
      empty-color="#F7F7F8"
      fill-color="#FF8F6B"
      :border-width="10"
      :border-bg-width="10"
      :show-percent="true"
      :size="100"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// https://github.com/delowardev/vue3-circle-progress
import "vue3-circle-progress/dist/circle-progress.css";
// @ts-ignore
import CircleProgress from "vue3-circle-progress"

export default defineComponent({
  components: { CircleProgress },
  props: {
    percent: { type: Number, required: true, validator: (value: number) => { return value >= 0 && value <= 100 } },
  },
  setup() {}
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
// .circle-progress {}
</style>
