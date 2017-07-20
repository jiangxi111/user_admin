<template>
	<div class="loginint">
		
<!-- BEGIN LOGIN FORM -->
		<div class="form-vertical login-form">
			<div class="control-group">
				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->
				<label class="control-label visible-ie8 visible-ie9">用户名</label>
				<div class="controls">
					<div class="input-icon left">
						<!-- <i class="icon-user"></i> -->
						<input v-model='man.username' class="m-wrap placeholder-no-fix" type="text" placeholder="请输入用户名" name="username"/>
					</div>
				</div>

			</div>
			<div class="control-group">
				<label class="control-label visible-ie8 visible-ie9">密码</label>
				<div class="controls">
					<div class="input-icon left">
						<!-- <i class="icon-lock"></i> -->
						<input v-model='man.password' class="m-wrap placeholder-no-fix" type="password" placeholder="请输入密码" name="password"/>
					</div>
				</div>
			</div>
			<p class="tishi">为了您的用户体验请使用谷歌或者ie10以上浏览器</p>
			<el-row>
			  <el-col :span="6" :offset="6"><el-button type="danger" @click="chongzhi">重置</el-button></el-col>
			  <el-col :span="9" :offset="3"> <el-button type="success" 
			   @click="loginadmin" >登录</el-button>
			   </el-col>
			</el-row>
		</div>
		<!-- END LOGIN FORM --> 
	</div>
</template>
<script>

    import login from "@/api/login.js"

	export default {
		name:"loginint",
		data(){return{
			ti:true,
			man:{
				username:'',
				password:'',
				chane:true
			},
			k:"/login"
		}},
		mounted(){
			 var _this =this;
			document.onkeydown=function(event){
				 var e = event || window.event || arguments.callee.caller.arguments[0];
					 if(e && e.keyCode==13){ // enter 键
					 	_this.loginadmin();
					 }
				}; 
		},
		methods:{
			loginadmin(){
				if(this.ti){
					this.ti=false;
					console.log($.cookie("token"));
					this.Authenticationtion();
				}else{
					this.$message.error('你的点击频率过快，请稍等');
				}
			},
			chongzhi(){
					this.man.username="";
					this.man.password="";
			},
			Authenticationtion(){
				if(!this.man.username){
					this.$message.error('用户名不得为空');
					this.ti=true;
					return;
				}
				if(!this.man.password){
					this.$message.error('密码不得为空');
					this.ti=true;
					return;
				}
			 login.userlogin({
			 	 teamid:61,
	             size:2
			 })
			 .then((res)  => {
		         this.ti=true;
		         $.cookie("token",this.man.username);
		         this.$router.push({path:"/"});
		      })
		      .catch((error) => {
		      	this.ti=true;
			    alert('网络延迟。。。');
			  });
			  
			}
		}
	}
	
</script>
<style scoped>
	.tishi{
		text-align: center;
	}
	.form-title{
		font-size: 20px;
	}
</style>	