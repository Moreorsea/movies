<template>
	<component
		:is="to ? NuxtLink : 'div'"
		class="movie-poster"
		:class="{ 'movie-poster--link': Boolean(to) }"
		:to="to"
	>
		<div class="movie-poster__art">
			<img
				v-if="src"
				class="movie-poster__image"
				:src="src"
				:alt="altText"
				loading="lazy"
				decoding="async"
			/>
			<div v-else class="movie-poster__placeholder" aria-hidden="true" />

			<span v-if="rating != null" class="movie-poster__score">
				{{ formattedRating }}
			</span>

			<span v-if="showTitle && title" class="movie-poster__title">
				{{ title }}
			</span>
		</div>
	</component>
</template>

<script lang="ts" setup>
const props = withDefaults(
	defineProps<{
		/** URL постера */
		src?: string | null;
		/** Название фильма */
		title: string;
		/** Рейтинг (TMDB и т.п.) */
		rating?: number | string | null;
		/** Ссылка на карточку — если задана, постер кликабелен */
		to?: string;
		/** Показывать название поверх постера (rail на главной) */
		showTitle?: boolean;
		alt?: string;
	}>(),
	{
		src: null,
		rating: null,
		to: undefined,
		showTitle: false,
		alt: undefined,
	},
);

const NuxtLink = resolveComponent("NuxtLink");

const altText = computed(() => props.alt ?? props.title);

const formattedRating = computed(() => {
	if (props.rating == null) {
		return "";
	}

	if (typeof props.rating === "number") {
		return props.rating.toFixed(1);
	}

	return props.rating;
});
</script>

<style lang="scss" scoped>
.movie-poster {
	display: block;
	width: 100%;
	min-width: 0;
}

.movie-poster--link {
	text-decoration: none;
	color: inherit;
	transition: transform $ease-default;

	&:hover .movie-poster__image {
		transform: scale(1.04);
	}

	&:focus-visible {
		outline: 2px solid $color-accent;
		outline-offset: 3px;
		border-radius: $radius-sm;
	}
}

.movie-poster__art {
	position: relative;
	aspect-ratio: 2 / 3;
	border-radius: $radius-sm;
	overflow: hidden;
	background: $color-bg-elev;
}

.movie-poster__image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	transition: transform 0.35s ease;
}

.movie-poster__placeholder {
	width: 100%;
	height: 100%;
	background:
		linear-gradient(145deg, rgba($color-text, 0.06), transparent 55%),
		$color-bg-elev;
}

.movie-poster__score {
	position: absolute;
	top: $space-2;
	left: $space-2;
	z-index: 1;
	font-family: $font-display;
	font-size: $font-size-xs;
	font-weight: $font-weight-bold;
	line-height: 1;
	padding: $space-1 $space-2;
	border-radius: $radius-pill;
	background: rgba($color-ink, 0.7);
	border: 1px solid rgba($color-text, 0.12);
	color: $color-text;
}

.movie-poster__title {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	padding: $space-6 $space-3 $space-3;
	background: linear-gradient(transparent, rgba($color-ink, 0.85));
	font-family: $font-display;
	font-size: $font-size-sm;
	font-weight: $font-weight-bold;
	color: $color-text;
}
</style>
