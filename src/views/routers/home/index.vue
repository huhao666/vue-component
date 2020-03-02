<template>
 <div>
   ---HOME页面信息---<br/>
  <router-link :to="{name: '3Rhomezx'}" class="rlink" :class="{active:selected == 1}" @click.native="tabck(1)">最新HOME</router-link>
  <router-link :to="{name: '3Rhomegj'}" class="rlink" :class="{active:selected == 2}" @click.native="tabck(2)">国际HOME</router-link>
  <router-link :to="{name: '3Rhomegn'}" class="rlink" :class="{active:selected == 3}" @click.native="tabck(3)">国内HOME</router-link> 
  <!-- 子路由(三层) -->
   <router-view />
 </div>
</template>
<script>
 export default {
  data(){
    return {
      selected: 1
    }
  },
  methods: {
   tabck(index) {
    this.selected = index; //设置选中tab
   }
  }
 }
</script>
<style>
</style>