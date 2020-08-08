const emailjs = require('emailjs-com')


const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('suraj_ojha', 'template_changed', 'contact-form', 'user_EG4VqNgwLQYFWhLe81dxx')
     .then(res => alert('Your message has been sent . I will be in contact with you soon. Thank you!'))
     .catch(err => alert('Oops! Something went wront. Try again!'))
}


document.getElementById('submitButton').onclick = submitForm