const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

//Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

//Help with 'map'
carMakers.map((car: string): string => {
  return 'This is a ' + car.toUpperCase;
});


//flexible types
const stringOrDatesArray = ['2030-10-10', new Date()];

const importantDates: (Date|string)[]  = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());