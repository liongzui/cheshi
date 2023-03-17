<template>
    <div class="main">
        <main_left class="main_left" :shujuleibiao="shuju1" :shujuyeshu="shuju1.length" :leibiePage="leibiePage" :leibieIndex="leibieIndex"></main_left>
        <main_right class="main_right" :shujubiaoti="shujubiaoti" :leibieIndex="leibieIndex"></main_right>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios'
import main_left from "@/components/leibie/main/main_left.vue";
import main_right from "@/components/leibie/main/main_right.vue";
const route = useRoute()
let shujuleibiao: any = reactive([])
const shujubiaoti: any = reactive([])
const leibieIndex = Number(route.params.index) - 1
const shuju1:any=reactive([])
const leibiePage=typeof route.params.page == 'undefined'?0:Number(route.params.page)-1



const shujujiego=()=>{
    if(shujuleibiao.length>10){
        let aa=shujuleibiao.slice(10)
        shujuleibiao.splice(10,shujuleibiao.length)
        shuju1.push(shujuleibiao)
        shujuleibiao=aa
        shujujiego()
    }
}
const huoqushuju=async()=>{
    const shuju = await axios.get("/api/suju")
    const leibie = await axios.get("/api/leibie")
    shujubiaoti.push(...leibie.data)
    shujubiaoti.splice(0, 1)
    shujuleibiao.push(...shuju.data[leibieIndex])
    shujujiego()
}
huoqushuju()
// onBeforeMount(() => {
//     huoqushuju()
// })


</script>

<style lang='less' scoped>
.main {
    display: flex;

    .main_left {
        transition: all 0.5s;
        margin: 10px 0;
        margin-left: 12.5%;
    }

    .main_right {
        transition: all 0.5s;
        margin: 10px 12.5% 10px 10px;
    }
}

@media screen and (max-width: 1000px) {
    .main {
        .main_left {
            width: 70%;
            margin: 10px 0;
            transition: all 0.5s;
        }

        .main_right {
            width: 30%;
            margin: 10px 0;
            margin-left: 10px;
            transition: all 0.5s;
        }
    }
}

@media screen and (max-width: 800px) {
    .main {
        width: 100%;

        .main_left {
            width: 100%;
            margin: 10px 0;
            transition: all 0.5s;
        }

        .main_right {
            display: none;
            transition: all 0.5s;
            margin: 0;
        }
    }
}
</style>