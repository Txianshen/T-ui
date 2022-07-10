<template>
    <div class="container">
      <img src="@/assets/logo.png" alt="" width="300" height="300">
      <p> T-ui</p>
      <p style="color: #6a8bad;font-size: 20px;">为你量身而定的T-ui</p>
      <button class="check-btn" @click="toComponents">快速入手</button>
    </div>
</template>

<script>
    export default {
        name:'home',
        data(){
            return {

            }
        },
        methods:{
          toComponents(){
            this.$router.push('/components')
          }
        }
    }
</script>

<style lang="scss" scoped>
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