<template>
	<section class="search" aria-label="Поиск">
		<form class="search__field" @submit.prevent="submitSearch">
			<UIInput
				v-model="draftQuery"
				type="search"
				name="q"
				placeholder="Фильм, актёр, настроение…"
				autocomplete="off"
				aria-label="Запрос"
			/>
			<UIButton variant="primary" type="submit">Искать</UIButton>
		</form>

		<div v-if="results.length" class="search__results">
			<SearchResultItem
				v-for="item in results"
				:key="item.id"
				:title="item.title"
				:poster-url="item.posterUrl"
				:year="item.year"
				:genre="item.genre"
				:rating="item.rating"
				:to="`/movies/${item.id}`"
			/>
		</div>

		<p v-else-if="query" class="search__empty">
			Ничего не найдено по запросу «{{ query }}».
		</p>

		<div class="search__history">
			<p class="search__history-title">Недавние</p>
			<div class="search__history-row">
				<UIChip
					v-for="item in recentQueries"
					:key="item"
					@click="applyRecent(item)"
				>
					{{ item }}
				</UIChip>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
type SearchMock = {
	id: string;
	title: string;
	posterUrl: string;
	year: number;
	genre: string;
	rating: number;
	keywords: string[];
};

const mockResults: SearchMock[] = [
	{
		id: "night-flight",
		title: "Ночной рейс",
		posterUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=200&q=80",
		year: 2023,
		genre: "Триллер",
		rating: 8.4,
		keywords: ["ночь", "ночной", "рейс", "night"],
	},
	{
		id: "night-on-block",
		title: "Ночь на районе",
		posterUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=200&q=80",
		year: 2019,
		genre: "Драма",
		rating: 7.5,
		keywords: ["ночь", "районе", "night"],
	},
	{
		id: "before-night-falls",
		title: "Before Night Falls",
		posterUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=200&q=80",
		year: 2000,
		genre: "Биография",
		rating: 7.8,
		keywords: ["ночь", "night", "before", "falls"],
	},
	{
		id: "midnight-run",
		title: "Midnight Run",
		posterUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=200&q=80",
		year: 2023,
		genre: "Триллер",
		rating: 8.4,
		keywords: ["ночь", "midnight", "night"],
	},
];

const recentQueries = ["вестерн", "нолан", "медленное кино", "корейский триллер"];

const route = useRoute();
const router = useRouter();

const query = computed(() => {
	const value = route.query.q;
	return typeof value === "string" ? value.trim() : "";
});

const draftQuery = ref(query.value || "ночь");

watch(
	query,
	(value) => {
		if (value) {
			draftQuery.value = value;
		}
	},
	{ immediate: true },
);

const results = computed(() => {
	const q = query.value.toLowerCase();
	if (!q) {
		return [];
	}

	return mockResults.filter((item) => {
		const haystack = [
			item.title.toLowerCase(),
			item.genre.toLowerCase(),
			...item.keywords,
		].join(" ");
		return haystack.includes(q) || q.split(/\s+/).some((part) => haystack.includes(part));
	});
});

function submitSearch() {
	const next = draftQuery.value.trim();
	router.replace({
		query: {
			...route.query,
			q: next || undefined,
		},
	});
}

function applyRecent(value: string) {
	draftQuery.value = value;
	router.replace({
		query: {
			...route.query,
			q: value,
		},
	});
}

onMounted(() => {
	if (!query.value) {
		router.replace({ query: { ...route.query, q: "ночь" } });
	}
});

useSeoMeta({
	title: "Поиск — Что посмотреть",
	description: "Поиск фильмов и подборок",
});
</script>

<style lang="scss" scoped>
.search {
	max-width: $shell;
	width: 100%;
	margin: 0 auto;
	padding: $space-6 $space-5 $space-7;
}

.search__field {
	display: grid;
	grid-template-columns: 1fr auto;
	gap: $space-3;
	align-items: center;
	margin-bottom: $space-5;
}

.search__results {
	display: grid;
	gap: $space-2;
	margin-bottom: $space-6;
}

.search__empty {
	margin: 0 0 $space-6;
	color: $color-muted;
	font-size: $font-size-lg;
}

.search__history-title {
	margin: 0 0 $space-3;
	font-family: $font-display;
	font-size: $font-size-sm;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: $color-muted;
}

.search__history-row {
	display: flex;
	flex-wrap: wrap;
	gap: $space-2;
}

@media (max-width: 560px) {
	.search__field {
		grid-template-columns: 1fr;
	}
}
</style>
