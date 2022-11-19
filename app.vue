<template>
	<div class="min-h-screen">
		<aside class="fixed w-80 h-full p-4 hidden lg:block">
			<!-- Actual container -->
			<Sidebar />
		</aside>
		<main class="lg:ml-80 lg:p-10 px-3 py-7">
			<!-- Mobile heading -->
			<MobileHeader />
			<!-- Heading -->
			<div class="flex items-center justify-between">
				<h1 class="lg:text-3xl text-2xl font-semibold">Project sources</h1>
				<div class="items-center gap-x-3 hidden lg:flex">
					<button
						class="text-sm border rounded-lg px-4 py-2.5 hover:bg-primary-50 hover:border-primary-light/20 transition"
					>
						Import
					</button>
					<button
						class="text-sm border rounded-lg px-4 py-2.5 border-primary bg-primary text-white hover:bg-primary-light transition"
					>
						Share
					</button>
				</div>
			</div>

			<!-- Tabs -->

			<div class="flex items-center gap-x-4 mt-10 w-full lg:w-auto">
				<HeadlessTabGroup>
					<TabHolder>
						<TabItem>Overview</TabItem>
						<TabItem>Visual tagger</TabItem>
						<TabItem>Debugger</TabItem>
					</TabHolder>
				</HeadlessTabGroup>
				<button
					class="flex items-center px-4 py-3 text-sm gap-x-3 rounded-md outline-none lg:focus:ring-1 focus:ring-primary/10"
				>
					<Plus class="w-3 h-3 stroke-2 stroke-primary" />
					<span class="hidden lg:block">Add custom</span>
				</button>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 lg:divide-x gap-y-10 lg:gap-y-0">
				<!-- Sources -->
				<Sources />
				<!-- Sources Deleted -->
				<SourcesDeleted />
			</div>
		</main>
	</div>
</template>

<script setup>
	import Plus from "@/assets/icons/plus.svg";
</script>
