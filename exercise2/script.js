
const oscar = {
  name: "Oscar",
  firstLastName: "Rubio",
  secondLastName: "Mendoza",
  abilities: ["hokey","drawing","painting","plaing guitar","football","snowbording","playing video games"],
  height: 1.75,
  weight: 65,
  eyeColor: "brown",
  sex: "male"
}
const susana = {
  name: "Susana",
  firstLastName: "Hahn",
  secondLastName: "Martin Lunas",
  abilities: ["hula"],
  height: 1.68,
  weight: 48,
  eyeColor: "green",
  sex: "female"
}


/***
Function for click
***/
function showBaby(){
  //EXTRA: Get all attributes from inputs
  //EXTRA: Construct mom to pass in function instead of susana
  //EXTRA: Construct dad to pass in function instead of oscar
  baby = makeABaby(susana, oscar)
  //EXTRA: Show each attribute in diferent lables currently just showing the name
  result.innerHTML = baby.name;
}

/**
Returns a random number between the provided values. Including the values.
**/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***
Creates a new person given the two parents. With the following rules:
- name: Must be chosen randomly from a
        list of names.
- firstLastName: The dads firstLastName
- secondLastName: The moms firstLastName
- abilities: 4 abilities randomly chosen from the moms and dads abilities.
              At least one from each
- height: The middle point between the moms and dads hight. Use function getMiddle.
- weight: The middle point between the moms and dads weight. Use function getMiddle.
- eyeColor: Will take the eyecColor from the parent with the oposit sex
- sex: A random sex. Find how it using the function getRandomInt
Params:
  - mom: The dictionary representing the mom
  - dad: The dictionary representing the dad
Returns:
  A new dictionary representig a child.
***/
function makeABaby(mom, dad){
  // FILL
  //This function will use the one defined bellow currently returning a default
  return {name:"Emma"}
}

/***
Gets a random name from a list of names.
***/
function getRandomName(){
  // FILL
  //Define a list of names
  //Get a random number to get a position in the lost
  //Return name in the list
}

/***
Gets the middle value between x and y
***/
function getMiddle(x,y){
  // FILL

}

/***
Selects 4 elements from arrays a and b
Returns:
  An array with size 4 with a mix of elements from a and b
***/
function selectFromArrays(a,b){
  // FILL

}


console.log(makeABaby(susana, oscar))
