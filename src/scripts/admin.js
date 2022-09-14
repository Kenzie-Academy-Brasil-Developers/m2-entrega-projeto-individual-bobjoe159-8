import { Requests } from './requests.js'
import { Logout } from './logout.js'
import { Redirect } from './redirects.js'

const companiesResp = await Requests.listCompanies()

class Admin {
  static async renderAllSectors() {
    const listAllSectors = await Requests.listAllSectors()

    listAllSectors.forEach(sector => {
      const selectSectors = document.querySelector('.selectSectors')
      const optionSector = document.createElement('option')
      selectSectors.append(optionSector)
      optionSector.innerHTML = sector.description
      optionSector.selected = true
    })
  }

  static async renderAllSectorsRegister() {
    const listAllSectors = await Requests.listAllSectors()

    listAllSectors.forEach(sector => {
      const selectSectors = document.querySelector('.selectCompanies')
      const optionSector = document.createElement('option')
      selectSectors.append(optionSector)
      optionSector.innerHTML = sector.description
      optionSector.value = sector.uuid
      optionSector.selected = true
    })
  }

  static openCompanieModal() {
    const registerCompanie = document.querySelector('.registerCompanie')
    const modalCadastrar = document.querySelector('.modalCadastrar')

    registerCompanie.addEventListener('click', () => {
      modalCadastrar.classList.toggle('hidden')
    })
    Admin.registerCompanie()
    Admin.closeCompanieModal()
  }

  static closeCompanieModal() {
    const modalCloseBtn = document.querySelector('.modalCloseBtn')
    const modalCadastrar = document.querySelector('.modalCadastrar')

    modalCloseBtn.addEventListener('click', () => {
      modalCadastrar.classList.add('hidden')
    })
  }

  static registerCompanie() {
    const registerButton = document.querySelector('.registerButton')
    const companieName = document.querySelector('.companieName')
    const companieTime = document.querySelector('.companieTime')
    const companieDescription = document.querySelector('.companieDescription')
    const selectCompanies = document.querySelector('.selectCompanies')

    registerButton.addEventListener('click', async event => {
      event.preventDefault()
      const data = {
        name: companieName.value,
        opening_hours: companieTime.value,
        description: companieDescription.value,
        sector_uuid: selectCompanies.value
      }
      await Requests.registerCompanie(data)
    })
  }

  static showCompaniesList() {
    const selectCompanies = document.querySelector('.companiesList')
    companiesResp.forEach(async list => {
      const optionList = document.createElement('option')
      optionList.innerHTML = list.name
      selectCompanies.append(optionList)
      optionList.selected = true
      optionList.value = list.uuid
    })
  }

  static searchedCompany() {
    const searchCompanie = document.querySelector('.searchCompanie')
    const resultCompanie = document.querySelector('.resultCompanie')
    const departmentList = document.querySelector('.departmentList')

    searchCompanie.addEventListener('click', async event => {
      event.preventDefault()
      departmentList.innerHTML = ''
      resultCompanie.classList.remove('hidden')
      const selectCompanies = document.querySelector('.companiesList')
      const getAllDepartments = await Requests.getAllDepartments(
        selectCompanies.value
      )
      Admin.renderDepartments(getAllDepartments)
    })
  }

  static renderDepartments(array) {
    const departmentList = document.querySelector('.departmentList')

    array.forEach(department => {
      console.log(department)
      const li = document.createElement('li')
      const title = document.createElement('h4')
      const departmentName = document.createElement('p')
      const departmentDescription = document.createElement('p')
      li.append(title, departmentName, departmentDescription)
      departmentList.append(li)
      title.innerHTML = `${department.companies.name}`
      departmentName.innerHTML = `Nome: ${department.name}`
      departmentDescription.innerHTML = `Descrição: ${department.description}`
    })
  }

  static openBurguerMenu() {
    let menuOpen = false
    const burguerMenu = document.querySelector('.burguerMenu')
    const openMenu = document.querySelector('.openMenu')

    burguerMenu.addEventListener('click', () => {
      openMenu.classList.toggle('hidden')
      if (menuOpen == false) {
        menuOpen = true
        burguerMenu.src = './src/assets/cross-icon.svg'
      } else if (menuOpen == true) {
        burguerMenu.src = './src/assets/menu-icon.svg'
        menuOpen = false
      }
    })
    Logout.handleLogout()
    Redirect.redirectDepartmentMobal()
    Redirect.redirectEmployersMobal()
  }
}

Admin.openCompanieModal()
Admin.renderAllSectors()
Admin.renderAllSectorsRegister()
Admin.showCompaniesList()
Admin.searchedCompany()
Admin.openBurguerMenu()
