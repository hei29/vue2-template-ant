<template>
  <div class="top-bar">
    <a-tabs @change="changeNav">
      <a-tab-pane key="1" tab="collapse"></a-tab-pane>
      <a-tab-pane key="2" tab="table"></a-tab-pane>
      <a-tab-pane key="3" tab="tree" disabled></a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {

      }
    },
    created() {

    },
    mounted() {

    },
    method: {

    }
  }
</script>

<style scoped lang='less'>
/* @import url(); 引入css类*/
</style>