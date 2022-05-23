<template>
	<div class="entry-list-container">
		<div class="px-4 py-2">
			<input 
				type="text"
				class="form-control"
				placeholder="Buscar Entradas"
			>
		</div>

		<div class="entry-scroll-area">
			<h2
				v-for="item in 100"
				:key="item"
			>
				<Entry />
			</h2>
		</div>
	</div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'

export default {
	components: {
		Entry: defineAsyncComponent(() => import(/*webpackChunkName: "EntryComponent"*/ '../components/EntryComponent.vue'))
	}
}
</script>

<style lang="scss" scoped>
.entry-list-container {
	border-right: 1px solid #2c3e50;
	height: 100%;
}

.entry-scroll-area {
	height: 93vh;
	overflow: scroll;
	overflow-x: hidden;
}
</style>