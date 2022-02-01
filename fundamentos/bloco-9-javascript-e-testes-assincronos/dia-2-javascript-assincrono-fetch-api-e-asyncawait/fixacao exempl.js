
const fetch = require('node-fetch');

// const starWarsQuote = () => {
// 	const url = 'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote';
// 	  fetch(url)
// 	    .then(response => response.json())
// 	    .then(data => document.getElementById('quote-container').innerText = data.starWarsQuote)
//             .catch(error => console.log(error))
// }

async function getQuote(url) {
  const response = await fetch(`http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote`);
  const randomQuote = await response.json();
  return randomQuote;
 }
 console.log(getQuote())
 