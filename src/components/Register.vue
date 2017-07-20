<template>
<div id="register">
	<!-- BEGIN REGISTRATION FORM -->

		<div class="form-vertical register-form">

			<h3 class="">Sign Up</h3>

			<p>Enter your account details below:</p>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Username</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-user"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="Username" name="username"/>

					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Password</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-lock"></i>

						<input class="m-wrap placeholder-no-fix" type="password" id="register_password" placeholder="Password" name="password"/>

					</div>

				</div>

			</div>

			<div class="control-group">

				<label class="control-label visible-ie8 visible-ie9">Re-type Your Password</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-ok"></i>

						<input class="m-wrap placeholder-no-fix" type="password" placeholder="Re-type Your Password" name="rpassword"/>

					</div>

				</div>

			</div>

			<div class="control-group">

				<!--ie8, ie9 does not support html5 placeholder, so we just show field title for that-->

				<label class="control-label visible-ie8 visible-ie9">Email</label>

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-envelope"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="Email" name="email"/>

					</div>

				</div>

			</div>

			<div class="control-group">

				<div class="controls wenanlisy">

					<label class="checkbox">

					<input type="checkbox" name="tnc"/><div style="display: inline-block; width: 20px;"></div>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>

					</label>  

					<div id="register_tnc_error"></div>

				</div>

			</div>

			<div class="form-actions">
				<router-link to="/login/">
					<button id="register-back-btn" type="button" class="btn">
					<i class="m-icon-swapleft"></i>Back
					</button>
				</router-link>
				<button type="submit" id="register-submit-btn" class="btn blue pull-right">
				Sign Up <i class="m-icon-swapright m-icon-white"></i>
				</button>            

			</div>

		</div>

		<!-- END REGISTRATION FORM -->



</div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login .content .wenanlisy{
		width: 290px;
	}
.login .content .wenanlisy input{
	margin-left: 1px;
	}

.login .content .input-icon .m-wrap{
		width: 290px;
    	padding: 6px 6px 6px 33px !important;
	}
.login .content .form-actions{
	padding:0px 0 25px 0;
	}
</style>
