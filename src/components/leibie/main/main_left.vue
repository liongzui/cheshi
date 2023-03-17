<template>
    <div class="main">
        <div class="main_top">
            <span>当前位置：<router-link to="/" class="main_top_link">首页</router-link> > <router-link to=""
                    class="main_top_link">类别{{ leibieIndex }}</router-link></span>
        </div>
        <div class="main_neiron">
            <div class="main_neiron_leibiao" v-for="(item, index) in shujuleibiao[yeshu]" :key="item.title">
                <div class="main_neiron_leibiao_src">
                    <img v-lazy="src" class="main_neiron_leibiao_src_1" @click="dianjitiaozhuan(item.leibieIndex,item.id)"/>
                </div>
                <div class="main_neiron_right">
                    <div class="main_neiron_right_leibie">{{ item.leibie }}</div>
                    <div class="main_neiron_right_biaoti" @click="dianjitiaozhuan(item.leibieIndex,item.id)">{{ item.title }}</div>
                    <div class="main_neiron_right_neiron">{{ item.neiron }}</div>
                    <div class="main_neiron_right_date">发布时间：{{ item.date }}</div>
                    <el-button plain class="main_neiron_right_btn" size="large" @click="dianjitiaozhuan(item.leibieIndex,item.id)">点击查看</el-button>
                </div>
            </div>
        </div>
        <div class="main_button">
            
            <el-pagination background layout="prev,pager,next" :page-count="shujuyeshu" v-model:current-page="yeshu1" class="mt-4"
                :pager-count="5" @next-click="nextyiye" @current-change="dianjiyeshu"  next-text="下一页" @prev-click="backyiye" prev-text="上一页"/>
            
        </div>
        
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import src from '@/images/1.jpg'
const router = useRouter()
const route = useRoute()
const props = defineProps<{
    shujuleibiao: any,
    shujuyeshu: number,
    leibiePage: number,
    leibieIndex: number
}>()

const dianjitiaozhuan=(leibieIndex:number,id:number)=>{
    router.push({
        name:'leibiexiangxi',
        params:{index:leibieIndex+1,id:id}
    })
}


let yeshu = ref(props.leibiePage)
let yeshu1 = ref(props.leibiePage + 1)
const backyiye = () => {
    router.push({
        name: 'leibiePage',
        params: {
            index: route.params.index,
            page: yeshu.value + 1
        }
    })
}
const nextyiye = () => {
    router.push({
        name: 'leibiePage',
        params: {
            index: route.params.index,
            page: yeshu.value + 1
        }
    })
}
const dianjiyeshu = (item: number) => {
    yeshu.value = item - 1
    router.push({
        name: 'leibiePage',
        params: {
            index: route.params.index,
            page: yeshu.value + 1
        }
    })
}

</script>

<style lang='less' scoped>
.main {
    width: 50%;
    background: white;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    display: flex;
    flex-direction: column;

    .main_top {
        width: 90%;
        height: 50px;
        border-bottom: 1px solid rgb(241, 238, 238);
        margin: 10px 5%;
        line-height: 50px;
        color: #888;

        .main_top_link {
            text-decoration: none;
            color: #888
        }
    }

    .main_neiron {
        height: 100%;
        display: flex;
        flex-direction: column;

        .main_neiron_leibiao {
            width: 90%;
            height: 120px;
            border-bottom: 1px solid rgb(241, 238, 238);
            margin: 10px 5%;
            display: flex;
            padding-bottom: 20px;

            .main_neiron_leibiao_src {
                width: 160px;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }

            .main_neiron_leibiao_src_1 {
                width: 160px;
                height: 120px;
                object-fit: cover;
                transition: all 0.5s;
                cursor: pointer;
            }

            .main_neiron_leibiao_src:hover {
                .main_neiron_leibiao_src_1 {
                    height: 150px;
                    transition: all 0.5s;
                }
            }

            .main_neiron_right {
                width: 80%;
                height: 100%;

                margin-left: 2%;
                position: relative;

                .main_neiron_right_leibie {
                    width: 90px;
                    height: 30px;
                    background: #f0f0f0;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 5px;
                    color: #888;
                    position: absolute;
                }

                .main_neiron_right_biaoti {
                    position: absolute;
                    left: 100px;
                    font-size: 20px;
                    font-weight: bold;
                    width: 60%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    cursor: pointer;
                }

                .main_neiron_right_neiron {
                    position: absolute;
                    width: 70%;
                    top: 30px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                .main_neiron_right_date {
                    width: 200px;
                    position: absolute;
                    bottom: 0;
                    color: #a7a7a7;
                    font-size: 15px;
                }

                .main_neiron_right_btn {
                    position: absolute;
                    right: 0;
                    bottom: 0;
                }

                .main_neiron_right_btn:hover {
                    color: white;
                    background: #5298ff;
                }
            }

        }

    }

    .main_button {
        width: 100%;
        display: flex;
        justify-content: center;

        .mt-4 {
            padding: 20px 0;
        }
    }
}

@media screen and (max-width: 1000px) {
    .main_neiron_right_btn {
        display: none;
    }

    .main {
        .main_button {
            .main_button_main {
                .main_button_main_yeshu {
                    width: 50px;
                }
            }
        }
    }
}
</style>