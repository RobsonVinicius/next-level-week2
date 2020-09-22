// Procurar o botao 
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {  
  // Duplicar os campos. Que campos?
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

  // Pegar os campos para limpar a informação. Que campos? 
  const fields = newFieldContainer.querySelectorAll('input')

  // Para cada campo, limpar
  fields.forEach(function(field) {
    // Pegar o field do momento e limpa
    field.value = ""
  })

  // Colocar na página. Onde?
  document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
