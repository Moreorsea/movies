<template>
	<div class="layout">
		<AppHeader />
		<main class="layout__main">
			<slot />
		</main>
		<AppFooter />
	</div>
</template>

<style lang="scss" scoped>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: $color-bg-page;
	color: $color-text;
	font-family: $font-body;
}

.layout__main {
	flex: 1;
	width: 100%;
}
</style>
