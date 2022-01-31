<template>
  <div class="demo">
    <VInput v-model="line" placeholder="Имя" />
    <VInput v-model="line" placeholder="Имя" disabled />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import VInput from '@/components/VInput.vue'

export default defineComponent({
  components: { VInput },
  setup() {
    const line = ref('')

    return { line }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
.demo {
  background-color: $white;
  padding: $p;
  border-radius: $br;
}
</style>
