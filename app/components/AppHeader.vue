<template>
	<header class="app-header">
		<nav class="app-header__nav" aria-label="Основная навигация">
			<NuxtLink class="app-header__brand" to="/">
				Что<span>посмотреть</span>
			</NuxtLink>

			<ul class="app-header__links">
				<li v-for="item in navItems" :key="item.to">
					<NuxtLink
						class="app-header__link"
						:class="{ 'app-header__link--active': isActive(item.to) }"
						:to="item.to"
					>
						{{ item.label }}
					</NuxtLink>
				</li>
			</ul>

			<UIButton
				class="app-header__account"
				variant="accent"
				size="sm"
				type="button"
				@click="navigateTo('/login')"
			>
				Войти
			</UIButton>
		</nav>
	</header>
</template>

<script lang="ts" setup>
const route = useRoute();

const navItems = [
	{ label: "Главная", to: "/" },
	{ label: "Каталог", to: "/movies" },
	{ label: "Поиск", to: "/search" },
	{ label: "Мой список", to: "/my/list" },
] as const;

function isActive(path: string) {
	if (path === "/") {
		return route.path === "/";
	}

	return route.path === path || route.path.startsWith(`${path}/`);
}
</script>

<style lang="scss" scoped>
.app-header {
	position: relative;
	z-index: 2;
	border-bottom: 1px solid $color-line;
	background: rgba($color-bg, 0.92);
	backdrop-filter: blur(8px);
}

.app-header__nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: $space-4;
	max-width: $shell;
	margin: 0 auto;
	padding: $space-4 $space-5;
}

.app-header__brand {
	font-family: $font-display;
	font-weight: $font-weight-extrabold;
	font-size: 1.05rem;
	letter-spacing: $letter-tight;
	text-decoration: none;
	color: $color-text;
	flex-shrink: 0;

	span {
		color: $color-accent;
	}
}

.app-header__links {
	display: flex;
	flex-wrap: wrap;
	gap: $space-5;
	margin: 0;
	padding: 0;
	list-style: none;
}

.app-header__link {
	font-family: $font-display;
	font-size: $font-size-sm;
	font-weight: $font-weight-semibold;
	color: $color-muted;
	text-decoration: none;
	transition: color $ease-default;

	&:hover {
		color: $color-text;
	}

	&--active {
		color: $color-text;
		font-weight: $font-weight-bold;
	}
}

.app-header__account {
	flex-shrink: 0;
}

@media (max-width: 768px) {
	.app-header__links {
		display: none;
	}
}
</style>
