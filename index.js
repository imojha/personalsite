const emailjs = require('emailjs-com')


const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'my_template', 'contact-form', 'user_DsTNcSttwpijHS0eq0aVx')
     .then(res => alert('Your message has been sent . I will be in contact with you soon. Thank you!'))
     .catch(err => alert('Oops! Something went wront. Try again!'))
}
// emailjs.sendForm()


document.querySelector('.submitButton').addEventListener('click', submitForm)