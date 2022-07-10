<template>
    <div class="navbar">
      <div class="left" @click="$router.push('/home')">
        <img src="@/assets/logo.png" alt="" width="24" height="24">
        T-ui
      </div>
      <div class="right">
        <span class="check" @click="toSourceCode">查看源码</span>
      </div>
    </div>
</template>

<script>
import { method } from 'lodash'

    export default {
        name:'nav-bar',
        data(){
            return {
                
          }
        },
        methods:{
          toSourceCode(){
            window.open('https://github.com/Txianshen/T-ui')
          }
        }
      }
</script>

<style lang="scss" scoped>
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
    cursor: pointer;
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
</style>