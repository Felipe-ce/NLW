// procurar o botão
const addHorario = document.querySelector('#add-time')


// quando clicar no botal
addHorario.addEventListener('click', cloneField)

// executar uma ação
function cloneField() {
  const fields = document.querySelector('.schedule-item').cloneNode(true)
  // duplicar campos
  document.querySelector('#schedule-items').appendChild(fields)
  // colcoar na pagina

  
}