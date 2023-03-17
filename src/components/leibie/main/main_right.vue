<template>
<div class="main">
    <div class="main_top">
        <div class="main_top_1"><el-icon class="main_top_1_icon" size="30px"><FolderOpened /></el-icon><span class="main_top_1_span">栏目分类</span></div>
        <div class="main_top_btns">
            <div  v-for="(item,index) in shujubiaoti">
                <el-button plain class="main_top_btns_btn" size="large" v-if="item.leibie!='类别'+leibieIndex" :key="item.leibie" @click="dianjifenlei(index+1)">{{ item.leibie }}</el-button>
            </div>
        </div>
    </div>

</div>

</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue';
import { useRouter } from "vue-router";
const router=useRouter()

const props=defineProps<{
    shujubiaoti:any,
    leibieIndex:number
}>()


const dianjifenlei=(index:number)=>{
    router.push({
            name: 'leibie',
            params:{
                index
            }
    })
}
</script>

<style lang='less' scoped>
.main {
    width: 25%;
    height: 800px;
    background: white;
    box-shadow: 0px 3px 10px 0px #e5e5e5;
    .main_top{
        width: 100%;
        height: 300px;
        .main_top_1{
            width: 90%;
            height: 40px;
            border-bottom: #e5e5e5 1px solid;
            margin: 10px 5%;
            line-height: 40px;
            font-size: 24px;
            position: relative;
            .main_top_1_icon{
                position: absolute;
                top:5px
            }
            .main_top_1_span{
                position: absolute;
                left: 30px;
            }
        }
        .main_top_btns{
            width: 90%;
            margin: 0 5%;
            display: flex;
            flex-wrap: wrap;
            .main_top_btns_btn{
                width: 90px;
                margin: 5px;
            }
            .main_top_btns_btn:hover{
                color:white;
                background: #5298ff;
            }
        }
    }
}
</style>