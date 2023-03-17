<template>
    <div class="TopLeft">
        <el-carousel :interval="5000" arrow="always" class="el-carousel" indicator-position="none" height="240px">
            <el-carousel-item v-for="item in tup" :key="item" class="el-carousel-item">
                <img v-lazy="item.src" class="img"/>
            </el-carousel-item>
        </el-carousel>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive,onBeforeMount } from 'vue';

import img1 from "@/images/1.jpg"
import img2 from "@/images/2.jpg"
import img3 from "@/images/3.jpg"
import img4 from "@/images/4.jpg"
const tup=reactive([
    {src:img1},
    {src:img2},
    {src:img3},
    {src:img4}
])
</script>

<style lang='less' scoped>
@media screen and (min-width: 1500px) {
    .TopLeft {
        width: 100%;
    }
}

.TopLeft {
    width: 100%;
    height: 250px;
    background: white;
    margin: 0 10px 10px 0;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    position: relative;

    .el-carousel {
        width: 96%;
        position: absolute;
        top: 5px;
        left: 2%;
        .el-carousel-item{
            .img{
                width: 100%;
                height: 100%;

            }
        }
    }

    .el-carousel__item h3 {
        display: flex;
        color: #475669;
        opacity: 0.75;
        margin: 0;
        width: 20px;
    }

}

@media screen and (min-width: 800px) {
    .TopLeft {
        width: 300px;
    }
}
</style>