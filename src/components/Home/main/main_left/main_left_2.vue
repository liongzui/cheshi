<template>
    <div class="BottonLeft">
        <div class="top">
            <div class="top_1">
                <el-icon size="35" class="el_icon">
                    <DataLine />
                </el-icon>
                <span class="top_1_span">今日推荐</span>
            </div>
        </div>
        <div class="shujupaixu">
            <router-link class="shujupaixu_biaoti" v-for="item in sju" :to="{name:'leibiexiangxi',params:{index:leibieIndex+1,id:item.id}}" :key="item.title" target="_blank">
                <div class="shujupaixu_biaoti_1">{{ item.title }}</div>
                <div class="shujupaixu_date">{{ item.date }}</div>
            </router-link>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import {useRouter} from 'vue-router'
const router=useRouter()
const porps:any=defineProps<{
    sju:any,
    leibieIndex:number
}>()

</script>

<style lang='less' scoped>
@media screen and (min-width: 1500px) {
    .BottonLeft {
        width: 20%;
    }
}

.BottonLeft {
    width: 20%;
    height: 500px;
    background: white;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    overflow: hidden;

    .top {
        width: 100%;
        height: 60px;


        .top_1 {
            font-size: 20px;
            position: relative;

            .el_icon {
                margin: 13px 10px;
            }

            .top_1_span {
                line-height: 50px;
                position: absolute;
                top: 5px;
            }
        }
    }

    .shujupaixu {
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 5%;

        .shujupaixu_biaoti {
            width: 100%;
            height: 42px;
            border-top: solid 1px rgb(236, 227, 227);
            font-size: 16px;
            display: flex;
            text-decoration: none;

            .shujupaixu_biaoti_1 {
                width: 60%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 10px 20px 0 10px;
                color: #7a7777;
            }

            .shujupaixu_date {
                line-height: 30px;
                font-size: 10px;
                margin: 8px 0 0 10px;
                color: #c2baba;
            }
        }

        .shujupaixu_biaoti:hover {


            .shujupaixu_biaoti_1 {
                color:#45b6f7;
            }
        }

    }

}


@media screen and (min-width: 800px) {
    .BottonLeft {
        width: 300px;
    }
}
</style>