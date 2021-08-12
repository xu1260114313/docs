<!--
 * @Author: your name
 * @Date: 2021-08-11 13:39:19
 * @LastEditTime: 2021-08-12 11:41:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \工单整理文档d:\code\ui-repo1\docs\coms\select.md
-->
# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基本用法

适用广泛的基础单选

::: demo
```html
<template>
	<u-tag text="要清楚" closeable :show="show" @close="tagClick" />
</template>

<script>
	export default {
		data() {
			return {
				show: true
			}
		},
		methods: {
			tagClick(index) {
				this.show = false;
			}
		}
	}
</script>
```
:::
## API
## Props
| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- |:---:| ---: | ---:| ---:|
| type | 主题类型 | String | primary | success / info / warning / error |
| size | 标签大小 | String | default | mini |
| shape | 标签形状 | String | square | circle / circleLeft / circleRight |
| text | 标签的文字内容 | String | - | - |
## Event
| 事件名 | 说明 | 回调参数 | 版本 |
| :---: | :---: | :---: | :---:|
| click | 点击标签触发 | index: 传递的`index`参数值 | - |
| close | `closeable`为`true`时，点击标签关闭按钮触发 | index: 传递的`index`参数值 | - |


<iframe id="iframe-view" src="https://h5.uviewui.com/#/pages/componentsA/tag/index"></iframe>