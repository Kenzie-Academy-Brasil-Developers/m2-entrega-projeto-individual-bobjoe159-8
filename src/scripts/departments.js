import { Logout } from './logout.js'
import { Requests } from './requests.js'

class Departments {
  static openBurguerMenu() {
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
    Logout.handleLogoutPages()
    Departments.redirectPagesMobal()
    Departments.redirectEmployersMobal()
  }

  static createDepartment() {
    const departmentName = document.querySelector('.departmentName')
    const departmentDescription = document.querySelector(
      '.departmentDescription'
    )
    const companieChosen = document.querySelector('.companieChosen')
    const companieSubmit = document.querySelector('.companieSubmit')

    companiesResp.forEach(async list => {
      const optionList = document.createElement('option')
      optionList.innerHTML = list.name
      companieChosen.append(optionList)
      optionList.selected = true
      optionList.value = list.uuid
    })

    companieSubmit.addEventListener('click', async event => {
      event.preventDefault()
      const data = {
        name: departmentName.value,
        description: departmentDescription.value,
        company_uuid: companieChosen.value
      }
      await Requests.createDepartment(data)
    })
  }

  static editDepartments() {
    const companieChosen = document.querySelector('.editDepartmentsOption')
    const submitEdit = document.querySelector('.submitEdit')
    allDepartments.forEach(department => {
      const departmentOption = document.createElement('option')
      companieChosen.append(departmentOption)
      departmentOption.innerHTML = department.name
      departmentOption.value = department.uuid
      companieChosen.selected = true
    })

    submitEdit.addEventListener('click', async event => {
      event.preventDefault()
      const editDescription = document.querySelector('.editDescription')
      const data = {
        description: editDescription.value
      }
      await Requests.editDepartment(data, companieChosen.value)
    })
  }

  static deleteDepartments() {
    const companieChosen = document.querySelector('.deleteDepartmentOption')
    const submitEdit = document.querySelector('.submitDelete')
    allDepartments.forEach(department => {
      const departmentOption = document.createElement('option')
      companieChosen.append(departmentOption)
      departmentOption.innerHTML = department.name
      departmentOption.value = department.uuid
      companieChosen.selected = true
    })

    submitEdit.addEventListener('click', async event => {
      event.preventDefault()
      await Requests.deleteDepartment(companieChosen.value)
    })
  }

  static redirectPages() {
    const companiesButton = document.querySelector('.companiesButton')

    companiesButton.addEventListener('click', event => {
      event.preventDefault()
      console.log('teste')
      window.location.replace('../pages/companies.html')
    })
  }

  static redirectPagesMobal() {
    const companiesButton = document.querySelector('.companiesButtonMobal')

    companiesButton.addEventListener('click', event => {
      event.preventDefault()
      window.location.replace('../pages/companies.html')
    })
  }

  static redirectEmployers() {
    const employersButton = document.querySelector('.employersButton')

    employersButton.addEventListener('click', event => {
      event.preventDefault()
      window.location.replace('./employers.html')
    })
  }

  static redirectEmployersMobal() {
    const employersButton = document.querySelector('.employersButtonMobal')

    employersButton.addEventListener('click', event => {
      event.preventDefault()
      window.location.replace('./employers.html')
    })
  }
}

const companiesResp = await Requests.listCompanies()
const allDepartments = await Requests.listallDepartments()

Departments.openBurguerMenu()
Departments.createDepartment()
Departments.editDepartments()
Departments.deleteDepartments()
Departments.redirectPages()
Departments.redirectEmployers()
Departments.renderDepartment()
