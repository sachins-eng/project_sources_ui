<template>
	<HeadlessTransitionRoot appear :show="isOpen" as="template">
		<HeadlessDialog @close="closeModal" class="relative z-10" as="div">
			<HeadlessTransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25" />
			</HeadlessTransitionChild>

			<!-- Overflow container -->
			<div class="fixed inset-0 overflow-y-auto">
				<!-- Positon container -->
				<div class="flex h-full p-4">
					<HeadlessTransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 -translate-x-10"
						leave="duration-200 ease-in"
						leave-to="opacity-0 -translate-x-10"
					>
						<HeadlessDialogPanel
							class="w-full relative max-w-xs transform overflow-hidden shadow-xl transition-all"
						>
							<Sidebar @closeModal="closeModal()" />
						</HeadlessDialogPanel>
					</HeadlessTransitionChild>
				</div>
			</div>
		</HeadlessDialog>
	</HeadlessTransitionRoot>
</template>

<script setup>
	const isOpen = ref(false);

	function closeModal() {
		isOpen.value = false;
	}
	function openModal() {
		isOpen.value = true;
	}
	defineExpose({ closeModal, openModal });
</script>
