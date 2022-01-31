<template>
  <div class="demo">
    <VInput v-model="line" placeholder="Имя" />
    <VInput v-model="line" placeholder="Имя" :disabled="isChecked" />
    <VCheck v-model="isChecked" text="Заблокировать ввод" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import VInput from '@/components/VInput.vue'
import VCheck from '@/components/VCheck.vue'

export default defineComponent({
  components: { VInput, VCheck },
  setup() {
    const line = ref('')

    const isChecked = ref(false)

    return { line, isChecked }
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
