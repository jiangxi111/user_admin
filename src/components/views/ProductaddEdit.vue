<template>
	<div>
		<el-row >
		  <el-col :span="14" :offset="4">
		  	<el-form :label-position="labelPosition" label-width="80px" :model="formdata">
				  <el-form-item label="名称">
				    <el-input v-model="formdata.name"></el-input>
				  </el-form-item>
				  <el-form-item label="活动区域">
				  	<el-row >
				  	  <el-col :span="13" >
					    <el-input v-model="formdata.region"></el-input>
					    </el-col>
				      <el-col :span="3">ss</el-col>
				    </el-row>
				  </el-form-item>
				  <el-form-item label="活动形式">
				    <el-input v-model="formdata.type"></el-input>
				  </el-form-item>
				</el-form>
		  </el-col>
		</el-row>
				
	</div>
</template>

<script>
	export default{
		data(){
			return {
				formdata:{

				}
			}
		},
		computed:{
			isEdit(){
				return this.$route.meta.isEdit;
			}
		},
		mounted(){
			if(this.isEdit){
			}
		}
	}
</script>