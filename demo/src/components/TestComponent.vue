<template>
<div style="height: 100vh">
  {{props.text}}
  <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="500" height="500"/>
</div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props =defineProps({
  text:String
})
</script>

<style scoped>

</style>