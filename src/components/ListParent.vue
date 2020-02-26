<template>
  <div>
    <h5>我是 List 他爹</h5>
    <List :list="nav"></List>
    <button @click="ChangeInjectValue">点击改变 inject 的内容</button>
    <button @click="ChangeInjectObjectValue">
      点击挂载 Hello 函数
    </button>
  </div>
</template>

<script>
import List from '@/components/List'
export default {
  inject: ['nav'],
  name: 'ListParent',
  components: {
    List
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ChangeInjectValue() {
      this.nav = ['改变后的值']
    },
    ChangeInjectObjectValue() {
      this.nav.hello = function() {
        alert('Hello')
      }
    }
  }
}
</script>
