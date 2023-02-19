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
    // let invalidEmailMsg = document.querySelector('.invalid-email')


    if(inputName === 'email' && inputElem.value.length > 0) {
      // console.log('email')
      let validateEmail = inputElem.value.match(emailRegex)
      if(!validateEmail) {
        console.log('WRONG!')
        invalidEmailMsg.classList.add('invalid-email-msg')
        inputElem.classList.add('invalid-input')
        emptyInputMsg.style.display = 'none'
      } else {
        inputElem.classList.remove('invalid-input')
        invalidEmailMsg.classList.remove('invalid-email-msg')
      }

    } else if(inputName === 'email' && inputElem.value.length === 0) {
      // console.log('empty')
      inputElem.classList.add('invalid-input')
      emptyInputMsg.style.display = 'block'
      invalidEmailMsg.classList.remove('invalid-email-msg')
    } else if(inputElem.value.length === 0){
      // console.log('empty')
      inputElem.classList.add('invalid-input')
      // invalidEmailMsg.classList.remove('invalid-email-msg')
      emptyInputMsg.style.display = 'block'
    } else {
      // console.log('valid')
      inputElem.classList.remove('invalid-input')
      emptyInputMsg.style.display = 'none'
    }


  }
}

submitBtn.addEventListener('click', validateInput)