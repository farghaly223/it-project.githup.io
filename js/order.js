document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.getElementById('signupButton');
    const email = document.querySelector('input[type="email"]');
  
  
    function showError(input, message) {
      alert(message);
    }
  
   
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  
   
    signupButton.addEventListener('click', function(e) {
      e.preventDefault();
  
      if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
      } else {
       
      }
    });
  
  });