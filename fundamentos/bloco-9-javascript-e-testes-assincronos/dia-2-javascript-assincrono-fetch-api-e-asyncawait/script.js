const url = 'https://api.coincap.io/v2/assets';

async function getCryptos() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    return data
  } catch(error) {
   console.log(`Algo deu errado :( \n${error}`);
  }
}


//colocar o objeto retornado em cryptoJSON

const cryptoJSON = getCryptos();

const contentList = document.getElementById('crypto-list');

const createList = () => {
  cryptoJSON.map((cryptoInfo) => {
  //expect = "Nome da moeda (símbolo da moeda): valor em dólares"
  const newLi = document.createElement('li');
  newLi.innerText = `${cryptoInfo.name}(${cryptoInfo.synbol}): ${cryptoInfo.priceUSD}`;
  contentList.appendChild(newLi);
});
}
