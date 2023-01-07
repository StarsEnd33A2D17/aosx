<script setup lang="ts">
import {onMounted, ref} from "vue";
import {hello} from "aosx";
import "aos/dist/aos.css"
import TestComponent from "@/components/TestComponent.vue";
import Aos from "aos";

const distance = ref("500px")

onMounted(() => {
  hello()

  const aosx = new AOSX();
  aosx.init();

  console.log(document.styleSheets)

  Aos.init()
})


type aosxConfig={
  type:string,
  duration:number,
  delay:number,
}
class AOSX {
  config:aosxConfig

  constructor()
  constructor(config?:aosxConfig) {
    if (typeof config==="object"){
      this.config = config
    }else {
      this.config = {
        type:"up",
        duration:1000,
        delay:0,
      }
    }
  }
  public hello(){
    console.log("Hello World")
  }
  public init():void{
    const list = document.querySelectorAll('[data-aosx]')

    const style = document.createElement('style');
    style.innerHTML = "[test]{\n" +
        "  border: red 100px solid;\n" +
        "}";

    list.forEach(item=>{
      this.config.type = <string>(item as HTMLElement).dataset.aosx;
      (item as HTMLElement).classList.add("aosx-init");
      if ((item as HTMLElement).dataset.aosxDuration!==undefined){
        style.innerHTML = style.innerHTML+"\n"+"[data-aosx-duration=\""+(item as HTMLElement).dataset.aosxDuration+"\"]{\n" +
            "  transition-duration: "+(item as HTMLElement).dataset.aosxDuration+"ms;\n" +
            "}"
      }
      if ((item as HTMLElement).dataset.aosxDelay!==undefined){
        style.innerHTML = style.innerHTML+"\n"+"[data-aosx-delay=\""+(item as HTMLElement).dataset.aosxDelay+"\"]{\n" +
            "  transition-delay: "+(item as HTMLElement).dataset.aosxDelay+"ms;\n" +
            "}"
      }
    })

    const ref = document.querySelector('script');
    ref?.parentNode?.insertBefore(style,ref);

    const io = new IntersectionObserver((entries) =>{
      entries.forEach(item => {
        // isIntersecting是一个Boolean值，判断目标元素当前是否可见
        if (item.isIntersecting) {
          (item.target as HTMLElement).classList.add("aosx-animate");
        }else {
          (item.target as HTMLElement).classList.remove("aosx-animate");
        }
      })
    }, {
      root: document.querySelector('.root')
    })

    list.forEach(div=>io.observe(div))
  }
}
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
  <div data-aos="zoom-out-up" style="word-break: break-all"><img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="200"/></div>
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
