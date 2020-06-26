function ageCalculator(date){
   var dateOfBirth = new Date (date);
   var dateNow = 2020; 
   var result = null  ;
   dateOfBirth = dateOfBirth.getFullYear();
   result = dateNow - dateOfBirth;
   return "L'âge est de: " + result  + "ans";
}
console.log(ageCalculator('Mars 1990, 22 18:01:00 '));