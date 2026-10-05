<template>
	<article class="watchlist-item">
		<NuxtLink class="watchlist-item__art" :to="to">
			<img
				v-if="posterUrl"
				:src="posterUrl"
				:alt="title"
				loading="lazy"
				decoding="async"
			/>
			<span v-else class="watchlist-item__placeholder" aria-hidden="true" />
		</NuxtLink>

		<div class="watchlist-item__body">
			<h3 class="watchlist-item__title">
				<NuxtLink :to="to">{{ title }}</NuxtLink>
			</h3>
			<p class="watchlist-item__meta">{{ meta }}</p>
		</div>

		<div class="watchlist-item__status">
			<UIStatus :tone="statusTone">{{ statusLabel }}</UIStatus>
		</div>
	</article>
</template>

<script lang="ts" setup>
const props = defineProps<{
	title: string;
	to: string;
	posterUrl?: string | null;
	genre: string;
	note: string;
	status: "watch" | "rated";
}>();

const meta = computed(() => `${props.genre} · ${props.note}`);

const statusTone = computed(() => (props.status === "rated" ? "ok" : "wait"));

const statusLabel = computed(() =>
	props.status === "rated" ? "Оценён" : "Смотреть",
);
</script>

<style lang="scss" scoped>
.watchlist-item {
	display: grid;
	grid-template-columns: 72px 1fr auto;
	gap: $space-4;
	align-items: center;
	padding: $space-3;
	border-radius: 1rem;
	border: 1px solid $color-line;
	background: linear-gradient(
		120deg,
		rgba($color-text, 0.04),
		transparent 55%
	);
}

.watchlist-item__art {
	display: block;
	width: 72px;
	height: 96px;
	border-radius: 0.55rem;
	overflow: hidden;
	background: $color-bg-elev;
	flex-shrink: 0;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.watchlist-item__placeholder {
	display: block;
	width: 100%;
	height: 100%;
	background: $color-bg-elev;
}

.watchlist-item__body {
	min-width: 0;
}

.watchlist-item__title {
	margin: 0;
	font-family: $font-display;
	font-weight: $font-weight-bold;
	font-size: 1.05rem;

	a {
		color: $color-text;
		text-decoration: none;

		&:hover {
			color: $color-accent;
		}
	}
}

.watchlist-item__meta {
	margin: $space-1 0 0;
	color: $color-muted;
	font-size: 1.1rem;
}

.watchlist-item__status {
	justify-self: end;
}

@media (max-width: 560px) {
	.watchlist-item {
		grid-template-columns: 64px 1fr;
		grid-template-areas:
			"art body"
			"art status";
		gap: $space-3;
	}

	.watchlist-item__art {
		grid-area: art;
		width: 64px;
		height: 86px;
	}

	.watchlist-item__body {
		grid-area: body;
	}

	.watchlist-item__status {
		grid-area: status;
		justify-self: start;
	}
}
</style>
