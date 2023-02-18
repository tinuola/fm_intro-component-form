let submitBtn = document.getElementById('submit-btn')

let inputArray = document.getElementsByTagName('input')

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validateInput = (e) => {

  e.preventDefault()

  for(let input of inputArray){
    // Get input name
    let inputName = input.name
    // Set input object
    let inputElem = document.getElementById(inputName)
    // Set input error msg object
    let errorMsg = document.getElementById(`error-${inputName}`)
    // Set 2nd email error obj
    let emailMsg = document.getElementById('error-email2')

    // Validate email field if it has a value
    if(inputName === 'email' && inputElem.value.length > 0){
      let validateEmail = inputElem.value.match(emailRegex)

      if(!validateEmail){
        inputElem.classList.add('invalid-input')
        emailMsg.style.display = 'block';
        errorMsg.style.display = 'none';
      } else {
        inputElem.classList.remove('invalid-input')
        emailMsg.style.display = 'none';
      }
      // Validate all empty fields
    } else if (input.value.length === 0){ 
      inputElem.classList.add('invalid-input')
      errorMsg.style.display = 'block';
 
    } else {
      inputElem.classList.remove('invalid-input')
      errorMsg.style.display = 'none';
    }

  }
}

submitBtn.addEventListener('click', validateInput)