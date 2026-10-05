<template>
	<div class="rating" role="group" :aria-label="label">
		<span v-if="label" class="rating__label">{{ label }}</span>
		<div class="rating__scores">
			<button
				v-for="score in scores"
				:key="score"
				class="rating__score"
				:class="{ 'rating__score--on': modelValue === score }"
				type="button"
				:aria-pressed="modelValue === score"
				@click="emit('update:modelValue', score)"
			>
				{{ score }}
			</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		modelValue?: number | null;
		label?: string;
		min?: number;
		max?: number;
	}>(),
	{
		modelValue: null,
		label: "Моя оценка",
		min: 6,
		max: 10,
	},
);

const emit = defineEmits<{
	"update:modelValue": [value: number];
}>();

const scores = computed(() =>
	Array.from({ length: props.max - props.min + 1 }, (_, i) => props.min + i),
);
</script>

<style lang="scss" scoped>
.rating {
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	gap: $space-2;
	font-family: $font-display;
	font-size: $font-size-sm;
	color: $color-muted;
}

.rating__scores {
	display: flex;
	align-items: center;
	gap: $space-1;
}

.rating__score {
	width: 1.55rem;
	height: 1.55rem;
	border-radius: 0.4rem;
	display: grid;
	place-items: center;
	border: 1px solid $color-line;
	background: transparent;
	font-family: $font-display;
	font-weight: $font-weight-bold;
	font-size: $font-size-xs;
	color: $color-text;
	cursor: pointer;
	transition:
		background $ease-default,
		border-color $ease-default,
		color $ease-default;
}

.rating__score:hover {
	border-color: rgba($color-text, 0.28);
}

.rating__score--on {
	background: $color-accent-2;
	color: $color-ink;
	border-color: $color-accent-2;
}

.rating__score:focus-visible {
	outline: 2px solid $color-accent;
	outline-offset: 2px;
}
</style>
