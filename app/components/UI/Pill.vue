<template>
	<span class="pill">
		<slot />
	</span>
</template>

<style lang="scss" scoped>
.pill {
	display: inline-flex;
	align-items: center;
	font-family: $font-display;
	font-size: $font-size-xs;
	font-weight: $font-weight-bold;
	padding: $space-2 $space-3;
	border-radius: $radius-pill;
	background: rgba($color-text, 0.08);
	color: $color-text;
}
</style>
