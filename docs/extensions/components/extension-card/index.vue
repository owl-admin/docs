<template>
	<div class="extension-card">
		<div class="extension-card-info">
			<div class="extension-card-name cursor-pointer"
			     title="打开扩展主页"
			     @click="openUrl(homePage)">
				{{ name }}
			</div>
			<div class="extension-card-author cursor-pointer"
			     title="打开作者主页"
			     @click="openUrl(authorHomePage)">
				{{ author }}
			</div>
		</div>
		
		<div class="extension-card-description">
			{{ description }}
		</div>
		
		<div class="extension-card-install">
			<div class="extension-card-zip cursor-pointer" @click="openUrl(zip)" :class="{'hide-box': !zip}">
				zip下载
			</div>
			&emsp;
			<div class="extension-card-composer cursor-pointer"
			     @click="copyText(composer)"
			     :class="{'hide-box': !composer}">
				{{ showCopyText }}
			</div>
		</div>
	</div>
</template>

<script setup>

import {ref} from "vue"

const openUrl = (url) => {
	window.open(url)
}

const showCopyText = ref("复制命令")

const copyText = (text) => {
	const input = document.createElement("input")
	input.setAttribute("readonly", "readonly")
	input.setAttribute("value", text)
	document.body.appendChild(input)
	input.select()
	if (document.execCommand("copy")) {
		document.execCommand("copy")
		showCopyText.value = "已复制"
		setTimeout(() => {
			showCopyText.value = "复制命令"
		}, 1000)
	}
	document.body.removeChild(input)
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
	margin-bottom: 10px;
	padding: 10px;
	border: 1px solid #e8e8e8;
	border-radius: 4px;
}

.extension-card:hover {
	box-shadow: 0 0 10px #e8e8e8;
	transform: scale(1.01);
	transition: all 0.3s;
}

.extension-card-info {
	display: flex;
	justify-content: space-between;
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
	color: var(--vp-c-brand);
	padding-right: 10px;
	font-weight: bold;
}

.extension-card-author {
	padding-right: 10px;
	overflow: hidden;
	text-decoration: underline;
	font-size: .8rem;
}

.extension-card-description {
	padding-right: 10px;
	margin-top: 10px;
	font-size: .8rem;
	text-indent: 2em;
}

.extension-card-install {
	color: var(--vp-c-brand);
	display: flex;
	justify-content: end;
	font-size: .8rem;
}

.hide-box {
	display: none;
}
</style>