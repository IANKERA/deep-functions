'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 1) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas scscsc',
//   passport: 24739479284,
// };

// const checkIn = function (flight, passenger) {
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Checked');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transform = function (str, fr) {
//   console.log(`original string: ${str}`);
//   console.log(`transformed string: ${fr(str)}`);
// };

// transform('javascript is the best!', upperFirstWord);
// transform('javascript is the best!', oneWord);

const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};

const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('steven');

greet('hello')('jonas');

const agean = {
  airline: 'Agean',
  iataCode: 'GR',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.bookings.push({ flight: `${this.iataCode}`, name });
  },
};

agean.book(239, 'socrates');
console.log(agean);

const eurowings = {
  airline: 'euro',
  iataCode: 'EW',
  bookings: [],
};

const book = agean.book;

book.call(eurowings, 23, 'sara');
console.log(eurowings);

const bookEW = book.bind(eurowings);
bookEW(23, 'soco');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('giorgos');

agean.planes = 300;
agean.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', agean.buyPlane.bind(agean));

const addText = (rate, value) => value + value * rate;

const Vat = addVAT => addTax => {
  addVat;
};
