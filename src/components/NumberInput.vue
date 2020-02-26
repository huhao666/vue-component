<template>
  <div>
    <!-- 一般的插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="secondTitle"></slot>
    <span>我是数字：{{ number }}</span>
    <button @click="changeNumber(1)">增加</button>
    <button @click="changeNumber(-1)">减少</button>
  </div>
</template>

<script>
export default {
  name: 'NumberInput',
  props: {
    initNumber: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      number: this.initNumber
    }
  },
  methods: {
    changeNumber(number) {
      if (number >= 0) {
        this.$emit('changeNumber', {
          increase: true
        })
      } else {
        this.$emit('changeNumber', {
          increase: false
        })
      }
      this.number += number
    }
  }
}
</script>
