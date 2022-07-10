<template>
 <div class="container">
		<siderbar/>
		<div class="right">
			<router-view/>
		</div>
 </div>
</template>
<script>
import siderbar from '@/components/siderbar/siderbar.vue';
export default {
 components: {
	siderbar
 },
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
.container {
	width: 100%;
	height: calc(100% - 45px);
	display: flex;
	.right {
		height: 100%;
		flex: 1;
		text-align: left;
		padding-left: calc(20%);
		padding-right: calc(20%);
	}
}
</style>