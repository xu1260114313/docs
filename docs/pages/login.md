# 登录页面

登录。

<div class="demo-container">
	<div class="demo-model">
		<iframe class="iframe-view" src="https://xu1260114313.github.io/demo/"></iframe>
	</div>
</div>

## API
## data
```js
data() {
	return {
		codeNum: 60,
		timer: null,
		formData: {
		  phone: '',
		  code: ''
		},
		rules: {}
	}
}
```
## data
| 参数 | 说明 | 类型 | 默认值 | 
| --- | :---: | :---: | :---:| 
| codeNum | 验证码倒计时时间 | Number | 60 |
| timer | 定时器对象 | Object | null |
| formData | 表单对象 | Object | - |
| formData.phone | 手机号 | String | "" |
| formData.code | 验证码 | String | "" |
| rules | 规则检验对象 | Object | - |
## rules
| 参数名称 | 说明 | 校验规则 |
| --- | --- | --- |
| formData.phone | 手机号校验 | 1.不能为空;2.正确手机号 |
| formData.code | 验证码 | 1.不能为空;2.位验证码 |
## Event
| 事件名 | 说明 | 回调参数 | 版本 |
| :---: | :---: | :---: | :---:|
| submit | 提交表单 | - | - |
| getCode | 获取验证码 | - | - |
| handleTimer | 倒计时功能 | - | - |

