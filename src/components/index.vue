<template>
 <headertop style="position: relative; z-index: 9;" :biaotiIndex="biaotiIndex"></headertop>
  <router-view :key="route.path"></router-view>

</template>

<script setup lang='ts'>
import { ref,reactive,onUpdated } from 'vue';
import headertop from "@/components/header/header.vue";
import { useRoute } from "vue-router";
const route = useRoute()
let biaotiIndex = ref(0);
onUpdated(() => {
  biaotiIndex.value = Number(route.params.index);
})
</script>

<style lang='less' scoped>
body,
html,
#app {
  background: #f6f6f6;
  margin: 0;
  padding: 0;
  height: auto;
}
</style>