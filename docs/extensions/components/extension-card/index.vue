<template>
	<div class="extension-card">
		<div class="extension-card-info">
			<div class="extension-card-name text-overflow cursor-pointer"
			     title="打开扩展主页"
			     @click="openUrl(homePage)">
				{{ name }}
			</div>
			<div class="extension-card-author text-overflow cursor-pointer"
			     title="打开作者主页"
			     @click="openUrl(authorHomePage)">
				{{ author }}
			</div>
			<div class="extension-card-description text-overflow">
				{{ description }}
			</div>
		</div>
		<div class="extension-card-install">
			<div class="extension-card-zip cursor-pointer" @click="openUrl(zip)">
				zip下载
			</div>
			&emsp;
			<div class="extension-card-composer cursor-pointer" @click="openUrl(composer)">
				复制命令
			</div>
		</div>
	</div>
</template>

<script setup>

const openUrl = (url) => {
	window.open(url)
}

defineProps({
	name: {type: String, default: ""},
	homePage: {type: String, default: ""},
	author: {type: String, default: ""},
	authorHomePage: {type: String, default: ""},
	description: {type: String, default: ""},
	zip: {type: String, default: ""},
	composer: {type: String, default: ""},
})
</script>

<style>
.extension-card {
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
}

.extension-card-info {
	display: flex;
	width: 85%;
}

.text-overflow {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.cursor-pointer {
	cursor: pointer;
}

.cursor-pointer:hover {
	text-decoration: underline;
}

.extension-card-name {
	color: #42b983;
	width: 300px;
	padding-right: 10px;
	font-weight: bold;
}

.extension-card-author {
	width: 200px;
	padding-right: 10px;
	overflow: hidden;
	text-decoration: underline;
}

.extension-card-description {
	padding-right: 10px;
	width: 100%;
}

.extension-card-install {
	color: #1890FF;
	display: flex;
}

.hide-box {
	display: none;
}
</style>