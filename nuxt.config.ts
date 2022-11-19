const title = "Project Sources | Untitled UI";
const shortTitle = "Project Sources";
const description = "Dashboard sources inspector/debugger concept.";
const image = "https://projectsources.behonbaker.com/image.webp";
const url = "https://projectsources.behonbaker.com/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// since TypeScript Vue Plugin (Volar) is install in my environ
	typescript: {
		shim: false,
	},
	// Add modules
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-svgo",
		"nuxt-headlessui",
		"nuxt-monaco-editor",
		"@kevinmarrec/nuxt-pwa",
	],
	// Custom tailwind path
	tailwindcss: {
		cssPath: "~/assets/main.css",
	},

	app: {
		head: {
			// Add title
			title: "Project Sources",
			titleTemplate: "%s | Untitled UI",
			// Add font (INTER)
			link: [
				{ rel: "preconnect", href: "https://rsms.me/" },
				{ rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{
					rel: "canonical",
					href: url,
				},
			],
			meta: [
				{
					hid: "description",
					name: "description",
					content: description,
				},
				{ property: "og:site_name", content: title },
				{ hid: "og:type", property: "og:type", content: "website" },
				{
					hid: "og:url",
					property: "og:url",
					content: url,
				},
				{
					hid: "og:image:secure_url",
					property: "og:image:secure_url",
					content: image,
				},
				{
					hid: "og:title",
					property: "og:title",
					content: title,
				},
				{
					hid: "og:description",
					property: "og:description",
					content: description,
				},
				{
					hid: "og:image",
					property: "og:image",
					content: image,
				},
				//Twitter
				{ name: "twitter:card", content: "summary_large_image" },
				{
					hid: "twitter:url",
					name: "twitter:url",
					content: url,
				},
				{
					hid: "twitter:title",
					name: "twitter:title",
					content: title,
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					content: description,
				},
				{
					hid: "twitter:image",
					name: "twitter:image",
					content: image,
				},
			],
		},
	},

	pwa: {
		meta: {
			name: shortTitle,
			author: "Behon Baker + Jordan Hughes",
			theme_color: "#111727",
			description: description,
		},
		manifest: {
			name: shortTitle,
			short_name: shortTitle,
			theme_color: "#111727",
			description: description,
		},
	},
});
