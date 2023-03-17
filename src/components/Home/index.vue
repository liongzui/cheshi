<template>
    <div class="main">
        <div class="MainIndex">
            <main_left :sju="sju2" :leibieIndex="leibieIndex"></main_left>
            <main_right :sju="shuju"></main_right>
        </div>
        <div class="MainButton">
            <main_botton></main_botton>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';
import axios from "axios";
import main_left from "@/components/Home/main/main_left.vue";
import main_right from "@/components/Home/main/main_right.vue";
import main_botton from "@/components/Home/main/main_botton.vue";
let sju: any = reactive([])
let sju2: any = reactive([])
let shuju: any = reactive([])
let leibieIndex=ref(0)
const huoqushuju=async ()=>{
    let sju1: any = await axios.get("/api/suju")
    sju.push(...sju1.data)
    let suju1: any = reactive([]);
    suju1.push(...sju);
    suju1=suju1.splice(0, 3);
    for(let i=0;i<suju1.length;i++){
        if(suju1[i].length>30){
            let aa:any=[]
            aa[i]=suju1[i].slice(30)
            suju1[i].splice(30,suju1[i].length,"")
            shuju.push(suju1[i])
            shuju.push(aa[i])
        }
    }
    sju[leibieIndex.value].forEach((v:any)=>{
        sju2.push(v)
    })
    sju2.splice(11,sju2.length)
}
huoqushuju()
// onMounted(() => {
//     huoqushuju()
// })





</script>

<style lang='less' scoped>
.MainIndex {
    transition: all 0.5s;
    margin: 10px calc(12.5%);
    display: flex;
}

.MainButton {
    transition: all 0.5s;
    margin: 10px calc(12.5%);
}


@media screen and (max-width: 1300px) {
    .MainIndex {
        transition: all 0.5s;
        margin: 10px 0;
    }

    .MainButton {
        transition: all 0.5s;
        margin: 10px 0;
    }
}
</style>