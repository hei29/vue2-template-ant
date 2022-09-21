import Vue from 'vue'
import Vuex from 'vuex'

import modA from './modules/mod1'

Vue.use(Vuex)

// 使用辅助函数
// ...mapState['state名'], ...mapState({重命名: 'state名'})
// ...mapMutations['mutations名'], ...mapMutations({重命名: 'mutations名'})
// ...mapActions['actions名'], ...mapActions({重命名: 'actions名'})
// ...mapState['state名'], ...mapState({重命名: 'state名'})

const store = new Vuex.Store({
    state() {
        return {
            loading: false,
            cancelToken: []
        }
    },
    mutations: {
        changePageLoading(state, val) {
            state.loading = val
        },
        setCancelTokenList(state, val) {
            state.cancelToken = val
        }
    },
    actions: {
        requestA(context, val) {
            // 1.发异步请求，请求数据
            // 2.commit调用mutations来修改数据
            // 3.context.commit('mutations名',val)
        }
        // 使用
        // this.$store.dispath('mutations名', 参数)
        // mapActions['actions名'] / mapActions[{'新名字':'actions名'}]
    },
    getters: {
        getCancelTokenList(state) {
            return state.cancelToken
        }
    },
    modules: {
        modA
    }
})

export default store