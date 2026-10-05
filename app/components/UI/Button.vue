<template>
	<button
		class="btn"
		:class="[`btn--${variant}`, size === 'sm' && 'btn--sm']"
		:type="type"
		:disabled="disabled"
	>
		<slot />
	</button>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		variant?: "primary" | "ghost" | "accent";
		size?: "md" | "sm";
		type?: "button" | "submit" | "reset";
		disabled?: boolean;
	}>(),
	{
		variant: "primary",
		size: "md",
		type: "button",
		disabled: false,
	},
);
</script>

<style lang="scss" scoped>
@use "sass:color";

.btn {
	font-family: $font-display;
	font-weight: $font-weight-bold;
	font-size: $font-size-md;
	border-radius: $radius-pill;
	padding: $font-size-md $space-5;
	border: 0;
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: $space-2;
	line-height: 1.2;
	text-decoration: none;
	transition:
		opacity $ease-default,
		transform $ease-default,
		background $ease-default,
		border-color $ease-default;
}

.btn:hover:not(:disabled) {
	transform: translateY(-1px);
}

.btn:focus-visible {
	outline: 2px solid $color-accent;
	outline-offset: 3px;
}

.btn--primary {
	background: $color-text;
	color: $color-ink;
}

.btn--ghost {
	background: transparent;
	color: $color-text;
	border: 1px solid color.change($color-text, $alpha: 0.28);
}

.btn--accent {
	background: $color-accent;
	color: $color-on-accent;
}

.btn--sm {
	font-size: $font-size-sm;
	padding: $space-2 $space-3;
}

.btn:disabled {
	opacity: 0.4;
	cursor: not-allowed;
	transform: none;
}
</style>
