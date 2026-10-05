<template>
	<article class="movie-card">
		<NuxtLink class="movie-card__link" :to="to">
			<MoviePoster
				:title="title"
				:src="src"
				:rating="rating"
			/>
			<div class="movie-card__meta">
				<h3 class="movie-card__title">{{ title }}</h3>
				<p v-if="subtitle" class="movie-card__subtitle">{{ subtitle }}</p>
			</div>
		</NuxtLink>
	</article>
</template>

<script lang="ts" setup>
const props = defineProps<{
	title: string;
	to: string;
	src?: string | null;
	rating?: number | string | null;
	year?: number | string | null;
	genre?: string | null;
}>();

const subtitle = computed(() => {
	const parts = [props.year, props.genre].filter(Boolean);
	return parts.length ? parts.join(" · ") : "";
});
</script>

<style lang="scss" scoped>
.movie-card {
	min-width: 0;
}

.movie-card__link {
	display: grid;
	gap: $space-2;
	text-decoration: none;
	color: inherit;
	border-radius: $radius-sm;
	transition: transform $ease-default;

	&:hover {
		transform: translateY(-2px);
	}

	&:focus-visible {
		outline: 2px solid $color-accent;
		outline-offset: 3px;
	}
}

.movie-card__meta {
	display: grid;
	gap: $space-1;
}

.movie-card__title {
	margin: 0;
	font-family: $font-display;
	font-size: 0.92rem;
	font-weight: $font-weight-bold;
	letter-spacing: -0.02em;
	color: $color-text;
}

.movie-card__subtitle {
	margin: 0;
	font-family: $font-body;
	font-size: 1rem;
	color: $color-muted;
}
</style>
