<template>
  <div>
    <!-- 一般的插槽 -->
    <slot></slot>
    <!-- 具名插槽 -->
    <slot name="secondTitle"></slot>
    <span>我是父传入的数字：{{ initNumber }}</span>
    <span>我是子组件2倍处理过的数字：{{ myNum }}</span>
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
      myNum: this.initNumber*2
    }
  },
  methods: {
    changeNumber(number) {
      if (number >= 0) {
        this.$emit('changeNumber', {
          increase: true,
          num:number
        });
      } else {
        this.$emit('changeNumber', {
          increase: false,
          num:number
        })
      }
      this.myNum+=number;
    }
  }
}
</script>
