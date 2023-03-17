<template>
    <div class="right">
        <div class="top">
            <div class="top_1">最新发布</div>
            <div class="top_2">面朝大海，春暖花开</div>
        </div>

        <div class="main">
            <div class="main_bor">
                <div class="main_bor_1" v-for="item in sju[itt]">
                    <router-link :to="{name:'leibiexiangxi',params:{index:item.leibieIndex+1,id:Number(item.id)}}" target="_blank" 
                        class="main_bopr_1_neir">
                        {{ "["+item.date + "]" + itt + item.title }}
                    </router-link>
                    <div class="main_bopr_1_rqi">{{ item.month + "-" + item.day }}</div>
                </div>
            </div>
        </div>

        <div class="botton">
            <el-button-group class="button_btn">
                <el-button icon="ArrowLeft" class="button_btn_1" @click="backy">上一页</el-button>
                <el-button class="button_btn_1 button_btn_1_next" @click="nexty(sju)">
                    下一页
                    <el-icon class="el-icon--right">
                        <ArrowRight />
                    </el-icon>
                </el-button>
            </el-button-group>
        </div>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { ElMessage } from "element-plus";
let itt = ref(0)

const porps = defineProps<{
    sju: any[]
}>()

const backy = () => {
    if (itt.value == 0) {
        ElMessage.error("已经没有上一页了")
    } else {
        itt.value--
    }
}
const nexty = (sju: any) => {

    if (itt.value == sju.length - 1) {
        ElMessage.error("已经没有下一页了")
    } else {
        itt.value++
    }
}
</script>

<style lang='less' scoped>
.right {
    width: 100%;
    height: 760px;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    position: relative;

    .top {
        width: 100%;
        height: 50px;
        position: relative;
        background: white;

        .top_1 {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 22px;
        }

        .top_2 {
            color: #cfcdcd;
            position: absolute;
            right: 10px;
            top: 20px;
        }
    }

    .main {
        width: 100%;
        height: 85%;
        position: absolute;
        top: 60px;
        background: white;
        display: flex;
        justify-content: center;

        .main_bor {
            width: 85%;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;

            .main_bor_1 {
                width: 45%;
                height: 20px;
                display: flex;
                margin: 5px 2.5% 0 2.5%;
                padding-bottom: 16px;
                transition: all 0.5s;

                .main_bopr_1_neir {
                    text-decoration: none;
                    color: #000;
                    width: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 20px;
                    margin-left: 2.5%;
                }

                .main_bopr_1_rqi {
                    width: 60px;
                    line-height: 20px;
                    margin-left: 5%;
                    color: #c2baba;
                }
            }

            .main_bor_1:hover {
                .main_bopr_1_neir {
                    color: #45b6f7;
                }

            }

            .main_bor_1:nth-child(1),
            .main_bor_1:nth-child(2) {
                margin-top: 25px;
            }

            .main_bor_1:nth-child(9),
            .main_bor_1:nth-child(10),
            .main_bor_1:nth-child(19),
            .main_bor_1:nth-child(20) {
                border-bottom: 2px dashed var(--el-border-color);
            }


        }
    }

    .botton {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 45px;
        background: white;

        .button_btn {
            width: 100%;
            height: 38px;
            display: flex;
            justify-content: center;
            align-items: flex-end;

            .button_btn_1 {
                width: 45%;
            }

            .button_btn_1_next {
                margin-left: 2%;
            }
        }
    }
}

@media screen and (max-width: 800px) {
    .right {
        width: 100%;
    }
}

@media screen and (max-width: 600px) {
    .right {
        .main {
            .main_bor {
                .main_bor_1 {
                    width: 100%;
                    transition: all 1s;
                }

                .main_bor_1:nth-child(1),
                .main_bor_1:nth-child(2) {
                    margin: 5px 2.5% 0 2.5%;
                }

                .main_bor_1:nth-child(9),
                .main_bor_1:nth-child(10),
                .main_bor_1:nth-child(19),
                .main_bor_1:nth-child(20) {
                    border-bottom: 0;
                }
            }
        }
    }
}
</style>