<template>
	<div class="add">
		<el-row :gutter="20">
			<el-form label-position="right" label-width="80px" :model="formLabelAlign">
			 <el-col :sm="12" :offset="6">
				  <el-form-item label="姓名：">
				    <el-input v-model="formLabelAlign.name"></el-input>
				  </el-form-item>
			  </el-col>
			  <el-col :sm="12" :offset="6">
				  <el-form-item label="手机号：">
				    <el-input v-model="formLabelAlign.region"></el-input>
				  </el-form-item>
			  </el-col>
			</el-form>
		</el-row>
		<el-row :gutter="20">
		  <el-col :span="2" :offset="10"> <router-link to="/stafflist"><el-button >取消</el-button></router-link></el-col>
		  <el-col :span="8" :offset="1">
    		<el-button  type="primary">保存</el-button>
    	  </el-col>
		</el-row>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        formLabelAlign: {
          name: '',
          region: ''
        }
      };
    }
  }
</script>
<style scoped>
	.add{
		margin-top: 10%;
	}
</style>