
<template>
 <div>
    最新HOME信息：<br/>
     <ul >
       <li v-for="(result, index) in list" :key="index">{{result.name}}{{index}}</li>
     </ul>
 </div>
</template>
<script>
 export default {
  data(){
   return {
     list: [
      {name:'最新HOME'}
     ]
   }
  }
 }
</script>