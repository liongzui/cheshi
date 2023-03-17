<template>
    <div class="main">
        <main_left class="main_left" :xiangxishuju="xiangxishuju"></main_left>
        <main_right class="main_right" :shujubiaoti="shujubiaoti" :leibieIndex="leibieIndex"></main_right>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router'
import axios from 'axios'
import main_right from "@/components/leibie/main/main_right.vue";
import main_left from "@/components/detailed/main/main_left.vue";
const route = useRoute()
let leibieIndex = Number(route.params.index) - 1
let id=Number(route.params.id)
const shujubiaoti: any = reactive([])
let  xiangxishuju:any=reactive([])


const huoqushuju=async ()=>{
    const leibie = await axios.get("/api/leibie")
    const shujuxiangxi = await axios.get("/api/shujuxiangxi/"+leibieIndex+"/"+id)
    shujubiaoti.push(...leibie.data)
    shujubiaoti.splice(0, 1)
    xiangxishuju.push(shujuxiangxi.data)
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