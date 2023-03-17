<template>
    <div class="mainLeft">
        <main_left_1></main_left_1>
        <main_left_2 :sju="sju" :leibieIndex="leibieIndex"></main_left_2>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import main_left_1 from "@/components/Home/main/main_left/main_left_1.vue";
import main_left_2 from "@/components/Home/main/main_left/main_left_2.vue";


defineProps<{
    sju:any,
    leibieIndex:number
}>()
</script>

<style lang='less' scoped>
@media screen and (max-width: 800px) {
    .mainLeft {
        transition: all 0.5s;
        display: none;
    }
}
</style>