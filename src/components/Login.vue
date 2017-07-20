<template>
	<div id="login" class="login">
		<div class="login_bg">
			<ul>
				<li style="display: block;"><img src="../assets/image/bg_1.jpg" alt="" /></li>
				<li><img src="../assets/image/bg_2.jpg" alt="" /></li>
				<li><img src="../assets/image/bg_3.jpg" alt="" /></li>
				<li><img src="../assets/image/bg_4.jpg" alt="" /></li>
			</ul>
		</div>
		<div class="login_cer">
			<div class="login_cer-c">
				<!-- BEGIN LOGO -->
				<div class="logo">
					<img src="../assets/image/logo-big.png" alt="" />
				</div>
				<!-- END LOGO -->
				<!-- BEGIN LOGIN -->
				<div class="content">
					<router-view></router-view>
				</div>
				<!-- END LOGIN -->
				<!-- BEGIN COPYRIGHT -->
				<div class="copyright">
				</div>
				<!-- END COPYRIGHT -->
				
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'login',
  data(){
  	return {
  	k:'/login'
  }},
  methods:{
  	loginBg(){
  		this.bgGun($(".login_bg li"));
  	},
  	bgGun(v){
  		let a=1,c=v.length;
  		setInterval((v)=>{
  			let b=a%c;
  			$(".login_bg li").eq(b).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
  			a++;
  		},3000);
  	},
  	login(){
  		$.cookies("usernames",'4654654');
  		this.k=this.$route.query.redirect;
        console.log(this.k);
  		this.$router.push({path: '/main'});
  		
  	}
  	
  },
  mounted(){
    this.loginBg();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	/***
Login page
***/
/* logo page */
.congzhi{
	margin-left: 100px;
}
.denglu{
	margin-left: 50px;
}
.login,.login_cer{
  width: 100%;
  height: 100%;
  margin: 0;
}

.login .logo {
  width: 247px;
  margin: 0 auto;   
  padding-top:60px;
  padding: 15px;
  text-align: center;
  display: block;
}  




.login .content h3 {
  color: #eee;
}
.login .content h4  {
  color: #eee;
}

.login .content p,
.login .content label {
  color: #fff;
}

.login .content .login-form,
.login .content .forget-form {
    padding: 0px;
    margin: 0px;
}

.login .content .m-wrap {
  width: 249px;
  background-color: #fff;
}


.login .content .control-group {
  margin-bottom: 20px !important;
  overflow: hidden;
}

.login .content .input-icon{  
  margin: 0px !important;
  height: 34px;
  overflow: hidden;
  -webkit-appearance: none !important;
  position: relative;
}


.btn.blue:hover, .btn.blue:focus, .btn.blue:active, .btn.blue.active, .btn.blue[disabled], .btn.blue.disabled {
    background-color: #0362fd !important;
    color: #fff !important;
}
.btn.blue {
    color: white;
    text-shadow: none;
    background-color: #4d90fe;
}
.m-icon-swapright {
    background-position: -27px -10px;
    width: 14px;
    height: 14px;
}

.login .content .input-icon .m-wrap {  
  margin: 0px !important;
  width: 260px;
  height: 34px;
  line-height: 23px;
  padding-left: 10px;
  -webkit-appearance: none !important;
  color: #333;
  background: #fff;
  border:none;
}

.login .content .form-title {
  font-weight: 300;
  margin-bottom: 25px;
  margin-left: 20px;
}

.login .content .form-actions {
  background-color: transparent;
  clear: both;
  border: 0px;
  border-bottom1: 1px solid #999;
  padding: 0px 0 25px 30px;
}

.login .content .forget-form .form-actions {
  border: 0;
  margin-bottom: 0;
  padding-bottom: 20px;
}  

.login .content .register-form .form-actions {
  border: 0;
  margin-bottom: 0;
  padding-bottom: 0px;
}

.login .content .form-actions .checkbox {
  margin-top: 8px;
  padding-left: 55px;
  display: inline-block;
}

.login .content .form-actions .btn {
  margin-top: 1px;
}

.login .content .forget-password {
  margin-top: 25px;
}

.login .content .create-account {
  border-top: 1px dotted #eee;
  padding-top: 10px;
  margin-top: 15px;
}

.login .content .create-account a {
  display: inline-block;
  margin-top: 5px;
}

.login .copyright {
  text-align: center;
  width: 270px;
  margin: 0 auto; 
  padding: 10px 10px 0 10px;
  color: #eee;
  font-size: 12px;
}


	.login .content {
	  background:rgba(0,0,0,0.4);
	  width: 400px;
	  margin: 0 auto; 
	  margin-bottom: 0px;
	  padding: 30px;  
	  padding-top: 40px;  
	  padding-bottom: 45px;  
	}

	
	.control-label{
		float: left;
		display: block;
		width: 80px;
		font-weight: normal;
		height: 30px;
		line-height: 30px;
    margin-left: 20px;
	}
	.controls{
		width: 250px;
		float: left;
	}
	.login_bg{
		position: fixed;
		background-color: #666 !important;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.login_cer{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 4;
	}
	.login_cer-c{
		padding: 90px;
    margin-top: 100px;
	}
	.login_bg ul li img{
		width: 100%;
		height: 100%;
	}
	.login_bg ul li{
		width: 100%;
		height: 100%;
		display: none;
		position: absolute;
		z-index: 2;
		top: 0;
		left: 0;
	}
</style>
