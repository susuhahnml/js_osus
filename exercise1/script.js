/***
Calculates the age of Emma in the given year, given the age
of Susana when she had her.
Params:
  - yearParam: The year to calculate
  - ageParam: Susanas age when she had her
Returns:
  Emmas age in yearParam. Returns -1 if the values are invalid.
***/
function getAgeContent(yearParam, ageParam){
  /*
  Según yo hice esto para que de entrada cheque si
  los campos están vacíos o son inválidos
  */

  if ( isNaN(yearParam) || isNaN(ageParam) ){
    return -3;
  }

  const susBY = 1993;
  const momAge = yearParam - susBY;
  const emmaAge = momAge - ageParam;
  if (emmaAge < 1){
    return -1;
  } else if (emmaAge>100) {
    return -2
  } else {
    return emmaAge;
  }
}

function showAge(){
  console.log("Global variables:")
  console.log("ageInput",ageInput)
  console.log("yearInput",yearInput)

  let year = parseInt(yearInput.value)
  let age = parseInt(ageInput.value)
  let ageEmma =  getAgeContent(year, age)
  if(ageEmma == -1){
    result.innerHTML = "Emma is still just a dream.";
  } else if (ageEmma == -2){
    result.innerHTML = "Apparently Emma is inmortal";
  } else if (ageEmma == -3){
    result.innerHTML = "Empty or invalid inputs";
  } else {
    result.innerHTML = "Emma is " +ageEmma+ " years old.";
  }
}


// Test your function by running the following lines.
// Note: You must run the lines of the function getAgeContent first.
//Result should be 27
console.log(getAgeContent(2050, 30))

//Result should be -1
console.log(getAgeContent(2000, 30))

console.log(parseInt('29832983sdjlakdj'))
