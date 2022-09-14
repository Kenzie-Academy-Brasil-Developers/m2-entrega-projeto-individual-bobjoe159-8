import { Toast } from './toast.js'

export class Logout {
  static handleLogoutDesktop() {
    const headerExit = document.querySelector('.headerExit')

    headerExit.addEventListener('click', event => {
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('./src/pages/login.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static handleLogout() {
    const headerExit = document.querySelector('.burgerLogout')

    headerExit.addEventListener('click', event => {
      console.log('teste')
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('./src/pages/login.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static handleLogoutDesktopPages() {
    const headerExit = document.querySelector('.headerExit')

    headerExit.addEventListener('click', event => {
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('../pages/login.html')
      }, 2000)
      localStorage.clear()
    })
  }

  static handleLogoutPages() {
    const headerExit = document.querySelector('.burgerLogout')

    headerExit.addEventListener('click', event => {
      console.log('teste')
      event.preventDefault()
      Toast.create('Você saiu da conta.', 'red')
      setTimeout(() => {
        window.location.replace('../pages/login.html')
      }, 2000)
      localStorage.clear()
    })
  }
}

Logout.handleLogoutDesktop()
