import { Requests } from './requests.js'
import { Toast } from './toast.js'

class Dashboard {
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
  }

  static logoutDashboard() {
    const headerExit = document.querySelector('.headerExit')

    headerExit.addEventListener('click', event => {
      event.preventDefault()
      console.log('teste')
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('../../index.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static logoutDashboardMobal() {
    const headerExit = document.querySelector('.burgerLogout')

    headerExit.addEventListener('click', event => {
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('../../index.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static async getUserInfos() {
    const conectedUser = await Requests.conectedUser()
    const infosUser = document.querySelector('.infosUser')

    const myUsername = document.createElement('p')
    const myEmail = document.createElement('p')
    const kindOfWork = document.createElement('p')
    const professionalLevel = document.createElement('p')
    infosUser.append(myUsername, myEmail, kindOfWork, professionalLevel)

    myUsername.innerHTML = `Usuário: ${conectedUser.username}`
    myEmail.innerHTML = `Email: ${conectedUser.email}`
    kindOfWork.innerHTML = `Tipo: ${conectedUser.kind_of_work}`
    professionalLevel.innerHTML = `Experiência: ${conectedUser.professional_level}`
  }

  static async listCoworkers() {
    const conectedUser = await Requests.conectedUser()
    const coworkersDepartments = await Requests.conectedCoworkersDepartments()
    const coWorkers = document.querySelector('.coWorkers')

    coworkersDepartments.forEach(coworker => {
      coworker.users.forEach(users => {
        const workersP = document.createElement('p')
        workersP.innerHTML = users.username
        coWorkers.append(workersP)
      })
    })
  }

  static async editUserInfos() {
    const userName = document.querySelector('.userName')
    const userMail = document.querySelector('.userMail')
    const userPassword = document.querySelector('.userPassword')
    const submitEditButton = document.querySelector('.submitEditButton')

    submitEditButton.addEventListener('click', async event => {
      const data = {
        username: userName.value,
        email: userMail.value,
        password: userPassword.value
      }
      await Requests.editUserInfos(data)
    })
  }
}

Dashboard.openBurguerMenu()
Dashboard.getUserInfos()
Dashboard.logoutDashboard()
Dashboard.logoutDashboardMobal()
Dashboard.listCoworkers()
Dashboard.editUserInfos()
