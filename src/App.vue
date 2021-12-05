<template>
	<div id="app__wrapper">
		<VButton placeholder="Кнопка" />
		<VButton placeholder="Кнопка" disabled />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import VButton from './components/VButton.vue'

export default defineComponent({
	components: { VButton },
  setup() {},
})
</script>

<style lang="scss">
#app__wrapper {

}
</style>
