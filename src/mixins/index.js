// 如果多个页面都需要请求同一接口，可将其提取出来请求，在mian.js中混入Vue
import {demo} from '@/api'
export default (Vue) => {
    Vue.mixin({
        data() {
            return {
                list: []
            }
        },
        mounted() {
            // 参数取自每个需要调用该接口页面的参数，与data同级
            if(this.$options.demoParams) {
                demo(this.$options.demoParams).then(res => {
                    this.list = res.data
                })
            }
        }
    })
}