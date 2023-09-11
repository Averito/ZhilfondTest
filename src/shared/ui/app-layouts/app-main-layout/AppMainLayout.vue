<template>
	<div class="app-main-layout">
		<div class="app-main-layout-header">
			<h1 class="app-main-layout-header-logo">Жилфонд</h1>
			<p class="app-main-layout-header-user">Пользователь</p>
		</div>
		<div class="app-main-layout-content">
			<slot />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.app-main-layout {
	padding: 50px;
}

.app-main-layout-header {
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
}

.app-main-layout-header-logo {
	font-weight: 700;
	color: rgba(227, 31, 36, 1);
	font-size: 32px;
}

.app-main-layout-header-user {
	font-size: 16px;
	font-weight: 400;
	color: rgba(51, 51, 51, 1);
}

.app-main-layout-content {
	background: rgba(253, 253, 253, 1);
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	border-radius: 12px;
	max-height: calc(100vh - 178px);
}
</style>
