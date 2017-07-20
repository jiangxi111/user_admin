<template>
	<div>
		
		<el-row class="bgsel">
		   <el-checkbox class="headersel"  v-model="checkAll" @change="handleCheckAllChange">用户管理</el-checkbox>
		  	<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
		  	<el-col :sm="6" v-for="city in cities" :key="city">
		    	<el-checkbox  :label="city" :key="city">{{city}}</el-checkbox>
		    </el-col>
		  	</el-checkbox-group>
		</el-row>
		<el-row class="bgsel">
		   <el-checkbox class="headersel"  v-model="checkAll" @change="handleCheckAllChange">用户管理</el-checkbox>
		  	<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
		  	<el-col :sm="6" v-for="city in cities" :key="city">
		    	<el-checkbox  :label="city" :key="city">{{city}}</el-checkbox>
		    </el-col>
		  	</el-checkbox-group>
		</el-row>
		<el-row class="bgsel">
		   <el-checkbox class="headersel"  v-model="checkAll" @change="handleCheckAllChange">用户管理</el-checkbox>
		  	<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
		  	<el-col :sm="6" v-for="city in cities" :key="city">
		    	<el-checkbox  :label="city" :key="city">{{city}}</el-checkbox>
		    </el-col>
		  	</el-checkbox-group>
		</el-row>
		<el-row class="bgsel">
		   <el-checkbox class="headersel"  v-model="checkAll" @change="handleCheckAllChange">用户管理</el-checkbox>
		  	<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
		  	<el-col :sm="6" v-for="city in cities" :key="city">
		    	<el-checkbox  :label="city" :key="city">{{city}}</el-checkbox>
		    </el-col>
		  	</el-checkbox-group>
		</el-row>
		<el-row :gutter="20">
		  <el-col :span="2" :offset="10"><el-button >重置</el-button></el-col>
		  <el-col :span="8" :offset="1">
    		<el-button  type="primary">保存</el-button>
    	  </el-col>
		</el-row>
	</div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳11','上海2', '北京3', '广州4', '深圳5','上海6', '北京7', '广州8', '深圳9'];
  export default {
    data() {
      return {
        checkAll: true,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(event) {
        this.checkedCities = event.target.checked ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
    }
  };
</script>
<style scoped>
	.headersel{
		margin-bottom: 20px;
	}
	.bgsel{
		background: #EFF2F7;
		padding: 20px 20px 10px;
		margin:0px 0px 30px 0px;
	}
</style>