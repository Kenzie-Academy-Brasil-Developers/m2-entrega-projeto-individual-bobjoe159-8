import { Login } from './login.js'

const modalLogin = document.querySelector('.modalLogin')
const modalRegister = document.querySelector('.modalRegister')

class Modal {
  static showLoginModal() {
    const loginEmail = document.querySelector('.loginEmail')
    const modalLoginContent = document.querySelector('.modalLoginContent')

    loginEmail.addEventListener('click', () => {
      modalLogin.classList.toggle('hidden')
      modalLoginContent.classList.add('animate__animated', 'animate__fadeIn')
      modalLoginContent.style.setProperty('--animate-duration', '0.5s')
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
    const modalRegisterContent = document.querySelector('.modalRegisterContent')
    loginRegister.addEventListener('click', () => {
      modalRegister.classList.toggle('hidden')
      modalRegisterContent.classList.add('animate__animated', 'animate__fadeIn')
      modalRegisterContent.style.setProperty('--animate-duration', '0.5s')
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
