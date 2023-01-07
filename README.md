# AOSX-A Lightweight IntersectionObserver Package
English | [中文](README_CN.md)

(English documents mostly use machine translation, because I do not know special terms. So, It can have quite a few grammatical errors or strange meanings.)
## Introduction
In the project, animations requiring scrolling were encountered. 
However, in the special Scroll Bar for Naive UI, [aos.js](https://github.com/michalsnik/aos) did not perform well (or not at all),
but IntersectionObserver worked normally.

Therefore, I simply packaged the basic functions by referring to the source code of [aos.js](https://github.com/michalsnik/aos)
and IntersectionObserver. Of course, when it comes to the setup, 
I'm going to generate the desired css selectors from the DOM content during init, rather than presetting all css types.

By the way, I'm starting to learn the web, as a long term Java learner. Please bear with me~~(。・ω・。)

## Introduction
use npm
```bash
npm i aosx
```

## Use
Base use case
```ts
import {AOSX} from "aosx";
import "aosx/src/css/animation.css"
const aosx = new AOSX();
aosx.init();
```
Note that your DOM should be loaded when executed. 
For example, in Vue, you should do init in onMounted or something like that

In html，like
```html
<div data-aosx="fade-up" data-aosx-duration="1000" data-aosx-delay="1000" data-aosx-distance="300">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="200"/>
</div>
```
## Config
In theory, any configuration after init will be determined by the properties you have on the element. 
However, it also allows you to change the default values ahead of time.