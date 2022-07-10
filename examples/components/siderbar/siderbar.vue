<template>
	<div class="sider-bar">
			<div v-for="(item ,index) in menuList" :key="index">
				<div class="menu-title">{{item.title}}</div>
				<div v-for="(submenu ,subIndex ) in item.children" :key="subIndex">
					<div class="sub-title" :class="submenu.acitve?'active':'disactive'" @click="clickSubmenu(submenu)">{{submenu.title}}</div>
				</div>
			</div>
	</div>
</template>

<script>
	export default {
		name:'siderbar',
		data(){
			return{
				menuList:[{
					title:'组件',
					children:[
						{
							title:"Button",
							path:"",
							acitve:false
						},
						{
							title:"Icon",
							path:"",
							acitve:false
						},
						{
							title:'Input',
							path:"",
							acitve:false
						}
					]
				}]
			}
		},
		methods:{
			clickSubmenu(submenu){
				this.menuList.forEach(menu=>{
					if (menu.children) {
						menu.children.forEach(sub=>{
							if (sub.title == submenu.title) {
								sub.acitve = true
							} else {
								sub.acitve = false
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.sider-bar {
	width: 250px;
	height: 100%;
	border-right:1px solid #eaecef;
	.menu-title {
		text-align: left;
		font-weight: 600;
		padding: 10px 10px;
		font-size: 20px;
	}
	.sub-title{
		text-align: center;
		cursor: pointer;
		padding: 10px 16px;
    line-height: 1.5;
    font-size: .9rem;
		border-radius: 8px;
		margin-left: 10px;
		margin-right: 10px;
		&:hover{
			color: #409eff;
			// background-color: rgba(64, 158, 255,.1);
		}
	}
	.active {
		font-weight: 500;
		color: #409eff;
		background-color: rgba(64, 158, 255,.1);
	}
	.disactive {
		color: black;
		background-color: transparent;
		font-weight: 400;
	}
}
</style>