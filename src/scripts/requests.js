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
          window.location.replace('/index.html')
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

  static async listCompanies() {
    const listCompanies = await instance
      .get('/companies/')
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return listCompanies
  }

  static async listCompaniesBySector(sector) {
    const listCompanies = await instance
      .get(`/companies/${sector}`)
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return listCompanies
  }

  static async listAllSectors() {
    const listAllSectors = await instance
      .get(`/sectors`)
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return listAllSectors
  }

  static async registerCompanie(data) {
    const registerCompanie = await instance
      .post(`/companies`, data)
      .then(resp => {
        Toast.create(resp, 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return registerCompanie
  }

  static async getAllDepartments(id) {
    const getAllDepartments = await instance
      .get(`/departments/${id}`)
      .then(resp => {
        Toast.create('Lista de departamentos encontrada.', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return getAllDepartments
  }

  static async createDepartment(data) {
    const createDepartment = await instance
      .post('/departments/', data)
      .then(resp => {
        Toast.create('Departamento criado', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return createDepartment
  }

  static async listallDepartments() {
    const listallDepartments = await instance
      .get('/departments/')
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return listallDepartments
  }

  static async editDepartment(data, id) {
    const editDepartment = await instance
      .patch(`/departments/${id}`, data)
      .then(resp => {
        Toast.create('Departmento editado com sucesso!', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return editDepartment
  }

  static async deleteDepartment(id) {
    const deleteDepartment = await instance
      .delete(`/departments/${id}`)
      .then(resp => {
        Toast.create('Departamento excluido.', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return deleteDepartment
  }

  static async listAllEmployers() {
    const listAllEmployers = await instance
      .get('/users/')
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return listAllEmployers
  }

  static async hireEmployer(data) {
    const hireEmployer = await instance
      .patch('/departments/hire/', data)
      .then(resp => {
        Toast.create('Funcionário contratado', 'green')
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return hireEmployer
  }

  static async fireEmployer(id) {
    const fireEmployer = await instance
      .patch(`/departments/dismiss/${id}`)
      .then(resp => {
        Toast.create('Funcionário demitido', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return fireEmployer
  }

  static async editEmployer(data, id) {
    const editEmployer = await instance
      .patch(`/admin/update_user/${id}`, data)
      .then(resp => {
        Toast.create('Funcionário editado com sucesso', 'green')
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return editEmployer
  }

  static async outOfWork() {
    const outOfWork = await instance
      .get('/admin/out_of_work/')
      .then(resp => {
        return resp.data
      })
      .catch(err => {
        Toast.create(err, 'red')
        console.log(err)
      })
    return outOfWork
  }
}
