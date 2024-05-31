
const Inputfirstname =  document.getElementById("firstname");
const InputLastname =  document.getElementById("lastname");
const InputEmail = document.getElementById("email");
const message = document.getElementById("msg");


const contactForm = document.getElementById("contact-form");

if (contactForm){
  contactForm.addEventListener('submit', function(event) {
    Inputfirstname.value = sanitizeHtml(Inputfirstname.value);
    InputLastname.value = sanitizeHtml(InputLastname.value);
    InputEmail.value = sanitizeHtml(InputEmail.value);
    message.value = sanitizeHtml(message.value);

    if (!contactForm.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    } 
    contactForm.classList.add('was-validated');
  }, false)
}

function sanitizeHtml(text){
  // Create a temporary HTML div element  
  const tempHtml = document.createElement('div');
  // Affect the text on it
  tempHtml.textContent = text;
  // use innerHtml to get the content of tempHtml 
  // it protects from dangerous code
  return tempHtml.innerHTML;
}
