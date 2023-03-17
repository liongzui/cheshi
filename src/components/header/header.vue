<template>
    <div class="top">
        <div class="top_1"></div>
        <div class="top_2">
            <router-link class="top_2_btn" v-for="(item, index) in biaoti" to="" :key="item.leibie"
                :class="biaotidianji == item.leibie ? 'top_2_btn_1' : ''"
                @click="biaotidianjishijian(item.leibie, index)">
                {{ item.leibie }}
                <div class="top_2_btn_liudon"></div>
            </router-link>
            <div class="top_2_btn2">
                <el-icon class="top_2_btn2_leibiao top_2_btn2_guanbi" @click="showleibiao = !showleibiao"
                    v-if="showleibiao">
                    <Close />
                </el-icon>
                <el-icon class="top_2_btn2_leibiao top_2_btn2_leibiao1" @click="showleibiao = !showleibiao"
                    v-else="showleibiao">
                    <Fold />
                </el-icon>

            </div>
        </div>
        <div class="leibiao1" v-show="showleibiao">
            <div class="leibiao">
                <router-link class="leibiao_btn" v-for="(item, index) in biaoti" to="" :key="item.leibie"
                    @click="biaotidianjishijian(item.leibie, index)">
                    {{ item.leibie }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive, onBeforeMount,onUpdated } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import axios from "axios";
const biaotidianji = ref()
const router = useRouter()
const route = useRoute();
let biaoti: Array<biaoto1> = reactive([]);
const huoqushuju=async()=>{
    const biaoto = await axios.get("/api/leibie")
    biaoti.push(...biaoto.data)  
}
huoqushuju()
// onBeforeMount(() => {
//     huoqushuju()
// })


const biaotidianjishijian = (leibie: string, index: number) => {
    biaotidianji.value = leibie
    if (index == 0) {
        router.push({
            path: '/'
        })
    } else {
        router.push({
            name: 'leibie',
            params:{
                index
            }
        })
    }
}
const porps=defineProps<{
    biaotiIndex:number
}>()

type biaoto1 = {
    leibie: string
}

const showleibiao = ref<boolean>(false)


onUpdated(()=>{
    const aa=biaoti[porps.biaotiIndex]?.leibie
    biaotidianji.value=aa?aa:'网站首页'
})
</script>

<style lang='less' scoped>
@media screen and (min-width: 800px) {
    .leibiao1 {
        display: none;
    }

    .top_2_btn2 {
        display: none;
    }
}

.top {
    width: 100%;
    height: 200px;
    background: rgb(255, 255, 255);
    box-shadow: 0px 3px 10px 0px #e5e5e5;

    .top_1 {
        width: inherit;
        height: 148px;
    }

    .top_2 {
        display: flex;
        justify-content: center;
        flex-grow: 1;

        .top_2_btn {
            width: 12.5%;
            height: 50px;
            border-top: 1px solid rgb(241, 238, 238);
            text-align: center;
            line-height: 50px;
            color: #000;
            text-decoration: none;

            .top_2_btn_liudon {
                width: 0%;
                height: 2px;
                background: orange;
            }
        }

        .top_2_btn_1 {
            cursor: pointer;
            color: #ffa400;

            .top_2_btn_liudon {
                width: 100%;
                transition: all 0.5s;
            }
        }

        .top_2_btn2 {
            width: 100%;
            height: 50px;
            position: relative;
            border-top: solid 1px rgb(241, 238, 238);

            .top_2_btn2_leibiao {
                font-size: 40px;
                position: absolute;
                top: 5px;
                left: 5px;
            }
        }


        .top_2_btn:hover {
            cursor: pointer;
            color: #ffa400;

            .top_2_btn_liudon {
                width: 100%;
                transition: all 0.5s;
            }
        }
    }
}

.leibiao1 {
    height: calc(100vmax);
}

.leibiao {
    width: 240px;
    height: 100%;
    background: white;
    display: flex;
    flex-direction: column;

    .leibiao_btn {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #000;
        height: 60px;
        border-bottom: solid 1px rgb(241, 238, 238);
    }
}

@media screen and (max-width: 800px) {
    .top {
        .top_2 {
            height: 50px;

            .top_2_btn {
                display: none
            }
        }
    }

    .leibiao {
        display: block;
    }
}
</style>