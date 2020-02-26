<template>
  <div>
    <h5>我是 List 他爷爷</h5>
    <ParentBrother></ParentBrother>
    <ListParent :list="nav"></ListParent>
    <div>
      我这里也能获得 inject 的数据
      {{ nav }} //这里的数据不是响应式的
    </div>
  </div>
</template>

<script>
import ListParent from '@/components/ListParent'
import ParentBrother from '@/components/ParentBrother'
export default {
  inject: ['nav'],
  name: 'ListGrandParent',
  components: {
    ListParent,
    ParentBrother
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
