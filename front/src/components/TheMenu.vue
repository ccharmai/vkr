<template>
  <div class="the-menu">
    <div class="the-menu__container">
      <div class="top">KK</div>
      <div class="center">&</div>
      <div class="bottom">$</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {}
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars';
.the-menu {
  background-color: $white;
  padding: $p;
  border-radius: $br;
  width: 90px;
  &__container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: $p;
    align-items: center;
    .top {}
    .center {}
    .bottom {
      margin-top: auto;
    }
  }
}
</style>
