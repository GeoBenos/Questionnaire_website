document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('userName');
    const StoredUserName = localStorage.getItem('userName');
    const nameInput = document.getElementById('nameInput');
    const nextButton = document.getElementById('nextButton');
    const messageContainer = document.createElement('div');
  
    messageContainer.classList.add('message-container');
  
    if (StoredUserName !== null && StoredUserName !== '') {
      userNameElement.textContent = StoredUserName;
      nextButton.disabled = false; // Enable the next button if username is stored
    }
  
    nameInput.addEventListener('input', function() {
      if (nameInput.value.trim() !== '') {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
    });
  
    nameInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (nameInput.value.trim() === '') {
          displayMessage('Please enter your name.');
        } else {
          window.location.href = 'second_page.html';
        }
      }
    });
  
    nextButton.addEventListener('click', function() {
      if (nameInput.value.trim() === '') {
        displayMessage('Please enter your name.');
      } else {
        const userName = nameInput.value.trim();
        localStorage.setItem('userName', userName);
        window.location.href = 'second_page.html';
      }
    });
  
    function displayMessage(text) {
      messageContainer.textContent = text;
      document.body.appendChild(messageContainer);
      setTimeout(function() {
        messageContainer.classList.add('fade-out');
      }, 3000);
      setTimeout(function() {
        messageContainer.remove();
      }, 4000);
    }
  });
  