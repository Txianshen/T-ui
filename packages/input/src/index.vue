<template>
    <div class="input-wrapper">
        <template v-if="type === 'textarea'">
            <textarea
                class="t-textarea"
                 v-bind="$attrs" :value="inputValue" @input="inputHandle"
            >
            </textarea>
        </template>
        <template v-else>
        <div class="inline-container" :class="className">
            <div class="t-input-prepend" v-if="$slots.prepend">
                <slot name="prepend"></slot>
            </div>
            <div class="t-input-outer">
                <input type="text"  class="t-input" :class="styleClass" v-bind="$attrs" :value="inputValue"
                    @input="inputHandle"/>
                <span class="t-input-clear" v-if="closeIcon"  @click="clearInput">
                    <!-- <r-icon name="gou"/> -->
                    <svg t="1657541298248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1297" width="20" height="20"><path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z" p-id="1298"></path><path d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z" p-id="1299"></path></svg>
                </span>
            </div>
        </div>

            
        </template>
    </div>
</template>

<script>
    export default {
        name:'t-input',
        data(){
            return {
                // inputValue:''
                // closeIcon:false
            }
        },
        props:{
            value:{
                type:String,
                default:''
            },
            type:{
                type:String,
                default:'text',
                validator:(value)=>{
                    return ['text','textarea'].includes(value)
                }
            },
            size:{
                type:String,
                default:'default',
                validator:(value)=>{
                    return ['default','small','medium'].includes(value)
                }
            },
            clearable:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            inputValue:{
                get(){
                    return this.value
                },
                set(value){
                    console.log('clear',value)
                    this.$emit('input',value)
                }
            },
            styleClass(){
                return {
                    [`t-input--${this.size}`]:this.size,
                    'is-disabled':this.disabled
                }
            },
            closeIcon(){
                return this.clearable && this.inputValue !== ''
            },
            className(){
                return {
                    "has-pretend":this.$slots.prepend
                }
            }
        },
        methods:{
            inputHandle(event){
                // this.$emit('input',event.target.value)
                this.inputValue = event.target.value
            },
            clearInput(){
                // this.$emit('input','')
                this.inputValue =''
                // this.closeIcon = false
            },
            showIcon(){
                this.closeIcon = this.clearable
            }
        }
    }
</script>


<style lang="scss" scoped>
@import './styel.scss'
</style>