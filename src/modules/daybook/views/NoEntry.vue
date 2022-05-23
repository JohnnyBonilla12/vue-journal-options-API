<template>
	<div class="d-flex justify-content-center">
		<h1 class="align-self-center">No hay nada seleccionado.</h1>
	</div>

	<FloatingButton />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
	components: { 
		FloatingButton: defineAsyncComponent(() => import(/*webpackChunkName: "FloatingButton"*/ '../components/FloatingButton.vue'))
	}
}
</script>

<style lang="scss" scoped>
div {
    height: 100vh;
}
</style>>