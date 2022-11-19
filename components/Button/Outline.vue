<template>
	<button
		:class="[size, padding]"
		class="font-medium flex items-center border rounded-lg hover:bg-primary-50 hover:border-primary-light/20 transition"
	>
		<slot />
	</button>
</template>

<script setup>
	defineProps({
		size: {
			type: String,
			default: "text-xs",
		},
		padding: {
			type: String,
			default: "px-4 py-2",
		},
	});
</script>
