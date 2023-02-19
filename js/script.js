let submitBtn = document.getElementById('submit-btn')

let inputArray = document.getElementsByTagName('input')

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validateInput = (e) => {

  e.preventDefault()

  for(let input of inputArray){
    // Get input name attribute
    let inputName = input.name
    
    // Set object for input element
    let inputElem = document.getElementById(inputName)
    
    // Set object for empty input field error msg
    let emptyInputMsg = document.getElementById(`empty-${inputName}`)

    // Set object for invalid email field error msg
    let invalidEmailMsg = document.getElementById('invalid-email')



    if(inputName === 'email' && inputElem.value.length > 0) {

      let validateEmail = inputElem.value.match(emailRegex)
      
      if(!validateEmail) {
        invalidEmailMsg.classList.add('invalid-email-msg')
        inputElem.classList.add('invalid-input')
        emptyInputMsg.style.display = 'none'
      } else {
        invalidEmailMsg.classList.remove('invalid-email-msg')
        inputElem.classList.remove('invalid-input')
      }

    } else if(inputName === 'email' && inputElem.value.length === 0) {
      invalidEmailMsg.classList.remove('invalid-email-msg')
      inputElem.classList.add('invalid-input')
      emptyInputMsg.style.display = 'block'

    } else if(inputElem.value.length === 0){
      inputElem.classList.add('invalid-input')
      emptyInputMsg.style.display = 'block'

    } else {
      inputElem.classList.remove('invalid-input')
      emptyInputMsg.style.display = 'none'
    }
  }

}

submitBtn.addEventListener('click', validateInput)