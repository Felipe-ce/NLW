// procurar o botão
const addHorario = document.querySelector('#add-time')


// quando clicar no botal
addHorario.addEventListener('click', cloneField)

// executar uma ação
function cloneField() {
  const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

  // limpar os campos
  const fields = newFieldsContainer.querySelectorAll('input')
  fields.forEach((field) => {
    field.value = "";
  });
  // duplicar campos
  document.querySelector('#schedule-items').appendChild(newFieldsContainer)
  // colcoar na pagina
}

// const fielsd = newFieldsContainer.querySelectorAll('input')
// fielsd.forEach(function (field) {
//   field.value = "";
// });