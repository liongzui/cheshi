<template>
    <div class="wraps">
        <div class="bar" ref="bar"></div>
    </div>

</template>

<script setup lang='ts'>
import { ref, reactive, onMounted } from 'vue';

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)
const startLoading = () => {
    let dom = bar.value as HTMLElement
    dom.style.display='block'
    speed.value = 1
    window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1;
            dom.style.width = speed.value + '%';
            timer.value = window.requestAnimationFrame(fn)
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })

}
const endLoading = () => {
    let dom = bar.value as HTMLElement
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100;
            dom.style.width = speed.value + '%';
        })
    }, 1000)
    setTimeout(()=>{
        dom.style.display='none'
    },1400)

}
defineExpose({
    startLoading,
    endLoading
})

</script>

<style lang='less' scoped>
.wraps {
    position: fixed;
    z-index: 10;
    top: 0;
    width: 100%;
    height: 2px;
    .bar {
        display: none;
        height: inherit;
        width: 0;
        background: blue;
    }
}
</style>