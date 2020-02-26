<template>
  <div>
    <h3>注意我才是 A</h3>
    <div>B 传过来的消息：{{ bData }}</div>
    <button @click="sendBMessage">向B传递数据</button>
  </div>
</template>

<script>
import { eventBus } from '@/store/eventBus'
export default {
  name: 'A',
  data() {
    return {
      bData: ''
    }
  },
  mounted() {
    console.log(eventBus)
    eventBus.$on('bData', e => {
      // 注意这里得上下文，如果使用 function 就不行
      this.bData = e.text
    })
  },
  methods: {
    sendBMessage() {
      eventBus.$emit('aData', { text: '我是A传递的数据' })
    }
  }
}
</script>
