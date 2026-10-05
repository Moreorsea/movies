<template>
	<NuxtLink class="search-result" :to="to">
		<div class="search-result__thumb">
			<img
				v-if="posterUrl"
				:src="posterUrl"
				:alt="title"
				loading="lazy"
				decoding="async"
			/>
		</div>

		<div class="search-result__body">
			<p class="search-result__title">{{ title }}</p>
			<p class="search-result__meta">{{ meta }}</p>
		</div>

		<UIPill v-if="rating != null">{{ formattedRating }}</UIPill>
	</NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
	title: string;
	to: string;
	posterUrl?: string | null;
	year: number | string;
	genre: string;
	rating?: number | string | null;
}>();

const meta = computed(() => `${props.year} · ${props.genre}`);

const formattedRating = computed(() => {
	if (props.rating == null) {
		return "";
	}

	return typeof props.rating === "number"
		? props.rating.toFixed(1)
		: props.rating;
});
</script>

<style lang="scss" scoped>
.search-result {
	display: grid;
	grid-template-columns: 48px 1fr auto;
	gap: $space-3;
	align-items: center;
	padding: $space-3;
	border-radius: 0.9rem;
	border: 1px solid transparent;
	background: rgba($color-text, 0.02);
	text-decoration: none;
	color: inherit;
	transition:
		border-color $ease-default,
		background $ease-default;
}

.search-result:hover {
	border-color: $color-line;
	background: rgba($color-text, 0.04);
}

.search-result:focus-visible {
	outline: 2px solid $color-accent;
	outline-offset: 3px;
}

.search-result__thumb {
	width: 48px;
	height: 64px;
	border-radius: 0.45rem;
	overflow: hidden;
	background: $color-bg-elev;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.search-result__title {
	margin: 0;
	font-family: $font-display;
	font-weight: $font-weight-bold;
	font-size: 1rem;
	color: $color-text;
}

.search-result__meta {
	margin: $space-1 0 0;
	color: $color-muted;
	font-size: 1.05rem;
}
</style>
