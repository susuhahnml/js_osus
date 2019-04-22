/***
Calculates the age of Emma in the given year, given the age
of Susana when she had her.
Params:
  - year: The year to calculate
  - momAge: Susanas age when she had her
Returns:
  Emmas age in the given year. Returns -1 if the values are invalid.
***/

function getAgeContent(year, momAge){

  /*
  Según yo hice esto para que de entrada cheque si
  los campos están vacíos o son inválidos

  if ( isNaN(year) || isNaN(age) ){
    return -3;
  }
  */
  
  const susBY = 1993;
  var momAge = year - susBY;
  var emmaAge = momAge - age;

  if (emmaAge < 1){
    return -1;
  } else if (emmaAge>100) {
    return -2
  } else if (isNaN(emmaAge)) { //no sirve si el primer caracter del input es un número. Ej."23ajdhshj" :(
    return -3;
  } else {
    return emmaAge;
  }
}

function showAge(){
  year = parseInt(document.getElementById("year").value)
  age = parseInt(document.getElementById("age").value)
  console.log("You complete me")
  ageEmma =  getAgeContent(year, age)
  if(ageEmma == -1){
    document.getElementById("result").innerHTML = "Emma is still just a dream.";
  } else if (ageEmma == -2){
    document.getElementById("result").innerHTML = "Apparently Emma is inmortal";
  } else if (ageEmma == -3){
    document.getElementById("result").innerHTML = "Empty or invalid inputs";
  } else {
    document.getElementById("result").innerHTML = "Emma is " +ageEmma+ " years old.";
  }
}


// Test your function by running the following lines.
// Note: You must run the lines of the function getAgeContent first.
//Result should be 27
console.log(getAgeContent(2050, 30))

//Result should be -1
console.log(getAgeContent(2000, 30))
