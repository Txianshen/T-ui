<template>
    <div class="input-wrapper">
        <input type="text"  class="t-input" v-bind="$attrs" :value="inputValue" @input="inputHandle">
    </div>
</template>

<script>
    export default {
        name:'t-input',
        data(){
            return {
                // inputValue:''
            }
        },
        props:{
            value:{
                type:String,
                default:''
            }
        },
        computed:{
            inputValue(){
                return this.value
            }
        },
        methods:{
            inputHandle(event){
                this.$emit('input',event.target.value)
            }
        }
    }
</script>


<style lang="scss" scoped>
@import './styel.scss'
</style>