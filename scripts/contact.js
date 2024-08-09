/*jshint esversion: 6 */
// For JS Validator

// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

const submitButton = document.getElementById('submit-button');
const pageContent = document.getElementById('contact-page');

function changeContent() {
    pageContent.innerHTML = '';

    const newMessage = document.createElement('p');
    newMessage.textContent = 'Thank you for your message';
    newMessage.style.fontSize = '24px';

    pageContent.appendChild(newMessage);
}

submitButton.addEventListener("click", changeContent);