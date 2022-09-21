<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="~assets/image/logo.png"> -->
    <div class="body-left">
      <SideBar></SideBar>
    </div>               
    <div class="body-right">
      <BreadCrumb></BreadCrumb>  
      <div class="router-view">
          <a-spin :spinning="$store.state.loading" size="large" tip="loading...">
            <router-view/>
          </a-spin>
        </div>
      </div>
    </div>
</template>

<script>
import SideBar from '@/components/sideBar/Index.vue'
import BreadCrumb from '@/components/breadCrumb/Index.vue'

import {demoRequest} from '@/api'

import {jsonp} from 'vue-jsonp'
export default {
  name: 'App',
  components: { SideBar, BreadCrumb },
  mounted() {
    // 测试用代码，可参考可删除
    // demoRequest().then((res) => {
    //   console.log(res);
    // }).catch(err => {
    //   console.error(err.message);
    // })

    // const URL = '/basic/alertRule/findAlertTypeTree'
    // jsonp(URL, {output: 'jsonp'}).then(res => {
    //   const data = res.result
    //   console.log(res, data);
    // }) 

    // let str = 'heellp world'
    // let pattern = /l+/gi
    // let newStr0 = str.replace(/l|p/g, 'x')
    // let newStr = pattern.exec(str)
    // console.log(newStr);
    // newStr = pattern.exec(str)
    // console.log(newStr);

  },
  methods: {
  }
}
</script>

<style lang="less">

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    height: 100%;

    .body-left {
      width: 266px;
      height: 100%;
    }

    .body-right {
      width: calc(100% - 266px);
      height: 100%;

      .router-view {
        height: calc(100% - 25px);
      }
    }
  }
</style>
