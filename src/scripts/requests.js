import { instance } from './axios.js'
import { Toast } from './toast.js'

const token = localStorage.getItem('@myBusiness:token')

export class Requests {
  static async login(data) {
    const loginData = await instance
      .post('/auth/login', data)
      .then(resp => {
        localStorage.setItem('@myBusiness:token', resp.data.token)
        setTimeout(() => {
          window.location.replace('./src/pages/index.html')
        }, 2000)
        Toast.create('Login realizado com sucesso', 'green')
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return loginData
  }

  static async register(data) {
    const registerUser = await instance
      .post('/auth/register/user', data)
      .then(resp => {
        Toast.create('Usuário registrado com sucesso', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return registerUser
  }
}
