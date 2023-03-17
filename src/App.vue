<template>
  <Suspense>
    <template #default>
     <zhuye></zhuye>
    </template>
    <template  #fallback><dengdai></dengdai></template>
  </Suspense>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from "vue";
import dengdai from "@/components/dengdai/index.vue";
const zhuye=defineAsyncComponent(()=> import("./components/index.vue"));
</script>

<style lang='less'>
body,
html,
#app {
  background: #f6f6f6;
  margin: 0;
  padding: 0;
  height: auto;
}
</style>