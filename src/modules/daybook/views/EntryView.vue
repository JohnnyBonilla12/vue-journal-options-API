<template>
	<div class="entry-title d-flex justify-content-between p-2">
		<div>
			<span class="text-success fs-3 fw-bold">19</span>
			<span class="mx-1 fs-3">Mayo</span>
			<span class="mx-2 fs-4 fw-light">2022, Jueves.</span>
		</div>

		<div>
			<button class="btn btn-danger mx-2">
				Borrar
				<i class="fa fa-trash-alt"></i>
			</button>

			<button class="btn btn-secondary">
				Subir Foto
				<i class="fa fa-upload"></i>
			</button>
		</div>
	</div>

	<hr>

	<div class="d-flex flex-column px-3 h-75">
		<textarea placeholder="¿Qué sucedió hoy?"></textarea>
	</div>

	<FloatingButton 
		icon="fa-save"
	/>

	<img class="img-thumbnail" src="https://m.media-amazon.com/images/I/51TLN7-zU9L._AC_SY450_.jpg" alt="entry-picture">
</template>

<script>
	import { defineAsyncComponent } from '@vue/runtime-core'

	export default {
		components: {
			FloatingButton: defineAsyncComponent(() => import(/*webpackChunkName: "FB"*/ '../components/FloatingButton.vue'))
		}
	}
</script>

<style lang="scss" scoped>
	textarea {
		border: none;
		font-size: 20px;
		height: 100%;
		resize: none;

		&:focus {
			outline: none;
		}
	}

	img {
		bottom: 150px;
		box-shadow: 0px 5px 10px rgba($color: #000, $alpha: 0.2);
		position: fixed;
		right: 20px;
		width: 200px;
	}
</style>