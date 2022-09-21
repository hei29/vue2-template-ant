<template>
  <div class="breadcrumb">
    <a-breadcrumb :routes="navList" v-if="navList.length">
        <template slot="itemRender" slot-scope="{ route, params, routes, paths }">
            <!-- <span @click="getDetail(route, params, routes, paths)">{{route.name}}</span> -->
            <router-link :to="route.path" active-class="active-item">{{route.name}}</router-link>
        </template>
    </a-breadcrumb>
  </div>
</template>

<script>

  export default {
    name: 'Index',
    data() {
      return {
        navList: [
            {
                path: '/collapse',
                name: '折叠板'
            },
            {
                path: '/table',
                name: '表格'
            },
            {
                path: '/popover',
                name: '气泡卡片'
            }
        ]
      }
    },
    created() {

    },
    mounted() {
    },
    computed: {
        pathList() {
            const nowPath = this.$route.fullPath;
            return nowPath.split('/')
        }
    },
    watch: {
        $route: {
            handler: function(val, oldVal) {
                // console.log(val);
            },
            deep: true
        },
        // pathList(val) {
        //     this.navList.length = 0
        //     if(val.length-1) {
        //         let url = ''
        //         val.map((item) => {
        //             const obj = {}
        //             if(item) {
        //                 url+='/'+item
        //                 obj.path = url
        //                 obj.name=item
        //             }
        //             console.log(obj);
        //             this.navList.push(obj)
        //         })
        //     }
        // }
    },
    methods: {
        getDetail(...args) {
            // route 当前点击路由信息
            // params 路由的参数
            // routes 所有路由信息（自己传的）
            // paths 所有路由信息中的路径信息
            const { route, params, routes, paths } = args
        }
    }
  }
</script>

<style scoped lang='less'>
/* @import url(); 引入css类*/
.breadcrumb {
    height: 25px;
    margin: 10px 20px;

    :deep(.ant-breadcrumb) {

        span {
            &:last-child {
                a {
                    color: rgba(0, 0, 0, .45);
                }
            }

            a.active-item {
                color: #771caa;
            }
        }
    }
}
</style>