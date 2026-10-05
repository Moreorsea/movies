<template>
	<span class="status" :class="`status--${tone}`">
		<slot />
	</span>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		tone?: "ok" | "wait";
	}>(),
	{
		tone: "ok",
	},
);
</script>

<style lang="scss" scoped>
.status {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-family: $font-display;
	font-size: $font-size-xs;
	font-weight: $font-weight-bold;
	letter-spacing: 0.04em;
	text-transform: uppercase;
	border-radius: $radius-pill;
	padding: $space-2 $space-3;
	white-space: nowrap;
}

.status--ok {
	color: $color-ok;
	border: 1px solid rgba($color-ok, 0.35);
	background: rgba($color-ok, 0.08);
}

.status--wait {
	color: $color-accent-2;
	border: 1px solid rgba($color-accent-2, 0.35);
	background: rgba($color-accent-2, 0.08);
}
</style>
