<template>
<div class="main">
    <div v-for="item in xiangxishuju">
        <div class="main_top">
        <h1 class="main_top_title">{{item.title}}</h1>
        <div class="main_top_date"><el-icon><Calendar /></el-icon><span class="main_top_date_neiron">{{item.date}}</span></div>
        <div class="main_top_leibie"><el-icon><CollectionTag /></el-icon><span class="main_top_leibie_neiron">{{item.leibie}}</span></div>
    </div>
    <div class="main_neiron">
        <img v-lazy="src" class="main_neiron_src">
        <div class="main_neiron_bottom">
            <span class="main_neiron_bottom_jiesao">介绍</span>
            <span class="main_neiron_bottom_neiron">{{item.neiron}}</span>
        </div>
    </div>
    </div>
</div>

</template>

<script setup lang='ts'>
import { ref,reactive,onBeforeMount, computed} from 'vue';
import axios from 'axios'
import src from '@/images/2.jpg'
const props=defineProps<{
    xiangxishuju:any
}>()


</script>

<style lang='less' scoped>
.main{
    width: 50%;
    background: white;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    display: flex;
    flex-direction: column;
    .main_top{
        width: 90%;
        height: 120px;
        border-bottom: solid #e5e5e5 1px;

        margin: 10px 5%;
        position: relative;
        color: #9a9a9a;
        .main_top_title{
            color: black;
        }
        .main_top_date{
            position: absolute;
            width: 120px;
            bottom: 15px;
            .main_top_date_neiron{
                width: 100px;
                position: absolute;
                bottom: 2px;
                left: 25px;
                
            }
        }
        .main_top_leibie{
            position: absolute;
            left: 140px;
            bottom: 14px;
            width: 80px;
            .main_top_leibie_neiron{
                width: 60px;
                position: absolute;
                bottom: 3px;
                left: 20px;
                color: #333;
            }
        }
    }
    .main_neiron{
        width: 90%;
        margin:10px 5%;
        display: flex;
        flex-direction: column;
        border-bottom: solid #e5e5e5 1px;
        .main_neiron_src{
            object-fit: cover;
            width: 100%;
            margin: 10px 0;
        }
        .main_neiron_bottom{
            width: 100%;
            display: flex;
            flex-direction: column;
            .main_neiron_bottom_jiesao{
                font-size: 18px;
                font-weight: bold;
                border-left: 4px solid #1b54bc;
                padding-left: 10px;
            }
            .main_neiron_bottom_neiron{
                width: 100%;
                word-wrap:break-word; 
                word-break:break-all; 
                margin-top: 20px;
                margin-bottom: 30px;
            }
        }
    }
}
</style>