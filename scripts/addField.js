// Procurar o botao 
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
  console.log("cheguei aqui")
  // Duplicar os campos. Que campos?
  const fields = document.querySelector('.schedule-item').cloneNode(true)
  // Colocar na página. Onde?
  document.querySelector('#schedule-items').appendChild(fields)

}
