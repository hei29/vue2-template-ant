import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import { VueJsonp } from 'vue-jsonp'
import VueClipborad from 'vue-clipboard2' // 复制粘贴
import demoMixins from '@/mixins' // 全局混入请求

Vue.config.productionTip = false

Vue.use(Antd).use(VueJsonp).use(VueClipborad).use(demoMixins)

// 混入到所有vue,类似于全局变量，但是各个组件之间互不影响，也就是在当前组件的修改不会影响到其他组件，建议用于存储只读属性
Vue.mixin({
    data() {
        return {
            global: 'hello'
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
