<template>
	<div class="home">
		<section class="hero" aria-labelledby="hero-title">
			<div class="hero__bg" aria-hidden="true" />

			<div class="hero__content">
				<h1 id="hero-title" class="hero__brand">
					Что<em>посмотреть</em>
				</h1>
				<p class="hero__lead">
					Новинки, оценки и личный список — без шума, только то, что стоит вечера.
				</p>
				<div class="hero__actions">
					<UIButton variant="primary" @click="scrollToTrending">
						Открыть подборку
					</UIButton>
					<UIButton variant="ghost" @click="navigateTo('/movies')">
						В каталог
					</UIButton>
				</div>
			</div>
		</section>

		<section
			id="trending"
			class="trending"
			aria-labelledby="trending-title"
		>
			<h2 id="trending-title" class="trending__title">Сейчас в тренде</h2>

			<div class="trending__row">
				<MoviePoster
					v-for="movie in trendingMovies"
					:key="movie.id"
					class="trending__poster"
					:title="movie.title"
					:src="movie.posterUrl"
					:to="`/movies/${movie.id}`"
					show-title
				/>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
type MockMovie = {
	id: string;
	title: string;
	posterUrl: string;
};

const trendingMovies: MockMovie[] = [
	{
		id: "dune",
		title: "Dune",
		posterUrl:
			"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: "night-drive",
		title: "Night Drive",
		posterUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: "neon-city",
		title: "Neon City",
		posterUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: "afterglow",
		title: "Afterglow",
		posterUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: "orbit",
		title: "Orbit",
		posterUrl:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=400&q=80",
	},
	{
		id: "harbor",
		title: "Harbor",
		posterUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=400&q=80",
	},
];

function scrollToTrending() {
	document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style lang="scss" scoped>
.home {
	isolation: isolate;
}

.hero {
	position: relative;
	min-height: min(72vh, 720px);
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}

.hero__bg {
	position: absolute;
	inset: 0;
	z-index: 0;
	background:
		linear-gradient(
			90deg,
			rgba($color-bg, 0.92) 18%,
			rgba($color-bg, 0.55) 52%,
			rgba($color-bg, 0.35) 100%
		),
		linear-gradient(180deg, rgba($color-bg, 0.15) 0%, rgba($color-bg, 0.95) 88%),
		url("https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80")
			center / cover no-repeat;
}

.hero__content {
	position: relative;
	z-index: 1;
	max-width: $shell;
	width: 100%;
	margin: 0 auto;
	padding: $space-7 $space-5 $space-6;
	display: flex;
	flex-direction: column;
	gap: $space-4;
}

.hero__brand {
	margin: 0;
	max-width: 10ch;
	font-family: $font-display;
	font-weight: $font-weight-extrabold;
	font-size: clamp(3.4rem, 8vw, 6.2rem);
	line-height: 0.92;
	letter-spacing: -0.06em;
	color: $color-text;

	em {
		font-style: normal;
		color: $color-accent;
	}
}

.hero__lead {
	margin: 0;
	max-width: 28rem;
	font-size: clamp(1.15rem, 2.2vw, 1.45rem);
	line-height: 1.3;
	color: rgba($color-text, 0.86);
}

.hero__actions {
	display: flex;
	flex-wrap: wrap;
	gap: $space-3;
	margin-top: $space-2;
}

.trending {
	position: relative;
	z-index: 1;
	max-width: $shell;
	width: 100%;
	margin: 0 auto;
	padding: 0 $space-5 $space-6;
	display: grid;
	gap: $space-4;
}

.trending__title {
	margin: 0;
	font-family: $font-display;
	font-size: $font-size-sm;
	font-weight: $font-weight-semibold;
	letter-spacing: $letter-wide;
	text-transform: uppercase;
	color: $color-muted;
}

.trending__row {
	display: grid;
	grid-auto-flow: column;
	grid-auto-columns: 160px;
	gap: $space-3;
	overflow-x: auto;
	padding-bottom: $space-2;
	scrollbar-width: thin;
	scrollbar-color: rgba($color-text, 0.2) transparent;

	&::-webkit-scrollbar {
		height: 6px;
	}

	&::-webkit-scrollbar-thumb {
		background: rgba($color-text, 0.2);
		border-radius: $radius-pill;
	}
}

.trending__poster {
	width: 160px;
}

@media (max-width: 768px) {
	.hero {
		min-height: 60vh;
	}

	.trending__row {
		grid-auto-columns: 130px;
	}

	.trending__poster {
		width: 130px;
	}
}
</style>
