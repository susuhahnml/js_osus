let holliday = {}

holliday.destination = "Hollbox";
holliday.year = 2017;
holliday.month = 11;

console.log(holliday)

let allHollidays = []

allHollidays.push(holliday)

console.log(allHollidays)

//Different way to construct a dictionary
//To separate the elements inside you must use , not ;
let hollidaySL = {
  destination : "San Luis",
  year : 2017,
  month : 12
}


allHollidays.push(hollidaySL)

console.log(allHollidays)
console.log("Number of hollidays:", allHollidays.length)
console.log("First Holliday destination", allHollidays[0].destination)
