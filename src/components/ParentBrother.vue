<template>
  <div>
    <h5>我是 List 的叔叔</h5>
    我也可以 inject 数据 {{ nav }}
    <button @click="hello">点击执行挂在的 Hello 函数</button>
  </div>
</template>

<script>
export default {
  inject: ['nav'],
  name: 'List2',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    hello() {
      this.nav.hello()
    }
  }
}
</script>
