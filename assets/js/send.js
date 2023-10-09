// === EMAIL JS ===
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_58x9p8o', 'template_uu8obdl', '#contact-form', 'E9PCwW1nFAFvm7Mzq')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅'

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 1000);

            contactForm.reset()

        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener("submit", sendEmail)