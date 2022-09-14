import { Requests } from './requests.js'

export class Login {
  static renderLogin() {
    const token = localStorage.getItem('@myBusiness:token')

    if (token) {
      window.location.replace('../../index.html')
    }
  }
  static userLogin() {
    const modalLoginEmail = document.querySelector('.modalLoginEmail')
    const modalLoginPassword = document.querySelector('.modalLoginPassword')
    const modalButton = document.querySelector('.modalButton')

    modalButton.addEventListener('click', async event => {
      event.preventDefault()
      const data = {
        email: modalLoginEmail.value,
        password: modalLoginPassword.value
      }
      await Requests.login(data)
    })
  }

  static userRegister() {
    const modalRegisterName = document.querySelector('.modalRegisterName')
    const modalRegisterMail = document.querySelector('.modalRegisterMail')
    const modalRegisterPassword = document.querySelector(
      '.modalRegisterPassword'
    )
    const modalRegisterExperience = document.querySelector(
      '.modalRegisterExperience'
    )
    const modalRegisterButton = document.querySelector('.modalRegisterButton')

    modalRegisterButton.addEventListener('click', async event => {
      event.preventDefault()
      const data = {
        password: modalRegisterPassword.value,
        email: modalRegisterMail.value,
        professional_level: modalRegisterExperience.value,
        username: modalRegisterName.value
      }
      await Requests.register(data)
    })
  }
}

//Login.renderLogin()
