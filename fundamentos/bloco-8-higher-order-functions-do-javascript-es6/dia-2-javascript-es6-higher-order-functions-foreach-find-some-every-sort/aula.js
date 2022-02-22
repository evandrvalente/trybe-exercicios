// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
//   console.log('Cada elemento do array:', element);
//   console.log('Index, posição do elemento:', indexOfTheArray);
//   console.log('Array percorrido:', theEntireArray);
// });
//forEach
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(showEmailList)

//find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  numbers.find((number) => (number % 3 === 0 && number % 5 === 0));
}

console.log(findDivisibleBy3And5())