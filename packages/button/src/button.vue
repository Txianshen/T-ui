<!-- button -->
<template>
<!-- 使用htmlbutton元素 -->
    <button class="t-button" :disabled="disabled" :class="styleClass"
      @click="clickHandel">
    <slot/>
    </button>
</template>

<script>
export default {
  name:'t-button',
  props:{
    type:{
      type:String,
      default:'primary',
      validator:(value)=>{
        return ['primary','success','warning','danger'].includes(value)
      }
    },
    disabled:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false
    },
    size:{
      type:String,
      default:'medium',
      validator:(value)=>{
        return ['mini','small','medium'].includes(value)
      }
    }
  },
  computed:{
    styleClass(){
      return {
        [`t-button--${this.type}`]:this.type,
        [`t-button--${this.size}`]:this.size,
        'is-disabled':this.disabled,
        'is-round':this.round
      }
    }
  },
  data(){
    return {

    }
  },
  methods:{
    clickHandel(){
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss"
</style>