<template>
	<footer class="app-footer">
		<div class="app-footer__inner">
			<p class="app-footer__brand">
				<strong>Что посмотреть</strong>
				<span>· discovery, не стриминг</span>
			</p>
			<p class="app-footer__meta">TMDB · Nuxt 4 · 2026</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.app-footer {
	margin-top: auto;
	border-top: 1px solid $color-line;
	color: $color-muted;
	font-family: $font-display;
	font-size: $font-size-xs;
}

.app-footer__inner {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: $space-4;
	max-width: $shell;
	margin: 0 auto;
	padding: $space-5;
}

.app-footer__brand {
	margin: 0;

	strong {
		color: $color-text;
		font-weight: $font-weight-bold;
	}
}

.app-footer__meta {
	margin: 0;
}
</style>
