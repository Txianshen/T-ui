<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <t-button type="primary" @click="changeInput" >改变inputtext</t-button>
    <t-button type="primary" >primary</t-button>
    <t-button type="primary" round @click="clickHandle">primary</t-button> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <t-icon name="success"></t-icon>
    <t-input placeholder="请输入" v-model="inputext"/>
    <span>{{inputext}}</span> -->

    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar/navbar.vue'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
    navbar
  },
  data(){
    return {
      inputext:''
    }
  },
  methods:{
    clickHandle(){
      console.log('clickHandel')
    },
    changeInput(){
      this.inputext = 'dd'
    },
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}




</style>
