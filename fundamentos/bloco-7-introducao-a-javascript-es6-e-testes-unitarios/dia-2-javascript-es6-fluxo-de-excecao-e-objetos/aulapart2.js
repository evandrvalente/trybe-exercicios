const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

const player = {
    name: 'Ev',
    game: 'Fifa21',
    team: 'Real Madrid'
};

player.shirtnumber = '7';

const footballPosition= {
    position: 'leftwing',
    style: 'attacking'
};

Object.assign(player, footballPosition);
console.log(player);