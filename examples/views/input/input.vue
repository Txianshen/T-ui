<template>
 <div class="input-index">
  <p>input输入框</p> 
  <section>
    <p>基本用法</p>
    <div>
      <t-input placeholder="请输入"></t-input>
    </div>
  </section>
  <section>
    <p>输入模式</p>
    <div>
      <t-input type="text" placeholder="请输入"></t-input>
      <br/>
      <t-input type="textarea" placeholder="请输入"></t-input>
    </div>
  </section>
  <section>
    <p>可清空</p>
    <div>
      <t-input type="text" v-model="value" clearable></t-input>
    </div>
  </section>
    <section>
    <p>禁用状态</p>
    <div>
        <t-input type="text" disabled></t-input>
    </div>
  </section>
      <section>
    <p>自定义前缀</p>
    <div>
        <t-input type="text">
          <template slot="prepend">
            <span>https://</span>
          </template>
        </t-input>
    </div>
  </section>
 </div>
</template>
<script>
export default {
 components: {},
 props: {},
 data() {
    return {
      value:''
    };
 },
 watch: {},
 computed: {},
 methods: {},
 created() {},
 mounted() {}
};
</script>
<style lang="scss" scoped>
.input-index {
  p{
    font-weight: 600;
  }
}
</style>