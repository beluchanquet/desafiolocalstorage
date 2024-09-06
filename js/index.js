document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const buttonText = document.getElementById('buttonText');
  
    buttonText.addEventListener('click', () => {
      const textValue = inputText.value;
      localStorage.setItem('userInput', textValue);
    });
  });
  