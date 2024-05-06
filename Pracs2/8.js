function checkAge(age) {

    if (age < 18) {
  
       const message = "Sorry, you're too young to get your driving license.";
  
    } 
  
  else {
  
      const message = "Yay! You're are eligible!";
  
         }
  
    return message;
  
  }
  
  console.log(checkAge(21));