import api from '@/api'
import urls from '@/urls'
class login {
	//登陆
	userlogin (data) {
	    // const url = config.serverURI + uri;
	   return api.post (urls.login, data )
	  }
	//登出
	userlogout () {
	    api.removeToken()
	}
}

export default new login()