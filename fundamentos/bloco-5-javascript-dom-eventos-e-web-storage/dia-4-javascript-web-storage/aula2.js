//atribuindo variáveis aos elementos que serão utilizados
const button = document.getElementById('add-button');
const input = document.getElementById('phrases-input');
const list = document.getElementById('phrases-list');



function insertPhraseInDOM() {
  //recupera lista no local storage
  const phrasesList = JSON.parse(localStorage.getItem('phrases'));
  //contador para qtd de itens
  const listLength = phrasesList.length - 1;
  //
  const phraseText = phrasesList[listLength];
  const phrase = document.createElement('li');
  phrase.innerText = phraseText;
  list.appendChild(phrase);
}

function addPhraseToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('phrases'));
  const phraseText = input.value;
  oldList.push(phraseText);
  localStorage.setItem('phrases', JSON.stringify(oldList));
  insertPhraseInDOM();
}

function initialRenderization() {
  //verifica se há uma lista no local storage, se não houver, cria uma
  if (localStorage.getItem('phrases') === null) {
    localStorage.setItem('phrases', JSON.stringify([]));
  } else {
    //caso contrário recupera a lista e
    const phrasesList = JSON.parse(localStorage.getItem('phrases'));
    const listLength = phrasesList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      //inicia uma rotina para preencher a pagina com a lista existente 
      const listElement = document.createElement('li');
      listElement.innerText = phrasesList[index];
      list.appendChild(listElement);
    }
  }
}

button.addEventListener('click', addPhraseToLocalStorage);

window.onload = function() {
  initialRenderization();
};