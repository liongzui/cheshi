<template>
    <div class="main">
        <span class="span">loading...</span>
    </div>

</template>

<script setup lang='ts'>
import { ref,reactive } from 'vue';

</script>

<style lang='less' scoped>
.main{
    width: 100vw;
    height: 100vh;
    background: rgb(238, 245, 253);
    display: flex;
    justify-content: center; 
    align-items: center;
    .span{
        font-size: 25px;
        color:white
    }
}
</style>