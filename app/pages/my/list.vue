<template>
	<section class="mylist" aria-labelledby="mylist-title">
		<header class="mylist__head">
			<h1 id="mylist-title" class="mylist__title">Мой список</h1>
			<p class="mylist__lead">{{ lead }}</p>
		</header>

		<div class="mylist__stack">
			<WatchlistItem
				v-for="item in watchlist"
				:key="item.id"
				:title="item.title"
				:poster-url="item.posterUrl"
				:genre="item.genre"
				:note="item.note"
				:status="item.status"
				:to="`/movies/${item.id}`"
			/>
		</div>

		<p class="mylist__legend">
			Дальше в продукте: совместный список и «что смотрим вечером».
		</p>
	</section>
</template>

<script lang="ts" setup>
type WatchlistMock = {
	id: string;
	title: string;
	posterUrl: string;
	genre: string;
	note: string;
	status: "watch" | "rated";
};

const watchlist: WatchlistMock[] = [
	{
		id: "sand-empire",
		title: "Sand Empire",
		posterUrl:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=300&q=80",
		genre: "Sci-Fi",
		note: "добавлен вчера",
		status: "watch",
	},
	{
		id: "harbor-lights",
		title: "Harbor Lights",
		posterUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=300&q=80",
		genre: "Драма",
		note: "ваша оценка 8",
		status: "rated",
	},
	{
		id: "red-signal",
		title: "Red Signal",
		posterUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=300&q=80",
		genre: "Криминал",
		note: "в очереди",
		status: "watch",
	},
];

const waitingCount = computed(
	() => watchlist.filter((item) => item.status === "watch").length,
);
const ratedCount = computed(
	() => watchlist.filter((item) => item.status === "rated").length,
);

const lead = computed(() => {
	const waiting = waitingCount.value;
	const rated = ratedCount.value;
	const waitingLabel =
		waiting === 1 ? "фильм ждёт" : waiting < 5 ? "фильма ждут" : "фильмов ждут";

	return `${waiting} ${waitingLabel} вечера. ${
		rated === 1 ? "Один уже оценён" : `${rated} уже оценены`
	}.`;
});
</script>

<style lang="scss" scoped>
.mylist {
	max-width: $shell;
	width: 100%;
	margin: 0 auto;
	padding: $space-6 $space-5 $space-7;
}

.mylist__head {
	margin-bottom: $space-5;
}

.mylist__title {
	margin: 0 0 $space-2;
	font-family: $font-display;
	font-weight: $font-weight-extrabold;
	font-size: clamp(2rem, 4vw, 3rem);
	letter-spacing: -0.05em;
	color: $color-text;
}

.mylist__lead {
	margin: 0;
	color: $color-muted;
	font-size: 1.25rem;
}

.mylist__stack {
	display: grid;
	gap: $space-3;
}

.mylist__legend {
	margin: $space-5 0 0;
	color: $color-muted;
	font-size: 1.05rem;
}
</style>
