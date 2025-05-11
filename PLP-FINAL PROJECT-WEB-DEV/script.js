if (contactForm && contactFormMessage) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nameInput = this.querySelector('#name');
        const emailInput = this.querySelector('#email');
        const messageInput = this.querySelector('#message');
        if (nameInput.value && emailInput.value && messageInput.value) {
            contactFormMessage.textContent = 'Your message has been sent. Thank you!';
            contactFormMessage.classList.add('success');
            this.reset();
        } else {
            contactFormMessage.textContent = 'Please fill in all required fields.';
            contactFormMessage.classList.add('error');
        }
    });
}
