<script setup lang="ts">
import {onMounted, ref} from "vue";
import {AOSX} from "aosx";
import "aosx/src/css/animation.css"
import TestComponent from "@/components/TestComponent.vue";

onMounted(() => {
  const aosx = new AOSX();
  aosx.init();
})

</script>

<template>
  <div data-aosx="flip-up" data-aosx-duration="1000" data-aosx-delay="1000" >
    <TestComponent text="11111111111111111"></TestComponent>
  </div>
  <div data-aosx="fade-up" data-aosx-duration="5000" data-aosx-distance="200px">
    <TestComponent text="2222222222222222"></TestComponent>
  </div>
  <div data-aosx="fade-right" data-aosx-duration="1000" data-aosx-distance="300px">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="500"/>
  </div>
  <div data-aosx="slide-up" data-aosx-duration="1000" data-aosx-distance="200px">
    <TestComponent text="3333333333333333"></TestComponent>
  </div>
  <div data-aosx="slide-right" data-aosx-duration="1000" data-aosx-distance="300px">
    <TestComponent text="3333333333333333"></TestComponent>
  </div>
  <div data-aosx="fade-up" data-aosx-duration="1000" data-aosx-delay="1000" data-aosx-distance="300px">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" height="200"/>
  </div>
  <div data-aosx="flip-up" data-aosx-duration="1000">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="500"/>
  </div>
</template>

<style scoped>
</style>
