<script setup lang="ts">
import {onMounted, ref} from "vue";
import {AOSX} from "aosx";
import "aos/dist/aos.css"
import TestComponent from "@/components/TestComponent.vue";
import Aos from "aos";

const distance = ref("500px")

onMounted(() => {

  const aosx = new AOSX();
  aosx.init();

  console.log(document.styleSheets)

  Aos.init()
})

</script>

<template>
  <div data-aosx="flip-up" data-aosx-duration="1000" data-aosx-delay="1000" data-aosx-distance="300">
    <TestComponent text="11111111111111111"></TestComponent>
  </div>
  <div data-aosx="fade-up" data-aosx-duration="5000" test>
    <TestComponent text="2222222222222222"></TestComponent>
  </div>
  <div data-aos="flip-up">
    <TestComponent text="3333333333333333"></TestComponent>
  </div>
  <div data-aosx="fade-up" data-aosx-duration="1000" data-aosx-delay="1000" data-aosx-distance="300">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="200"/>
  </div>
  <div data-aos="flip-up" style="word-break: break-all"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="500"/></div>
</template>

<style scoped>
.aosx-init{

}
[data-aosx^='fade'] {
  opacity: 0;
  transition-property: opacity, transform;
}
[data-aosx^='fade'].aosx-animate {
  opacity: 1;
  transform: none;
}
[data-aosx='fade-up'] {
  transform: translate3d(0, v-bind(distance), 0);
}

[data-aosx^='flip-up']{
  opacity: 0;
  transform: perspective(2500px) rotateX(-100deg);
}
[data-aosx^='flip-up'].aosx-animate{
  opacity: 1;
  transform: perspective(2500px) rotateX(0);
}

</style>
