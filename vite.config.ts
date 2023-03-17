import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'src')
    }
   },
  server:{
    proxy:{
      "/api":{
        target:"http://120.78.82.69:3000",
        // target:"http://localhost:3000/",
        rewrite:(path)=>path.replace(/^\/api/,''),//重置api为空
        changeOrigin:true,
        ws:true,
        secure:true,
        // cookiePathRewrite:{'^/api':''}
      }
    }
  }
})
