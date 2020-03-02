<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ul id="nav">
      <li v-for="(item, index) in nav" :key="index">
        <router-link :to="item.url">{{ item.title }}</router-link>
      </li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      nav: this.$data.list
    }
  },
  data() {
    return {
      nav: [
        { url: '/routers', title: '三层路由' },
        { url: '/classify', title: '组件的分类' },
        { url: '/Action', title: '组件之间通信' }
      ],
      list: ['provide 的数据']
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

ul {
  padding-left: 0px;
}

ul li {
  line-height: 2;
  list-style: none;
}

div {
  line-height: 2;
}
</style>
