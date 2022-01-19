// const getDayName = (number) => {
//     const dayNumber = number - 1;
//     const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//     return days[dayNumber];
//   };
  
//   const printDayname = (dayNumber) => {
//     console.log(getDayName(dayNumber));
//   };




  const getDayName = (number) => {
    if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
  };
  
  const printDayname = (dayNumber) => {
    try {
      console.log(getDayName(dayNumber));
    } catch {
      console.log(error);
    }
  };
  
  console.log(getDayName(4));

  console.log(getDayName(14));