<template>
  <div class="side-bar">
    <a-menu
        :default-selected-keys="['collapse']"
        :selected-keys="activeKeys"
        :open-keys.sync="openKeys"
        mode="inline"
        @click="handleClick"
    >
        <a-sub-menu key="sub1">
            <template slot="title">
                <a-icon type="mail"></a-icon>
                <span>Navigation One</span>
            </template>
            <a-menu-item-group key="unit1">
                <template slot="title">
                    <a-icon type="setting" style="marginRight: 10px"></a-icon>
                    <span>Setting</span>
                </template>
                <a-menu-item key="1">Item1</a-menu-item>
                <a-menu-item key="2">Item2</a-menu-item>
                <a-menu-item key="3">Item3</a-menu-item>
                <a-menu-item key="4">Item4</a-menu-item> 
            </a-menu-item-group> 
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template slot="title">
                <a-icon type="area-chart"></a-icon>
                <span>Mode</span>
            </template>
            <a-menu-item key="collapse">collapse</a-menu-item>
            <a-menu-item key="table"><a-icon type="table"></a-icon>table</a-menu-item>
            <a-menu-item key="popover">popover</a-menu-item>
        </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import router from '@/router';

  export default {
    name: 'Index',
    data() {
      return {
        openKeys: ['sub2'],
        activeKeys: ['collapse']
      }
    },
    created() {

    },
    watch: {
      '$route': 'changeRoute'
    },
    mounted() {
      
    },
    methods: {
      handleClick(data) {
        const {key, keyPath} = data
        // if (keyPath.includes('collapse')) router.push({path: '/collapse'})
        // if (keyPath.includes('table')) router.push({path: '/table'})
        // if (keyPath.includes('tree')) router.push({path: '/tree'})
        keyPath.includes('sub2') && key && router.push({ path: '/' + key })
      },
      changeRoute(val) {
        const path = val.path.substring(1, val.path.length)
        this.activeKeys = [path]
      }
    }
  }
</script>

<style scoped lang='less'>
/* @import url(); 引入css类*/
    .side-bar {
        width: 100%;
        height: 100%;

        :deep(.ant-menu) {
            height: 100%;

            .ant-menu-submenu {
                padding-left: 16px;
                text-align: left;
            }
        }
    }
</style>