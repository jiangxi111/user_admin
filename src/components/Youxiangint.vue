<template>
	<div>
		<!-- BEGIN FORGOT PASSWORD FORM -->

		<div class="form-vertical forget-form"> 

			<h3 class="">Forget Password ?</h3>

			<p>Enter your e-mail address below to reset your password.</p>

			<div class="control-group">

				<div class="controls">

					<div class="input-icon left">

						<i class="icon-envelope"></i>

						<input class="m-wrap placeholder-no-fix" type="text" placeholder="Email" name="email" />

					</div>

				</div>

			</div>

			<div class="form-actions">
				<router-link to="/login/">
					<button type="button" id="back-btn" class="btn">
						<i class="m-icon-swapleft"></i> Back
					</button>
				</router-link>


				<button type="submit" class="btn blue pull-right">

				Submit <i class="m-icon-swapright m-icon-white"></i>

				</button>            

			</div>

		</div>

		<!-- END FORGOT PASSWORD FORM -->
	</div>
</template>
<script></script>
<style scoped>
	.login .content .input-icon .m-wrap{
		width: 290px;
    	padding: 6px 6px 6px 33px !important;
	}
	.login .content .form-actions {
	  padding: 0px 0 25px 0;
	} 
</style>	