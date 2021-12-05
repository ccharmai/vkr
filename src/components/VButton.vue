<template>
	<div class="v-button__wrapper" :class="{ [type]: true, disabled, full }" @click="clickHandler()">{{ placeholder }}</div>
</template>

<script lang="ts">
import { defineComponent, Prop, PropType } from 'vue'

type ButtonType = 'blue' | 'gray' | 'white' | 'green' | 'red'

export default defineComponent({
	props: {
		placeholder: { type: String, required: true },
		disabled:    { type: Boolean, default: false },
		full:        { type: Boolean, default: false },
		type:        { type: String as PropType<ButtonType>, default: 'blue' },
	},
	emits: ['click'],
	setup(props, { emit }) {

		const clickHandler = () => {
			if (props.disabled) return
			emit('click')
		}

		return { clickHandler }
	},
})
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';
.v-button__wrapper {
	color: $blue;
	display: inline-block;
	border-radius: 10px;
	padding: 7px 12px;
	cursor: pointer;
	transition: .3s ease-in-out box-shadow;
	&:hover:not(.disabled) { box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2); }
	&.blue { background-color: $blue; color: $white }
	&.disabled { opacity: .4; cursor: not-allowed; }
}
</style>
