<template>
  <div class="home">
    <h3>首先弄清楚组件之间的关系</h3>
    <div>大致可以分为三种关系：父子关系、祖孙关系、兄弟关系</div>
    <hr />
    <h3>三个重要的 api</h3>
    <div>props、event、slot</div>
    <NumberInput
      ref="numberInputRef"
      :initNumber="initNumber"
      @changeNumber="handleChangeNumber"
    >
      <h5 slot="secondTitle">这是一个副标题</h5>
      <h4>这是一个没有意思的游戏</h4>
    </NumberInput>
    <hr />
    {{nav}}
    <h3>还有两个内置的通信手段</h3>
    <div>不太优雅的实例引用：$ref、$parent/$children</div>
    <hr />
    <h3>优雅的inject/provide获取app上的数据(Vue.js 2.2.0 以后新增的)</h3>
    <ListGrandParent></ListGrandParent>
    <hr />
    <h3>下面是 eventBus 的用法</h3>
    <A></A>
    <B></B>
    <hr />
    <h3>还有其他的通信方式(部分需要自己写代码扩展)</h3>
    <List :list="anothers"></List>
  </div>
</template>

<script>
import ListGrandParent from '@/components/ListGrandParent'
import NumberInput from '@/components/NumberInput'

import A from '@/components/eventBus/A'
import B from '@/components/eventBus/B'

import List from '@/components/List'

export default {
  name: 'Classify',
  inject: ['nav'],
  components: {
    NumberInput,
    ListGrandParent,
    A,
    B,
    List
  },
  data() {
    return {
      classify: ['基础组件', '页面组件', '业务组件'],
      initNumber: 10,
      anothers: ['dispatch / broadcast', 'findComponents', 'vuex']
    }
  },
  mounted() {
    let numberInput = this.$children[0]
    console.log('ComponentName: ' + numberInput.$options.name)
    console.log(numberInput)
    console.log('parent.data.nav')
    console.log(this.$parent.$data.nav)
    console.log('使用ref的注册的numberInput的引用')
    console.log(this.$refs.numberInputRef === numberInput)
    console.log(this.nav)
  },
  methods: {
    handleChangeNumber(e) {
       console.log(e); // eslint-disable-line
      this.initNumber+=e.num;
      if (e.increase) {
        alert('增加了！')
        console.log(this.initNumber); // eslint-disable-line
      } else {
        alert('减少了！')
        console.log(this.initNumber); // eslint-disable-line
      }
    }
  }
}
</script>