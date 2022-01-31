<template>
  <div class="layout">
    <TheMenu />
    <div class="content">
      <!-- <Demo /> -->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import TheMenu from '@/components/TheMenu.vue'
import Demo from '@/components/Demo.vue'

export default defineComponent({
  components: { TheMenu, Demo },
  setup() {}
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
.layout {
  width: 100%;
  height: 100%;
  padding: $p;
  display: flex;
  gap: $p;
  .content {
    flex-grow: 1;
  }
}
</style>
