<!-- button -->
<template>
    <svg
      class="icon"
      aria-hidden="true"
     >
        <use :xlink:href="IconName"></use>
    </svg>
</template>

<script>
import '../../assets/js/iconfont.js'
export default {
  name:'t-icon',
  props:{
    name:{
        type:String,
        default:''
    }
  },
  computed:{
    IconName(){
        return `#icon-${this.name}`
    }
  },
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>


<style lang="scss" scoped>
@import "./style.scss"
</style>