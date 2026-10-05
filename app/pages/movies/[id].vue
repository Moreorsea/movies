<template>
	<section class="detail" aria-labelledby="detail-title">
		<div class="detail__bg" aria-hidden="true">
			<img
				class="detail__bg-image"
				:src="movie.backdropUrl"
				alt=""
			/>
		</div>

		<div class="detail__body">
			<div class="detail__poster">
				<img :src="movie.posterUrl" :alt="movie.title" />
			</div>

			<div class="detail__info">
				<p class="detail__kicker">{{ movie.kicker }}</p>
				<h1 id="detail-title" class="detail__title">{{ movie.title }}</h1>
				<p class="detail__text">{{ movie.overview }}</p>

				<div class="detail__meta">
					<UIPill>{{ movie.year }}</UIPill>
					<UIPill>{{ movie.genre }}</UIPill>
					<UIPill>{{ movie.runtime }}</UIPill>
					<UIPill>TMDB {{ movie.tmdbRating.toFixed(1) }}</UIPill>
				</div>

				<div class="detail__actions">
					<UIButton variant="primary" @click="inList = !inList">
						{{ inList ? "В списке" : "В мой список" }}
					</UIButton>
					<UIButton variant="ghost" @click="navigateTo('/my/list')">
						Написать отзыв
					</UIButton>
					<UIRating v-model="userRating" />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import { getMockMovie } from "#shared/mocks/movies";

const route = useRoute();
const id = computed(() => String(route.params.id));

const movie = computed(() => getMockMovie(id.value));

const userRating = ref<number | null>(null);
const inList = ref(false);

watch(
	movie,
	(value) => {
		userRating.value = value.userRating ?? null;
		inList.value = false;
		useSeoMeta({
			title: `${value.title} — Что посмотреть`,
			description: value.overview,
		});
	},
	{ immediate: true },
);
</script>

<style lang="scss" scoped>
.detail {
	position: relative;
	min-height: calc(100vh - 4.5rem);
	isolation: isolate;
	overflow: hidden;
}

.detail__bg {
	position: absolute;
	inset: 0;
	z-index: 0;
	pointer-events: none;
}

.detail__bg-image {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center right;
}

.detail__bg::after {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 1;
	background:
		linear-gradient(
			90deg,
			rgba($color-bg, 0.96) 28%,
			rgba($color-bg, 0.7) 52%,
			rgba($color-bg, 0.28) 78%,
			rgba($color-bg, 0.18) 100%
		),
		linear-gradient(180deg, rgba($color-bg, 0.2) 0%, transparent 35%, rgba($color-bg, 0.92) 100%);
}

.detail__body {
	position: relative;
	z-index: 1;
	max-width: $shell;
	margin: 0 auto;
	padding: $space-5 $space-5 $space-6;
	display: grid;
	grid-template-columns: 220px 1fr;
	gap: $space-6;
	align-items: start;
	min-height: calc(100vh - 4.5rem);
}

.detail__poster {
	aspect-ratio: 2 / 3;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
	background: $color-bg-elev;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.detail__info {
	min-width: 0;
	padding-top: $space-2;
}

.detail__kicker {
	margin: 0 0 $space-2;
	font-family: $font-display;
	font-size: $font-size-xs;
	letter-spacing: $letter-wide;
	text-transform: uppercase;
	color: $color-accent;
}

.detail__title {
	margin: 0 0 $space-3;
	max-width: 12ch;
	font-family: $font-display;
	font-weight: $font-weight-extrabold;
	font-size: clamp(2.4rem, 5vw, 4.2rem);
	letter-spacing: -0.05em;
	line-height: 0.95;
	color: $color-text;
}

.detail__text {
	margin: 0 0 $space-4;
	max-width: 36rem;
	font-size: clamp(1.1rem, 2vw, 1.3rem);
	line-height: 1.35;
	color: rgba($color-text, 0.82);
}

.detail__meta {
	display: flex;
	flex-wrap: wrap;
	gap: $space-2;
	margin-bottom: $space-4;
}

.detail__actions {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: $space-3;
}

@media (max-width: 800px) {
	.detail,
	.detail__body {
		min-height: 0;
	}

	.detail__body {
		grid-template-columns: 1fr;
		align-items: start;
		padding-top: $space-4;
	}

	.detail__poster {
		width: min(220px, 55%);
	}

	.detail__bg-image {
		object-position: center;
	}
}
</style>
