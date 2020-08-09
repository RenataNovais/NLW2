// procurar o botão 'novo horário'
const newTime = document.querySelector('#add-time');
// quando clicar no botão
newTime.addEventListener('click', cloneField);

// executar uma ação
function cloneField() {
  // duplicar os campos. Quais campos? 
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
  // limpar os campos. Quais campos?
  const fields = newFieldContainer.querySelectorAll('input');
  
  // para cada campo limpar
  fields.forEach(field => field.value = '');

  // inserir na página
  document.getElementById('schedule-items').appendChild(newFieldContainer);
}
