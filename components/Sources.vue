<template>
	<div class="lg:pr-10">
		<!-- Heading -->
		<div
			class="flex flex-col lg:flex-row items-start lg:items-center mt-10 lg:mt-0 justify-between"
		>
			<h2 class="text-lg font-medium">Sources</h2>
			<div
				class="mt-6 flex items-center rounded-lg text-sm py-3 px-3 gap-x-2 border lg:w-80 w-full"
			>
				<SearchIcon class="stroke-primary-light stroke-2 w-4 h-4" />
				<input placeholder="Search" type="search" class="grow bg-transparent outline-none" />
			</div>
		</div>
		<!-- Tabs -->
		<div class="flex items-center mt-10 w-full lg:w-auto">
			<HeadlessTabGroup>
				<TabHolder>
					<TabItem>Overview</TabItem>
					<TabItem>Visual tagger</TabItem>
				</TabHolder>
			</HeadlessTabGroup>
		</div>
		<!-- Table -->
		<div class="overflow-x-auto w-full mt-10">
			<table class="w-full">
				<thead>
					<tr class="text-sm align-middle text-left border-b">
						<th class="p-3 font-medium">Action</th>
						<th class="p-3 font-medium">Status</th>
						<th class="p-3 font-medium">Date</th>
					</tr>
				</thead>
				<tbody>
					<template v-for="data in 10" :key="`tableData-${data}`">
						<tr class="text-sm border-b hover:bg-primary-50">
							<td class="py-5 lg:w-[55%]">
								<h1 class="font-medium">Sign Up Complete</h1>
							</td>
							<td>
								<button class="border border-primary-light rounded-full p-1 px-2 text-xs">
									Track
								</button>
							</td>
							<td class="text-slate-500">January 6, 2022</td>
						</tr>
					</template>
				</tbody>
				<tfoot>
					<tr>
						<td>
							<div class="py-5 text-sm text-primary-light">Page 1 of 10</div>
						</td>
						<td colspan="2">
							<div class="flex items-center gap-x-3 justify-end">
								<ButtonOutline> Prev </ButtonOutline>
								<ButtonOutline> Next </ButtonOutline>
							</div>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
</template>

<script setup>
	import SearchIcon from "@/assets/icons/search.svg";
</script>
