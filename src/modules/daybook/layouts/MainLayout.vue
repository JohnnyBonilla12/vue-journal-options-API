<template>
	<NavbarComponent />

	<div class="d-flex">
		<div class="col-4">
			<EntryList />
		</div>

		<div class="col">
			<router-view />
		</div>
	</div>
</template>

<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import { defineAsyncComponent } from '@vue/runtime-core';
export default {
	components: {
		NavbarComponent,
		EntryList: defineAsyncComponent(() => import(/* webpackChunkName: "Daybook/EntryList" */ '../components/EntryList.vue'))
	}
}
</script>