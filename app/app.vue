<script lang="ts" setup>
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Gsap Mojito` : 'Gsap Mojito'
	},
})
</script>

<template>
	<nuxt-layout>
		<nuxt-page />
	</nuxt-layout>
</template>
