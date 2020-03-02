<template>
 <div>
   <router-link :to="{name: '2rhome'}" class="rlink" :class="{active:selected == 1}" @click.native="tabck(1)">首页</router-link>
   <router-link :to="{name: '2rnews'}" class="rlink" :class="{active:selected == 2}" @click.native="tabck(2)">新闻</router-link>
   
    <!-- 二级子路由页面 -->
    <keep-alive>
      <router-view />
    </keep-alive>
    
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
  tabck(index){
    this.selected = index; //设置tab选中项
  }
 }
}
</script>
<style>
 .rlink {
  padding: 5px;
  margin: 5px;
  margin-bottom: 10px;
  display: inline-block;
  text-decoration: none;
  color: blue;
 }
 
 .active {
  color: red;
  text-decoration: underline;
 }
</style>