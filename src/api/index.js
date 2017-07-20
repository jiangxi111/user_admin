import axios from 'axios'

class API {
  constructor () {
    // this.headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': localStorage.getItem(storage.token)
    // }
  }
  _request (method, url, data = null) {
    if (!url) {
      console.error('API function call requires url argument')
      return
    }
    // const url = config.serverURI + url
    //const url = "src/utils/user.json";
    return axios({
      method, url, data
    })
  }

  setToken (token) {
    //localStorage.setItem(storage.token, token)
  }
  removeToken () {
    //localStorage.setItem(storage.token, null)
  }
  get (url, data = null) {
    return this._request('get', url, data)
  }

  post (url, data = null) {
    return this._request('post', url, data)
  }

  put (url, data = null) {
    return this._request('put', url, data)
  }

  delete (url, data = null) {
    return this._request('delete', url, data)
  }

}
export default new API()