<template>
	<button
		class="chip"
		:class="{ 'chip--active': active }"
		type="button"
		:aria-pressed="active"
		@click="emit('click', $event)"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		active?: boolean;
	}>(),
	{
		active: false,
	},
);

const emit = defineEmits<{
	click: [event: MouseEvent];
}>();
</script>

<style lang="scss" scoped>
.chip {
	font-family: $font-display;
	font-size: $font-size-sm;
	font-weight: $font-weight-semibold;
	padding: $space-2 $space-3;
	border-radius: $radius-pill;
	border: 1px solid $color-line;
	color: $color-muted;
	background: transparent;
	cursor: pointer;
	transition:
		background $ease-default,
		border-color $ease-default,
		color $ease-default;
}

.chip:hover {
	border-color: rgba($color-text, 0.22);
	color: $color-text;
}

.chip--active {
	background: rgba($color-accent, 0.15);
	border-color: rgba($color-accent, 0.45);
	color: #ffd7cf;
}

.chip:focus-visible {
	outline: 2px solid $color-accent;
	outline-offset: 3px;
}
</style>
