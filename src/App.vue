<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="~assets/image/logo.png"> -->
<!--    <div class="body-left">-->
<!--      <SideBar></SideBar>-->
<!--    </div>               -->
    <div class="body-right">
<!--      <BreadCrumb v-if="hide ?? true"></BreadCrumb>  -->
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


export default {
  name: 'App',
  components: { SideBar, BreadCrumb },
  data() {
    return {
      hide: null
    }
  },
  mounted() {
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
