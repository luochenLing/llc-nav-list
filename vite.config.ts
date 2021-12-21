import { defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const path =require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    target:'esnext',
    outDir:'dist',
    lib:{
      entry:path.resolve(__dirname,'./src/main.ts'),
      name:'NavList',//全局变量的名称
      fileName:'nav-list'//输出文件的名字
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          //UMD下的全局变量名称
          vue:'vue'
        }
      }
    }
  },
  plugins: [vue(),
  dts({
    insertTypesEntry:true,
    copyDtsFiles:false
  })]
})

