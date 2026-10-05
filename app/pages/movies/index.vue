<template>
	<section class="catalog" aria-labelledby="catalog-title">
		<header class="catalog__head">
			<h1 id="catalog-title" class="catalog__title">Каталог</h1>
			<CatalogFilters v-model="activeFilter" :filters="filters" />
		</header>

		<div v-if="filteredMovies.length" class="catalog__grid">
			<MovieCard
				v-for="movie in filteredMovies"
				:key="movie.id"
				:title="movie.title"
				:src="movie.posterUrl"
				:rating="movie.rating"
				:year="movie.year"
				:genre="movie.genre"
				:to="`/movies/${movie.id}`"
			/>
		</div>

		<p v-else class="catalog__empty">Ничего не найдено по выбранному фильтру.</p>
	</section>
</template>

<script lang="ts" setup>
import type { CatalogFilter } from "~/components/CatalogFilters.vue";

type MockMovie = {
	id: string;
	title: string;
	posterUrl: string;
	rating: number;
	year: number;
	genre: string;
	genreId: string;
};

const filters: CatalogFilter[] = [
	{ id: "all", label: "Все жанры" },
	{ id: "drama", label: "Драма" },
	{ id: "thriller", label: "Триллер" },
	{ id: "scifi", label: "Sci-Fi" },
	{ id: "y2020", label: "2020+" },
	{ id: "newest", label: "Сначала новые" },
];

const movies: MockMovie[] = [
	{
		id: "midnight-run",
		title: "Midnight Run",
		posterUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=500&q=80",
		rating: 8.4,
		year: 2023,
		genre: "Триллер",
		genreId: "thriller",
	},
	{
		id: "glass-house",
		title: "Glass House",
		posterUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=500&q=80",
		rating: 7.9,
		year: 2021,
		genre: "Драма",
		genreId: "drama",
	},
	{
		id: "red-signal",
		title: "Red Signal",
		posterUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=500&q=80",
		rating: 8.1,
		year: 2024,
		genre: "Криминал",
		genreId: "thriller",
	},
	{
		id: "sand-empire",
		title: "Sand Empire",
		posterUrl:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=80",
		rating: 8.7,
		year: 2022,
		genre: "Sci-Fi",
		genreId: "scifi",
	},
	{
		id: "static",
		title: "Static",
		posterUrl:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=500&q=80",
		rating: 7.6,
		year: 2020,
		genre: "Драма",
		genreId: "drama",
	},
];

const route = useRoute();
const router = useRouter();

const activeFilter = computed({
	get() {
		const value = route.query.filter;
		return typeof value === "string" && filters.some((f) => f.id === value)
			? value
			: "all";
	},
	set(value: string) {
		router.replace({
			query: {
				...route.query,
				filter: value === "all" ? undefined : value,
			},
		});
	},
});

const filteredMovies = computed(() => {
	const filter = activeFilter.value;
	let list = [...movies];

	if (filter === "drama" || filter === "thriller" || filter === "scifi") {
		list = list.filter((movie) => movie.genreId === filter);
	}

	if (filter === "y2020") {
		list = list.filter((movie) => movie.year >= 2020);
	}

	if (filter === "newest") {
		list.sort((a, b) => b.year - a.year);
	}

	return list;
});
</script>

<style lang="scss" scoped>
.catalog {
	max-width: $shell;
	width: 100%;
	margin: 0 auto;
	padding: $space-5 $space-5 $space-7;
	display: grid;
	gap: $space-5;
}

.catalog__head {
	display: grid;
	gap: $space-3;
}

.catalog__title {
	margin: 0;
	font-family: $font-display;
	font-weight: $font-weight-extrabold;
	font-size: clamp(2rem, 4vw, 3rem);
	letter-spacing: -0.05em;
	color: $color-text;
}

.catalog__grid {
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	gap: $space-4;
}

.catalog__empty {
	margin: 0;
	color: $color-muted;
	font-size: $font-size-lg;
}

@media (max-width: 1100px) {
	.catalog__grid {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
}

@media (max-width: 900px) {
	.catalog__grid {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
}

@media (max-width: 640px) {
	.catalog__grid {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}
</style>
