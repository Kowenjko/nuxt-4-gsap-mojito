<script lang="ts" setup>
import { useMediaQuery } from '@vueuse/core'

const isMobile = useMediaQuery('(max-width: 767px)')
const videoRef = useTemplateRef('videoRef')

onMounted(() => {
	const heroSplit = new SplitText('.title', {
		type: 'chars, words',
	})

	const paragraphSplit = new SplitText('.subtitle', {
		type: 'lines',
	})

	heroSplit.chars.forEach((char) => char.classList.add('text-gradient'))

	gsapFrom(heroSplit.chars, {
		yPercent: 100,
		duration: 1.8,
		ease: 'expo.out',
		stagger: 0.06,
	})

	gsapFrom(paragraphSplit.lines, {
		opacity: 0,
		yPercent: 100,
		duration: 1.8,
		ease: 'expo.out',
		stagger: 0.06,
		delay: 1,
	})

	gsapTimeline({
		scrollTrigger: {
			trigger: '#hero',
			start: 'top top',
			end: 'bottom top',
			scrub: true,
		},
	})
		.to('.right-leaf', { y: 200 }, 0)
		.to('.left-leaf', { y: -200 }, 0)
		.to('.arrow', { y: 100 }, 0)

	const startValue = isMobile.value ? 'top 50%' : 'center 60%'
	const endValue = isMobile.value ? '120% top' : 'bottom top'

	let tl = gsapTimeline({
		scrollTrigger: {
			trigger: 'video',
			start: startValue,
			end: endValue,
			scrub: true,
			pin: true,
			markers: true,
		},
	})

	videoRef.value.onloadedmetadata = () => {
		tl.to(videoRef.value, {
			currentTime: videoRef.value?.duration,
		})
	}
})
</script>

<template>
	<section id="hero" class="noisy">
		<h1 class="title">MOJITO</h1>

		<img src="/images/hero-left-leaf.png" alt="left-leaf" class="left-leaf" />
		<img src="/images/hero-right-leaf.png" alt="right-leaf" class="right-leaf" />

		<div class="body">
			<img src="/images/arrow.png" alt="arrow" class="arrow" />

			<div class="content">
				<div class="space-y-5 hidden md:block">
					<p>Cool. Crisp. Classic.</p>
					<p class="subtitle">
						Sip the Spirit <br />
						of Summer
					</p>
				</div>

				<div class="view-cocktails">
					<p class="subtitle">
						Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes —
						designed to delight your senses.
					</p>
					<a href="#cocktails">View cocktails</a>
				</div>
			</div>
		</div>
	</section>

	<div class="video absolute inset-0">
		<video ref="videoRef" muted playsInline preload="auto" src="/videos/output.mp4" />
	</div>
</template>
