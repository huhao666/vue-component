<template>
  <div class="home">
    <List :list="classify"></List>
  </div>
</template>

<script>
import List from '@/components/List'
export default {
  name: 'Classify',
  components: {
    List
  },
  data() {
    return {
      classify: ['基础组件', '页面组件', '业务组件']
    }
  }
}
</script>
