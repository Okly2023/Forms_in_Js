// 1. 
 // Get references to the input field and the span element
const first_name =document.getElementById('firstname');
const display_name =document.getElementById('display-firstname');

// Add a keyup event listener to the input field
first_name.addEventListener('keyup', function () {
     // Update the content of the span with the input field's value
    display_name.textContent = first_name.value;
});


//2.
 
// Get references to the number input and the section
const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');

ageInput.addEventListener('keyup', function () {
    // Get the value of the age input and convert it to a number
    const age = ageInput.value; 
     // Check if the age is below 18
     if (age < 18){
        hardTruthSection.style.visibility = 'hidden';
     }else{
        // If 18 or above, show the section
        hardTruthSection.style.visibility = 'visible';
     }
});

//3.

// Get references to the password and confirmation input fields
const passwordInput = document.getElementById('pwd');
const confirmInput = document.getElementById('pwd-confirm');

// Add keyup event listeners to both fields
passwordInput.addEventListener('keyup', validatePassword);
confirmInput.addEventListener('keyup', validatePassword);

// Function to validate the password and provide visual hints

function validatePassword () {
    const passwordValue = passwordInput.value;
    const confirmValue= confirmInput.value;


    // Check if the password is too short (less than 6 characters)
    const isShort = passwordValue.length < 6;

     // Check if the password and its confirmation match
     const doNotMatch = passwordValue !== confirmValue;

    // Apply visual hints based on validation results
  if(isShort || doNotMatch){
        passwordInput.style.borderColor = 'red';
        confirmInput.style.borderColor = 'red';
    }else{
        passwordInput.style.borderColor = ''; // Reset to default
        confirmInput.style.borderColor = ''; // Reset to default
    }
   

}

//4.
// Get a reference to the select field for dark mode
const selectDarkmode = document.getElementById('toggle-darkmode');

// Add a change event listener to the select field
selectDarkmode.addEventListener('change', function () { 
  // Check the selected value   
const DarkmodeValue = selectDarkmode.value;
  // Apply dark mode styles if 'dark' is selected, otherwise remove them

  if( DarkmodeValue === 'dark'){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  }else{
    document.body.style.backgroundColor = '';
    document.body.style.color = '';

  }
});