<template>
	<div class="lg:hidden flex items-center justify-between mb-14">
		<div class="flex items-center gap-2">
			<PlaceholderIcon class="stroke-primary stroke-2 w-6 h-6" />
			<h1 class="font-medium text-lg">Untitled UI</h1>
		</div>
		<div class="flex items-center gap-x-4">
			<img
				src="https://randomuser.me/api/portraits/med/women/75.jpg"
				alt="Logged in user"
				class="w-9 h-9 rounded-full object-cover"
			/>
			<button @click="$refs.mobileMenu.openModal()">
				<MenuIcon class="stroke-primary w-5 h-5" />
			</button>
		</div>
		<MobileMenu ref="mobileMenu" />
	</div>
</template>

<script setup>
	import PlaceholderIcon from "@/assets/icons/placeholder.svg";
	import MenuIcon from "@/assets/icons/menu.svg";
</script>
