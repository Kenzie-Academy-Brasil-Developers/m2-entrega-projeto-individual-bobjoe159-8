import { Requests } from './requests.js'

const companiesResp = await Requests.listCompanies()

class Index {
  static async renderCompanies(array) {
    array.forEach(companie => {
      const companieList = document.querySelector('.cardContents')

      const companieCard = document.createElement('li')
      const companieName = document.createElement('p')
      const companieTime = document.createElement('p')
      const companieDescription = document.createElement('p')
      const companieType = document.createElement('p')

      companieCard.append(
        companieName,
        companieTime,
        companieDescription,
        companieType
      )
      companieList.append(companieCard)

      companieName.innerHTML = companie.name
      companieTime.innerHTML = `Abertura: ${companie.opening_hours}h`
      companieDescription.innerHTML = companie.description
      companieType.innerHTML = companie.sectors.description

      companieCard.classList.add('companieCard')
    })
  }
  static async renderCompaniesDesktop(array) {
    array.forEach(companie => {
      const companieList = document.querySelector('.cardContentDesktop')

      const companieCard = document.createElement('li')
      const companieName = document.createElement('p')
      const companieTime = document.createElement('p')
      const companieDescription = document.createElement('p')
      const companieType = document.createElement('p')

      companieCard.append(
        companieName,
        companieTime,
        companieDescription,
        companieType
      )
      companieList.append(companieCard)

      companieName.innerHTML = companie.name
      companieTime.innerHTML = `Abertura: ${companie.opening_hours}h`
      companieDescription.innerHTML = companie.description
      companieType.innerHTML = companie.sectors.description

      companieCard.classList.add('companieCardDesktop')
    })
  }

  static async renderCompaniesBySector() {
    const companieList = document.querySelector('.cardContentDesktop')
    const setorGeral = document.querySelector('.setorGeral')
    const setorAlimenticio = document.querySelector('.setorAlimenticio')
    const setorVarejo = document.querySelector('.setorVarejo')
    const setorTextil = document.querySelector('.setorTextil')
    const setorManufatura = document.querySelector('.setorManufatura')
    const setorAeroespacial = document.querySelector('.setorAeroespacial')
    const setorAutomotivo = document.querySelector('.setorAutomotivo')
    const setorTI = document.querySelector('.setorTi')
    const setorAtacado = document.querySelector('.setorAtacado')

    setorGeral.addEventListener('click', async () => {
      companieList.innerHTML = ''
      Index.renderCompanies(companiesResp)
      Index.renderCompaniesDesktop(companiesResp)
    })

    setorAlimenticio.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const alimenticio = await Requests.listCompaniesBySector('Alimenticio')
      Index.renderCompanies(alimenticio)
      Index.renderCompaniesDesktop(alimenticio)
    })

    setorVarejo.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const varejo = await Requests.listCompaniesBySector('Varejo')
      Index.renderCompanies(varejo)
      Index.renderCompaniesDesktop(varejo)
    })

    setorTextil.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const textil = await Requests.listCompaniesBySector('Textil')
      Index.renderCompanies(textil)
      Index.renderCompaniesDesktop(textil)
    })

    setorManufatura.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const manufatura = await Requests.listCompaniesBySector('Manufatura')
      Index.renderCompanies(manufatura)
      Index.renderCompaniesDesktop(manufatura)
    })

    setorAeroespacial.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const aeroespacial = await Requests.listCompaniesBySector('Aeroespacial')
      Index.renderCompanies(aeroespacial)
      Index.renderCompaniesDesktop(aeroespacial)
    })

    setorAutomotivo.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const automotiva = await Requests.listCompaniesBySector('Automotiva')
      Index.renderCompanies(automotiva)
      Index.renderCompaniesDesktop(automotiva)
    })

    setorTI.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const ti = await Requests.listCompaniesBySector('TI')
      Index.renderCompanies(ti)
      Index.renderCompaniesDesktop(ti)
    })

    setorAtacado.addEventListener('click', async () => {
      companieList.innerHTML = ''
      const atacado = await Requests.listCompaniesBySector('Atacado')
      Index.renderCompanies(atacado)
      Index.renderCompaniesDesktop(atacado)
    })
  }
}

Index.renderCompaniesDesktop(companiesResp)
Index.renderCompanies(companiesResp)
Index.renderCompaniesBySector()
