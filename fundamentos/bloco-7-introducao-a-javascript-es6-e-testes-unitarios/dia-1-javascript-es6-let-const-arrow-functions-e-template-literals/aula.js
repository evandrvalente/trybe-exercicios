// function userInfo() {
//     let userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//     console.log(userEmail);
//   }
//   console.log(userEmail);
//   userInfo();

//   if (true) {
//     // inicio do escopo do if
//     var userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// const userInfo = {
//     name: 'Cláudio',
//     id: '5489-2',
//     email: 'claudio@email.com',
//   };
  
//   userInfo.name = 'João';
  
//   console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// const myName = 'Isabella';
// console.log(`Welcome ${myName}!`);

// const printName = function () {
//     const myName = 'Lucas';
//     return myName;
//   };
  
//   console.log(printName());

// const testm = (num1,num2) => {
//       return num1*num2
//   };
// console.log (testm(4,6));

//   const printName =  () => {
//     const myName = 'Lucas';
//     return myName;
//   };
  
//   console.log(printName());

const testm = (num1,num2) => num1*num2;
console.log (testm(4,6));


