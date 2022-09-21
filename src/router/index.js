import Vue from 'vue'
import Router from 'vue-router' 

import store from '../store'

Vue.use(Router)

const createRouter = () => new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/collapse'
        },
        {
            path: '/collapse',
            name: '折叠板',
            component: () => import('@/view/collapse/Index')
        },
        {
            path: '/table',
            name: '表格',
            component: () => import('@/view/table/Index')
        },
        {
            path: '/popover',
            name: '气泡卡片',
            component: () => import('@/view/popover/Index')
        }
    ]
})

const router = createRouter()

router.beforeEach((to, from, next) => {
    if(to.name) {
        document.title = to.name
        let cancelArr = store.state.cancelToken
        if (cancelArr.length) {
            cancelArr[0]('请求取消')
            store.commit('setCancelTokenList', [])
        }
        next()
    }
})

export function resetRouter () {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router