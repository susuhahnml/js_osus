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
  // Fill with your code <3
}

function showAge(){
  year = parseInt(document.getElementById("year").value)
  age = parseInt(document.getElementById("age").value)
  console.log("You complete me")
  ageEmma =  getAgeContent(year, age)
  if(ageEmma == -1){
    document.getElementById("result").innerHTML = "Emma is still just a dream.";
  }else{
    document.getElementById("result").innerHTML = "Emma is " +ageEmma+ " years old.";
  }
}


// Test your function by running the following lines.
// Note: You must run the lines of the function getAgeContent first.
//Result should be 27
console.log(getAgeContent(2050, 30))

//Result should be -1
console.log(getAgeContent(2000, 30))
