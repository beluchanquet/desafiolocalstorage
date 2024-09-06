document.addEventListener('DOMContentLoaded', () => {
    const storedData = localStorage.getItem('userInput');
    const dataSpan = document.getElementById('data');
  
    if (storedData) {
      dataSpan.textContent = storedData;
    }
  });
  