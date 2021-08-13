<!--
 * @Author: your name
 * @Date: 2021-08-11 13:24:45
 * @LastEditTime: 2021-08-12 10:13:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \工单整理文档d:\code\ui-repo1\components\HelloWorld.vue
-->
<template>
    <view>
        名称：{{ name }}
        <view>
            年龄：{{age}}
        </view>
    </view>
</template>
<script>
export default {
    name: 'HelloWorld',
    props: {
        name: {
            type: String,
            default: ""
        },
        age: {
            type: Number,
            default: 0
        }
    }
}
</script>