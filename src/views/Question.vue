<template>
  <div class="home">
    <List :list="question"></List>
  </div>
</template>

<script>
import List from '@/components/List'
export default {
  name: 'Question',
  components: {
    List
  },
  data() {
    return {
      question: [
        '怎么去理解组件化？',
        '为什么要组件化？',
        '平时的开发与组件化开发最显著的区别是什么？',
        '怎么去理解数据驱动？'
      ]
    }
  }
}
</script>
