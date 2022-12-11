<template>
  <div class="chat_room">
    <a-input v-model="msg"></a-input>
    <a-button @click="sendMsg">发送</a-button>
  </div>
</template>

<script>
import moment from 'moment'
let ws

export default {
  name: "Index",
  data() {
    return {
      msg: '',
      data: []
    }
  },
  mounted() {
    // const mt = new Date('2022-10-29')
    // const isEnd = moment('2022-12-30').endOf('month').isSame('2022-12-30', 'day')
    // const isMonth = moment(moment()).isSame('2022-12-20', 'month')
    // console.log(isMonth)
    // this.createSocket()
    let newList = []
    newList = this.data.map(t => t)
    console.log(newList)
  },
  methods: {
    createSocket() {
      ws = new WebSocket('ws://localhost:8080')

      ws.onopen = () => {
        console.log('连接成功')
      }

      ws.onmessage = (msg) => {
        console.log(msg.data)
      }

      ws.onerror = () => {
        console.log('error')
      }

      ws.onclose = () => {

      }
    },

    sendMsg() {
      ws.send(this.msg)
    }
  }
}
</script>

<style scoped>

</style>