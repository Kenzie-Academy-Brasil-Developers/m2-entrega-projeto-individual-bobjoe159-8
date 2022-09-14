export class Redirect {
  static redirectDepartment() {
    const departmentButton = document.querySelector('.departmentButton')

    departmentButton.addEventListener('click', () => {
      window.location.replace('src/pages/departments.html')
    })
  }

  static redirectEmployers() {
    const employersButton = document.querySelector('.employersButton')

    employersButton.addEventListener('click', () => {
      window.location.replace('src/pages/employers.html')
    })
  }

  static redirectDepartmentMobal() {
    const departmentButton = document.querySelector('.departmentButtonMobal')

    departmentButton.addEventListener('click', () => {
      window.location.replace('src/pages/departments.html')
    })
  }

  static redirectEmployersMobal() {
    const employersButton = document.querySelector('.employersButtonMobal')

    employersButton.addEventListener('click', () => {
      window.location.replace('src/pages/employers.html')
    })
  }
}

Redirect.redirectDepartment()
Redirect.redirectEmployers()
