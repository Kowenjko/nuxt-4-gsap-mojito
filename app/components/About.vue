<script lang="ts" setup>
onMounted(() => {
	const titleSplit = SplitText.create('#about h2', {
		type: 'words',
	})

	const scrollTimeline = gsapTimeline({
		scrollTrigger: {
			trigger: '#about',
			start: 'top center',
		},
	})

	scrollTimeline
		.from(titleSplit.words, {
			opacity: 0,
			duration: 1,
			yPercent: 100,
			ease: 'expo.out',
			stagger: 0.02,
		})
		.from(
			'.top-grid div, .bottom-grid div',
			{
				opacity: 0,
				duration: 1,
				ease: 'power1.inOut',
				stagger: 0.04,
			},
			'-=0.5'
		)
})
</script>

<template>
	<div id="about">
		<div class="mb-16 md:px-0 px-5">
			<div class="content">
				<div class="md:col-span-8">
					<p class="badge">Best Cocktails</p>
					<h2>
						Where every detail matters <span class="text-white">-</span>
						from muddle to garnish
					</h2>
				</div>

				<div class="sub-content">
					<p>
						Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final
						garnish. That care is what turns a simple drink into something truly memorable.
					</p>

					<div>
						<p class="md:text-3xl text-xl font-bold"><span>4.5</span>/5</p>
						<p class="text-sm text-white-100">More than +12000 customers</p>
					</div>
				</div>
			</div>
		</div>

		<div class="top-grid">
			<div class="md:col-span-3">
				<div class="noisy" />
				<img src="/images/abt1.png" alt="grid-img-1" />
			</div>

			<div class="md:col-span-6">
				<div class="noisy" />
				<img src="/images/abt2.png" alt="grid-img-2" />
			</div>

			<div class="md:col-span-3">
				<div class="noisy" />
				<img src="/images/abt5.png" alt="grid-img-5" />
			</div>
		</div>

		<div class="bottom-grid">
			<div class="md:col-span-8">
				<div class="noisy" />
				<img src="/images/abt3.png" alt="grid-img-3" />
			</div>

			<div class="md:col-span-4">
				<div class="noisy" />
				<img src="/images/abt4.png" alt="grid-img-4" />
			</div>
		</div>
	</div>
</template>
