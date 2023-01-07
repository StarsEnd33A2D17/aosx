# AOSX-一个轻量化的基于IntersectionObserver的滚动监听整合
[English](README.md) | 中文

（英文文档大部分使用机翻，不了解专用术语。）
## 简介
项目中遇到需要使用滚动出现的动画，然而在Naive UI的特制Scroll Bar中，
[aos.js](https://github.com/michalsnik/aos)表现不佳（或者说压根不行），但是IntersectionObserver工作正常。

于是参考[aos.js](https://github.com/michalsnik/aos)的源码和IntersectionObserver，简单打包了基本功能。当然，
在涉及具体设置上，我打算在init过程中根据DOM内容生成所需对应的css选择器，
而不是预置所有css类型。

顺便一提，自己是长期的后端来初学前端，可能有各种问题，还请多多包涵(。・ω・。)

## 安装
使用npm
```bash
npm i aosx
```

## 使用
基本用例：
```ts
import {AOSX} from "aosx";
const aosx = new AOSX();
aosx.init();
```
请注意，执行时你的DOM应该已经加载完毕。比如，在Vue中，你应该在
onMounted或类似地方执行init

在元素中，比如：
```html
<div data-aosx="fade-up" data-aosx-duration="1000" data-aosx-delay="1000" data-aosx-distance="300">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="200"/>
</div>
```
## 配置
理论上，init以后的所有配置将由你在元素上的属性决定。但是，
也允许你提前修改默认值。