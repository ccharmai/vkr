<template>
  <div class="the-menu">
    <div class="the-menu__container">
      <div class="top">KK</div>
      <div class="center">
        <router-link v-for="page in pages" :key="page.url" :to="page.url" class="link" :class="{ 'current': page.url === route.path }">{{ page.name }}</router-link>
      </div>
      <div class="bottom">$</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {

    const route = useRoute()

    const pages = [
      { url: '/',     name: 'Главная' },
      { url: '/demo', name: 'Демо'    },
    ]

    return { route, pages }
  }
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
    // .top {}
    .center {
      display: flex;
      flex-direction: column;
      gap: .5em;
      text-align: center;
      .link {
        text-decoration: none;
        color: black;
        &.current {
          font-weight: bold;
        }
      }
    }
    .bottom {
      margin-top: auto;
    }
  }
}
</style>
