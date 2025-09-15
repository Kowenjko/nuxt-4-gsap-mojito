<script lang="ts" setup>
import { cocktailLists, mockTailLists } from '@/constants'

onMounted(() => {
	const parallaxTimeline = gsapTimeline({
		scrollTrigger: {
			trigger: '#cocktails',
			start: 'top 30%',
			end: 'bottom 80%',
			scrub: true,
		},
	})

	parallaxTimeline
		.from('#c-left-leaf', {
			x: -100,
			y: 100,
		})
		.from('#c-right-leaf', {
			x: 100,
			y: 100,
		})
})
</script>

<template>
	<section id="cocktails" class="noisy">
		<img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
		<img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

		<div class="list">
			<div class="popular">
				<h2>Most popular cocktails:</h2>

				<ul>
					<li v-for="{ name, country, detail, price } in cocktailLists" :key="name">
						<div class="md:me-28">
							<h3>{{ name }}</h3>
							<p>{{ country }} | {{ detail }}</p>
						</div>
						<span>- {{ price }}</span>
					</li>
				</ul>
			</div>

			<div class="loved">
				<h2>Most loved mocktails:</h2>

				<ul>
					<li v-for="{ name, country, detail, price } in mockTailLists" :key="name">
						<div class="me-28">
							<h3>{{ name }}</h3>
							<p>{{ country }} | {{ detail }}</p>
						</div>
						<span>- {{ price }}</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
