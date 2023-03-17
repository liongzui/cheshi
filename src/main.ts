import { createApp,createVNode,render } from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import VueLazyload from 'vue-lazyload'
import loadingBar from "@/components/loadingBar/loadingBar.vue";
const loading=createVNode(loadingBar)
render(loading,document.body)


const app=createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
router.beforeEach((to,from,next)=>{//路由前置守卫
    
    history.state.params=to.params.leibie
    loading.component?.exposed?.startLoading()
    
    next()
    
})
router.afterEach((to,from)=>{//路由后置守卫
    loading.component?.exposed?.endLoading()
})




app.use(VueLazyload)
app.use(VueLazyload,{
    preLoad:1.3,
    error:'@/images/err.jpg',
    loading:'@/images/err.jpg'
})
app.use(ElementPlus)
app.use(router)
app.mount('#app')
