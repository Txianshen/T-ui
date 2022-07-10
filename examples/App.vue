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
    <div class="navbar">
      <div class="left">
        <img src="@/assets/logo.png" alt="" width="24" height="24">
        T-ui
      </div>
      <div class="right">
        <span class="check">查看源码</span>
      </div>
    </div>

    <div class="container">
      <img src="@/assets/logo.png" alt="" width="300" height="300">
      <p> T-ui</p>
      <p style="color: #6a8bad;font-size: 20px;">为你量身而定的T-ui</p>
      <button class="check-btn">快速入手</button>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
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

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid hsl(213, 5%, 61%);
  padding: 10px 20px;
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #2c3e50;
    font-size: 20px;
    img {
      margin-right: 10px;
    }
  }
  .right {
    .check{
      cursor: pointer;
      &:hover{
        color: #2c3e50;
        text-decoration: underline;
      }
    }
  }
}

.container {
  display: flex;
  width: 1240px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 20px;
    font-size: 40px;
    font-weight: 600;
  } 
  .check-btn{
    display: inline-block;
    font-size: 1.2rem;
    color: #fff;
    background-color: #da5a47;
    padding: 0.8rem 1.6rem;
    border-radius: 4px;
    transition: background-color .1s ease;
    box-sizing: border-box;
    // border-bottom: 1px solid #d5442f;
    background-color: #66b1ff;
        background-color: #409eff!important;
    padding: 0.6rem 1.8rem!important;
    border-radius: 10px!important;
    border-color: #66b1ff;
    cursor: pointer;
    // border-bottom: initial!important;
  }
}
</style>
