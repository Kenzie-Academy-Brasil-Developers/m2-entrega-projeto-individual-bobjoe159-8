import { Login } from './login.js'

const modalLogin = document.querySelector('.modalLogin')
const modalRegister = document.querySelector('.modalRegister')

class Modal {
  static showLoginModal() {
    const loginEmail = document.querySelector('.loginEmail')

    loginEmail.addEventListener('click', () => {
      modalLogin.classList.toggle('hidden')
    })
    Login.userLogin()
    Modal.closeLoginModal()
  }

  static closeLoginModal() {
    const modalCloseBtn = document.querySelector('.modalCloseBtn')
    modalCloseBtn.addEventListener('click', () => {
      modalLogin.classList.add('hidden')
    })
  }

  static showRegisterModal() {
    const loginRegister = document.querySelector('.loginRegister')

    loginRegister.addEventListener('click', () => {
      modalRegister.classList.toggle('hidden')
    })
    Login.userRegister()
    Modal.closeRegisterModal()
  }

  static closeRegisterModal() {
    const modalCloseBtnRegister = document.querySelector(
      '.modalCloseBtnRegister'
    )
    modalCloseBtnRegister.addEventListener('click', () => {
      modalRegister.classList.add('hidden')
    })
  }
}

Modal.showLoginModal()
Modal.showRegisterModal()
