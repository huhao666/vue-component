<template>
  <div>
    <h3>注意我才是 B</h3>
    <div>A 传过来的消息：{{ aData }}</div>
    <button @click="sendAMessage">向A传递数据</button>
  </div>
</template>

<script>
import { eventBus } from '../../eventBus'
export default {
  name: 'A',
  data() {
    return {
      aData: ''
    }
  },
  mounted() {
    eventBus.$on('aData', e => {
      this.aData = e.text
    })
  },
  methods: {
    sendAMessage() {
      eventBus.$emit('bData', { text: '我是B传递的数据' })
    }
  }
}
</script>
