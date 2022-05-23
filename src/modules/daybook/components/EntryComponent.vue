<template>
	<div 
		class="mb-3 pointer p-2 entry-container"
		@click="$router.push({ name: 'entry', params: { id: 10 } })"
	>
		<!-- Titulo -->
		<div class="entry-tittle d-flex">
			<span class="text-success fs-5 fw-bold">17</span>
			<span class="mx-1 fs-5">Mayo</span>
			<span class="mx-2 fw-light">2022, martes.</span>
		</div>

		<!-- Contenido -->
		<div class="entry-description">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita beatae asperiores aliquid eveniet rem corrupti ullam aperiam ea recusandae totam. Fugit deserunt deleniti dolor repellendus ipsum quisquam, voluptatum consequuntur quidem!
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
	border-bottom: 1px solid #2c3e50;
	transition: 0.2s all ease-in;
	
	&:hover {
		background-color: lighten($color: grey, $amount: 45);
		transition: 0.2s all ease-in;
	}
}

.entry-description {
	font-size: 12px;
}
</style>