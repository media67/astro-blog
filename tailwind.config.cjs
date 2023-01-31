/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				// Simple 8 row grid
				'8': 'repeat(8, minmax(0, 1fr))',
		
				// Complex site-specific row configuration
				'layout': 'auto 1fr auto',
			  }
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
}
