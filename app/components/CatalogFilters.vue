<template>
	<div class="catalog-filters" role="group" aria-label="Фильтры каталога">
		<UIChip
			v-for="filter in filters"
			:key="filter.id"
			:active="modelValue === filter.id"
			@click="emit('update:modelValue', filter.id)"
		>
			{{ filter.label }}
		</UIChip>
	</div>
</template>

<script lang="ts" setup>
export type CatalogFilter = {
	id: string;
	label: string;
};

defineProps<{
	filters: CatalogFilter[];
	modelValue: string;
}>();

const emit = defineEmits<{
	"update:modelValue": [value: string];
}>();
</script>

<style lang="scss" scoped>
.catalog-filters {
	display: flex;
	flex-wrap: wrap;
	gap: $space-2;
}
</style>
