<template>
	<div class="lg:pl-10">
		<!-- Heading -->
		<div class="flex items-center justify-between">
			<h2 class="text-lg font-medium">Sources deleted</h2>
			<ButtonOutline size="text-sm"> View in Schema </ButtonOutline>
		</div>
		<!-- Tabs -->
		<div class="flex items-center justify-between mt-10">
			<HeadlessTabGroup>
				<TabHolder>
					<TabItem>Pretty</TabItem>
					<TabItem>Raw</TabItem>
					<TabItem>Violations</TabItem>
				</TabHolder>
			</HeadlessTabGroup>
			<ButtonOutline size="text-sm" padding="px-4 py-3" class="gap-x-3 text-primary">
				<Copy class="w-4 h-4 stroke-primary stroke-2" />
				<span>Copy</span>
			</ButtonOutline>
		</div>
		<div class="border mt-10 rounded-xl overflow-hidden">
			<MonacoEditor
				:options="{
					minimap: {
						enabled: false,
					},
					wordWrap: 'on',
					fontSize: 15,
				}"
				class="h-[450px] w-full"
				v-model="value"
				lang="typescript"
			/>
		</div>
	</div>
</template>

<script setup>
	import SearchIcon from "@/assets/icons/search.svg";
	import Copy from "@/assets/icons/copy.svg";

	const value = ref(`// Imports
import mongoose, { Schema } from 'mongoose';

// Collection name
export const collection = 'Design';

// Schema
const schema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String
	}
}, { timestamp: true});

// Model
export default mongoose.model(collection, schema);`);
</script>
