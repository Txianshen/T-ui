<template>
 <div class="button-index">
  <p>Button按钮</p> 
  <section>
    <p>常用操作按钮</p>
    <div>
      <t-button type="primary">主要按钮</t-button>
      <t-button type="success">成功按钮</t-button>
      <t-button type="info">信息按钮</t-button>
      <t-button type="warning">警告按钮</t-button>
      <t-button type="danger">危险按钮</t-button>
    </div>
  </section>
  <section>
    <p>禁用按钮</p>
    <div>
      <t-button type="primary" disabled>主要按钮</t-button>
      <t-button type="success" disabled>成功按钮</t-button>
      <t-button type="info" disabled>信息按钮</t-button>
      <t-button type="warning" disabled>警告按钮</t-button>
      <t-button type="danger" disabled>危险按钮</t-button>
    </div>
  </section>
  <section>
    <p>圆角按钮</p>
    <div>
      <t-button type="primary" round>主要按钮</t-button>
      <t-button type="success" round>成功按钮</t-button>
      <t-button type="info" round>信息按钮</t-button>
      <t-button type="warning" round>警告按钮</t-button>
      <t-button type="danger" round>危险按钮</t-button>
    </div>
  </section>
    <section>
    <p>按钮大小</p>
    <div>
      <t-button type="primary" size="mini">主要按钮</t-button>
      <t-button type="primary" size="small">主要按钮</t-button>
      <t-button type="primary" size="medium">主要按钮</t-button>
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
.button-index {
  p{
    font-weight: 600;
  }
}
</style>