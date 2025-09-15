// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['v-gsap-nuxt', '@nuxt/image', '@nuxt/fonts', '@formkit/auto-animate/nuxt'],
	fonts: {
		families: [
			{ name: 'Mona+Sans', provider: 'google' },
			{ name: 'DM Serif Text', provider: 'google' },
		],
	},
	vite: {
		plugins: [tailwindcss()],
	},
})
