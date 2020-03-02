<template>
  <div>
    ---新闻页面信息---<br/>
    <router-link :to="{name: '3Rnewszx'}" class="rlink" :class="{active:selected == 1}" @click.native="tabck(1)">最新HOME</router-link>
    <router-link :to="{name: '3Rnewsgj'}" class="rlink" :class="{active:selected == 2}" @click.native="tabck(2)">国际HOME</router-link>
    <router-link :to="{name: '3Rnewsgn'}" class="rlink" :class="{active:selected == 3}" @click.native="tabck(3)">国内HOME</router-link> 
    <!-- 子路由 -->
    <router-view/>
  </div>
</template>
<script>
 export default {
  data () {
   return {
     selected: 1
   }
  },
  methods: {
   tabck(index){
    this.selected = index; //切换tab，设置选中项
    console.log(index)
   }
  } 
 }
</script>