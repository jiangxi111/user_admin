<template>
	<div>
		333333333
		<div @click="set">设置sessionStorage</div>
		<div @click="get">得到sessionStorage</div>
		<div @click="remove">删除sessionStorage</div>
		{{data1}}
	</div>
</template>
<script>
	export default{
		data(){
			return{
				data:"默认",
				data1:[],
				user:{
					age:11,
					sex:"男"
				},
				list:[
					{
						name:"小明",
						age:12
					},
					{
						name:"小强",
						age:18
					}
				]
			}
		},
		methods:{
			set(){
				this.Commoncode.sessionSet("info",this.list)
			},
			get(){
				this.data1=this.Commoncode.sessionGet("info");
				if(this.data1==null) return;
				this.data1.forEach((item,index)=>{
				})
				
			},
			remove(){
				this.Commoncode.sessionRemove("info");
				//this.get();
			}
		},
		mounted(){
			this.get();
		}
	}
</script>