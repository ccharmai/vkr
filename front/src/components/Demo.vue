<template>
  <div class="demo">
    <VInput v-model="line" placeholder="Имя" />
    <VInput v-model="line" placeholder="Имя" :disabled="isChecked" />
    <VCheck v-model="isChecked" text="Заблокировать ввод" />
    <CircleProgress :percent="percent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import VInput from '@/components/VInput.vue'
import VCheck from '@/components/VCheck.vue'
import CircleProgress from '@/components/graphs/CircleProgress.vue'

export default defineComponent({
  components: { VInput, VCheck, CircleProgress },
  setup() {
    const line = ref('')
    const isChecked = ref(false)

    const percent = ref(0)
    setInterval(() => {
      if (percent.value >= 100) percent.value = 0
      else percent.value += 1
    }, 200)

    return { line, isChecked, percent }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
.demo {
  background-color: $white;
  padding: $p;
  border-radius: $br;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
