import { Requests } from './requests.js'
import { Toast } from './toast.js'

class Employers {
  static renderEmployers() {
    const token = localStorage.getItem('@myBusiness:token')

    if (!token) {
      window.location.replace('../../index.html')
    }
  }
  static openBurgerMenu() {
    let menuOpen = false
    const burguerMenu = document.querySelector('.burguerMenu')
    const openMenu = document.querySelector('.openMenu')

    burguerMenu.addEventListener('click', () => {
      openMenu.classList.toggle('hidden')
      if (menuOpen == false) {
        menuOpen = true
        burguerMenu.src = '../assets/cross-icon.svg'
      } else if (menuOpen == true) {
        burguerMenu.src = '../assets/menu-icon.svg'
        menuOpen = false
      }
    })
    Employers.handleLogoutEmployers()
  }

  static handleLogoutEmployersDesktop() {
    const headerExit = document.querySelector('.headerExitEmployer')

    headerExit.addEventListener('click', event => {
      console.log('teste')
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('../../index.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static handleLogoutEmployers() {
    const headerExit = document.querySelector('.burgerLogoutEmployer')

    headerExit.addEventListener('click', event => {
      console.log('teste')
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('../../index.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static async searchEmployers() {
    const listEmployers = await Requests.listAllEmployers()
    const searchEmployerButton = document.querySelector('.searchEmployerButton')
    const searchEmployer = document.querySelector('.searchEmployer')
    const employerInfo = document.querySelector('.employerInfo')

    listEmployers.forEach(employer => {
      const employerOption = document.createElement('option')
      searchEmployer.append(employerOption)
      employerOption.innerHTML = employer.username
      searchEmployer.value = employer.username
    })
    searchEmployerButton.addEventListener('click', event => {
      event.preventDefault()
      employerInfo.innerHTML = ''
      const usernameH3 = document.createElement('h3')
      const usernameP = document.createElement('p')
      const kindOfWork = document.createElement('p')
      const professionalLevel = document.createElement('p')
      employerInfo.append(usernameH3, usernameP, kindOfWork, professionalLevel)
      listEmployers.forEach(employer => {
        console.log(employer)
        if (searchEmployer.value == employer.username) {
          usernameH3.innerHTML = `Nome: ${employer.username}`
          usernameP.innerHTML = `Email: ${employer.email}`
          kindOfWork.innerHTML = `Trabalho: ${employer.kind_of_work}`
          professionalLevel.innerHTML = `Experiência: ${employer.professional_level}`
        }
      })
    })
  }

  static async hireEmployer() {
    const listEmployers = await Requests.listAllEmployers()
    const listDepartments = await Requests.listallDepartments()
    const hireEmployersList = document.querySelector('.hireEmployersList')
    const hireDepartmentsList = document.querySelector('.hireDepartmentsList')

    listEmployers.forEach(employer => {
      const hireEmployerOption = document.createElement('option')
      hireEmployersList.append(hireEmployerOption)
      hireEmployerOption.innerHTML = employer.username
      hireEmployerOption.value = employer.uuid
    })

    listDepartments.forEach(department => {
      const hireDepartmentsOption = document.createElement('option')
      hireDepartmentsList.append(hireDepartmentsOption)
      hireDepartmentsOption.value = department.uuid
      hireDepartmentsOption.innerHTML = department.name
    })
  }

  static hireEmployerSubmit() {
    const hireEmployerButton = document.querySelector('.hireEmployerButton')
    const hireEmployersList = document.querySelector('.hireEmployersList')
    const hireDepartmentsList = document.querySelector('.hireDepartmentsList')

    hireEmployerButton.addEventListener('click', async event => {
      event.preventDefault()
      const data = {
        user_uuid: hireEmployersList.value,
        department_uuid: hireDepartmentsList.value
      }
      await Requests.hireEmployer(data)
    })
  }

  static async fireEmployer() {
    const listEmployers = await Requests.listAllEmployers()
    const fireEmployersList = document.querySelector('.fireEmployersList')

    listEmployers.forEach(employer => {
      const employerOption = document.createElement('option')
      fireEmployersList.append(employerOption)
      employerOption.innerHTML = employer.username
      employerOption.value = employer.uuid
    })
  }

  static fireEmployerSubmit() {
    const fireEmployerButton = document.querySelector('.fireEmployerButton')
    const fireEmployersList = document.querySelector('.fireEmployersList')

    fireEmployerButton.addEventListener('click', async event => {
      event.preventDefault()
      console.log(fireEmployersList.value)
      await Requests.fireEmployer(fireEmployersList.value)
    })
  }

  static async editEmployer() {
    const listEmployers = await Requests.listAllEmployers()
    const editType = document.querySelector('.editType')
    const editProfessional = document.querySelector('.editProfessional')
    const editEmployerButton = document.querySelector('.editEmployerButton')
    const editEmployerList = document.querySelector('.editEmployerList')

    listEmployers.forEach(employer => {
      const employerOption = document.createElement('option')
      editEmployerList.append(employerOption)
      employerOption.innerHTML = employer.username
      employerOption.value = employer.uuid
    })

    editEmployerButton.addEventListener('click', async event => {
      event.preventDefault()
      const data = {
        kind_of_work: editType.value,
        professional_level: editProfessional.value
      }
      await Requests.editEmployer(data, editEmployerList.value)
    })
  }

  static async outOfWork() {
    const outOfWorkEmployers = await Requests.outOfWork()
    const outOfWork = document.querySelector('.outOfWork')

    outOfWorkEmployers.forEach(employer => {
      console.log(employer)
      const outOfWorkOption = document.createElement('option')
      outOfWork.append(outOfWorkOption)
      outOfWorkOption.innerHTML = employer.username
    })
  }

  static redirectButtons() {
    const companiesButton = document.querySelector('.companiesButton')
    const departmentsButton = document.querySelector('.departmentsButton')

    companiesButton.addEventListener('click', () => {
      window.location.replace('./companies.html')
    })

    departmentsButton.addEventListener('click', () => {
      window.location.replace('./departments.html')
    })
  }
}

Employers.handleLogoutEmployersDesktop()
Employers.openBurgerMenu()
Employers.searchEmployers()
Employers.hireEmployer()
Employers.hireEmployerSubmit()
Employers.fireEmployer()
Employers.fireEmployerSubmit()
Employers.editEmployer()
Employers.outOfWork()
Employers.redirectButtons()
Employers.renderEmployers()
