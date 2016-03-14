# Angular的promise指令

用于表单验证的指令，例如a>b，b<c...

# 指令compare = '{expression}';

支持的语法：

```js
compare = 'a>b';
compare = 'a>=b';
compare = 'a<b';
compare = 'a<=b';
compare = 'a==b';
compare = 'a===b';
compare = 'a!=b';
compare = 'a!==b';
```

## 应用场景

* 修改密码

> 通常会有3项，`旧密码`，`新密码`，`确认新密码`，使用这个指令，就可以简单的实现表单验证

```html
<form name="testForm">
  <div class="form-group">
    <label>旧密码</label>
    <input type="text" name="oldPassWord" ng-model="reset.oldPassWord">
  </div>
  <div class="form-group">
    <label>新密码</label>
    <input type="text" name="newPassWord" compare="newPassWord!==lPrice" ng-model="reset.newPassWord">
  </div>
  <div class="form-group">
    <label>确认密码</label>
    <input type="text" name="confirmPwd" compare="confirmPwd===newPassWord" ng-model="reset.newPassWord">
  </div>
</form>
```

* 以及各种对比大小，比如原价<=折后价,等
