<template>

    <div class="main">
        <div class="main_top">
            <div class="main_top_1"><el-icon size="40px">
                    <Memo />
                </el-icon><span class="main_top_1_span">全部文章</span></div>
            <el-icon class="main_top_2" size="50px" @click="dianjixiangxi">
                <More />
            </el-icon>
        </div>
        <div class="main_main1">
            <div class="main_main1_border" v-for="(item, index) in leibie" @mouseover="mouseover1(item,index)"
                :class="yangshi == item.leibie ? 'main_main1_border1' : ''" :key="item.leibie">
                {{ item.leibie }}
            </div>
        </div>
        <div class="main_botton">
            <div class="main_bor">
                <router-link class="main_bor_1" :to="{name:'leibiexiangxi',params:{index:item.leibieIndex+1,id:item.id}}" v-for="item in leibieshuju" target="_blank">
                    <div class="main_bopr_1_neir">{{ item.leibie + item.title + item.title }}</div>
                    <div class="main_bopr_1_rqi">{{ item.month + "-" + item.day }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onBeforeMount } from 'vue';
import axios from "axios";
import { useRouter } from "vue-router";
const router=useRouter()
type leibie1 = {
    leibie: string
}

let shujuleibie: any = reactive([])
let leibie: Array<leibie1> = reactive([]);
let leibieshuju: any = reactive([])
const huoqushuju=async ()=>{
    const sjlb = await axios.get("/api/shujuleibie")
    leibie.push(...sjlb.data)
    shujuleibie.push(...sjlb.data)
    leibieshuju.push(...shujuleibie[0].shuju)
    leibieshuju.splice(21,leibieshuju.length);
}
onBeforeMount( () => {
    huoqushuju()
})


let yangshi = ref<string>("类别0");
let leibieIndex=ref(0)
const mouseover1 = (item: leibie1,index:number) => {
    yangshi.value = item.leibie
    shujuleibie.forEach((v: any) => {
        if (item.leibie == v.leibie) {
            leibieshuju = v.shuju;
        }
    });
    leibieIndex.value=index;
}

const dianjixiangxi=()=>{
    router.push({
        name: 'leibie',
            params:{
                index:leibieIndex.value+1
        }
    })
    
    
}
</script>

<style lang='less' scoped>
.main {
    width: 100%;
    height: 420px;
    background: white;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    margin-bottom: 20px;

    .main_top {
        width: 95%;
        height: 60px;
        border-bottom: solid 1px rgb(236, 227, 227);
        position: relative;
        margin: 0 2.5% 10px 2.5%;

        .main_top_1 {
            position: absolute;
            top: 10px;
            display: flex;

            .main_top_1_span {
                font-size: 20px;
                line-height: 40px;
                margin-left: 2px;
            }
        }

        .main_top_2 {
            position: absolute;
            right: 0;
            top: 5px;
            color: #c2baba;
            cursor: pointer;
        }
    }

    .main_main1 {
        width: 95%;
        height: 40px;
        background: white;
        border-bottom: solid 1px rgb(236, 227, 227);
        display: flex;
        margin: 0 2.5% 10px 2.5%;

        .main_main1_border {
            width: 80px;
            height: 37px;
            text-align: center;
            line-height: 40px;
            margin-left: 20px;
            border-bottom: 0;
            cursor: pointer;
            transition: all 1s;
        }

        .main_main1_border1 {
            border-bottom: 3px solid blue;
            transition: all 0.5s;
            color: #45b6f7;
        }

    }

    .main_botton {
        width: 100%;
        height: 285px;
        .main_bor {
            width: 95%;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-wrap: wrap;
            align-content: flex-start;
            margin: 0 4%;
            .main_bor_1 {
                width: 30%;
                height: 20px;
                display: flex;
                text-decoration: none;
                color: #000;
                margin: 5px 3.3% 0 0;
                padding-bottom: 16px;
                transition: all 0.5s;
                position: relative;

                .main_bopr_1_neir {
                    width: 80%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 20px;
                }

                .main_bopr_1_rqi {
                    width: 60px;
                    line-height: 20px;
                    color: #c2baba;
                    position: absolute;
                    right: -5%;
                }
            }

            .main_bor_1:hover {
                color: #45b6f7;
            }
        }
    }
}

@media screen and (max-width: 800px) {
    .main_main1_border {
        display: none;
    }

    .main_main1_border:nth-child(1) {
        display: block;
    }

    .main {
        .main_botton {
            .main_bor {
                .main_bor_1 {
                    width: 45%;
                    margin-right: 5%;
                    transition: all 0.5s;
                }
            }
        }
    }
}

@media screen and (max-width: 600px) {
    .main {
        .main_botton {
            .main_bor {
                .main_bor_1 {
                    width: 100%;
                    transition: all 0.5s;
                }
            }
        }
    }
}
</style>