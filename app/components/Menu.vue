<script lang="ts" setup>
import { allCocktails } from '@/constants'

const currentIndex = ref(0)
const contentRef = useTemplateRef('contentRef')
const totalCocktails = allCocktails.length

const getCocktailAt = (indexOffset: number): any => {
	return allCocktails[(currentIndex.value + indexOffset + totalCocktails) % totalCocktails]
}

const goToSlide = (index: number) => {
	const newIndex = (index + totalCocktails) % totalCocktails
	currentIndex.value = newIndex
}

const currentCocktail = computed(() => getCocktailAt(0))
const prevCocktail = computed(() => getCocktailAt(-1))
const nextCocktail = computed(() => getCocktailAt(1))

const animatedContent = () => {
	gsapFromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 })
	gsapFromTo(
		'.cocktail img',
		{ opacity: 0, xPercent: -100 },
		{
			xPercent: 0,
			opacity: 1,
			duration: 1,
			ease: 'power1.inOut',
		}
	)
	gsapFromTo(
		'.details h2',
		{ yPercent: 100, opacity: 0 },
		{
			yPercent: 0,
			opacity: 100,
			ease: 'power1.inOut',
		}
	)
	gsapFromTo(
		'.details p',
		{ yPercent: 100, opacity: 0 },
		{
			yPercent: 0,
			opacity: 100,
			ease: 'power1.inOut',
		}
	)
}

onMounted(() => {
	animatedContent()
})

watch(currentIndex, animatedContent)
</script>

<template>
	<section id="menu" aria-labelledby="menu-heading">
		<img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
		<img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

		<h2 id="menu-heading" class="sr-only">Cocktail Menu</h2>

		<nav class="cocktail-tabs" aria-label="Cocktail Navigation">
			<button
				v-for="(cocktail, index) in allCocktails"
				:key="cocktail.id"
				:class="index === currentIndex ? 'text-white border-white' : 'text-white/50 border-white/50'"
				@click="goToSlide(index)"
			>
				{{ cocktail.name }}
			</button>
		</nav>

		<div class="content">
			<div class="arrows">
				<button class="text-left" @click="goToSlide(currentIndex - 1)">
					<span>{{ prevCocktail?.name }}</span>
					<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
				</button>

				<button class="text-left" @click="goToSlide(currentIndex + 1)">
					<span>{{ nextCocktail?.name }}</span>
					<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
				</button>
			</div>

			<div class="cocktail">
				<img :src="currentCocktail?.image" class="object-contain" />
			</div>

			<div class="recipe">
				<div ref="contentRef" class="info">
					<p>Recipe for:</p>
					<p id="title">{{ currentCocktail?.name }}</p>
				</div>

				<div class="details">
					<h2>{{ currentCocktail?.title }}</h2>
					<p>{{ currentCocktail?.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>
