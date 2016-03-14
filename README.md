# Angular的promise指令

用于表单验证的指令，例如a>b，b<c...

# 安装

```bash
bower install at-compare --save
```

# 依赖

依赖于`angular`

引入模块`ngAnimate`和`atPromise`

```js
angular
	.module('angularTestApp', ['at-compare'])
```

# 指令at-compare = '{expression}';

支持的语法：

```js
at-compare = 'a>b';
at-compare = 'a>=b';
at-compare = 'a<b';
at-compare = 'a<=b';
at-compare = 'a==b';
at-compare = 'a===b';
at-compare = 'a!=b';
at-compare = 'a!==b';
```

a和a分别代表当前form内，表单的name名

支持多个比较语法，使用分号``;``隔开

```js
at-compare = 'a!==b；b>c;d<a；'
```

## 应用场景

###  修改密码

> 通常会有3项，`旧密码`，`新密码`，`确认新密码`，使用这个指令，就可以简单的实现表单验证
> 要确保
> * 新密码不能和旧密码相同         `at-compare="newPassWord!==lPrice"`
> * 确认密码要和新密码一致         `at-compare="confirmPwd===newPassWord"`

```html
<form name="testForm">
  <div class="form-group">
    <label>旧密码</label>
    <input type="text" name="oldPassWord" ng-model="reset.oldPassWord">
  </div>
  <div class="form-group">
    <label>新密码</label>
    <input type="text" name="newPassWord" at-compare="newPassWord!==lPrice" ng-model="reset.newPassWord">
  </div>
  <div class="form-group">
    <label>确认密码</label>
    <input type="text" name="confirmPwd" at-compare="confirmPwd===newPassWord" ng-model="reset.confirmPwd">
  </div>
</form>
```

### 以及各种对比大小

> 比如这里有个``最低价``、``原价``和``折后价``
> 如果要确保
> * 原价>=最低价                  ``at-compare="oPrice>lPrice"``
> * 折后价<=原价 && 折后价>最低价   ``at-compare="price<=oPrice;price>lPrice"``

```html
<form name="testForm">
  <div class="form-group">
    <label>最低价</label>
    <input type="text" name="lPrice" ng-model="item.lPrice">
  </div>
  <div class="form-group">
    <label>原价</label>
    <input type="text" at-compare="oPrice>lPrice" name="oPrice" ng-model="item.oProice">
  </div>
  <div class="form-group">
    <label>折后价</label>
    <input type="text" at-compare="price<=oPrice;price>lPrice" name="price" ng-model="item.price">
  </div>
</form>
```

### 以及其他对比...看用途

## 如果条件不满足，则挂载在指令所在的表单按钮(通常是input)的``$error``上

```html
<form name="testForm">
...
<div class="form-group">
    <label>原价</label>
    <input type="text" at-compare="oPrice>lPrice" name="oPrice" ng-model="item.oProice">
    <div ng-show="testForm.oPrice.$error['oPrice>lPrice']">
        表单错误：原价必须要大于最低价
    </div>
</div>
...
</form>
```

# License
项目遵循[MIT协议(The MIT License)](http://opensource.org/licenses/MIT)
