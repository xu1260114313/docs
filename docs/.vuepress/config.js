/*
 * @Author: your name
 * @Date: 2021-08-11 13:22:53
 * @LastEditTime: 2021-08-12 13:28:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \工单整理文档d:\code\ui-repo1\docs\.vuepress\config.js
 */

const { sidebarList } = require('../config');


module.exports = {
    base: "/docs/",
    title: 'bop-app', // 左上角的标题
    description: '社区项目文档', // meta内容
    plugins: ['demo-container'], // 引用的`vuepress-plugin-demo-container`插件
    themeConfig: { // 主题配置，可以直接看文档
        nav: [ // 配置顶部导航栏
            {
              text: '组件',
              link: '/'
            },
            {
              text: 'js工具库',
              link: '/comps/'
            }
        ],
        sidebar: { // 配置侧边栏部分
            '/': sidebarList
        },
        // 默认值是 true 。设置为 false 来禁用所有页面的 下一篇 链接
        nextLinks: false,
        // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
        prevLinks: false
    }
    
}