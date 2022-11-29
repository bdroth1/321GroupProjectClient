let sendButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');
let form = document.getElementById('contactForm');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
    let name = document.getElementById('contact-name');
    let email = document.getElementById('contact-email');
    let message = document.getElementById('contact-message');

    name.value = '';
    email.value = '';
    message.value = '';
})

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('contact-name');
    let email = document.getElementById('contact-email');
    let message = document.getElementById('contact-message');

    name = name.value;
    localStorage.setItem('contact-name', name);
    
    email = email.value;
    localStorage.setItem('contact-email', email);

    message = message.value;
    localStorage.setItem('contact-message', message);
})
