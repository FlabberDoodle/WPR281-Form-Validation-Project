document.addEventListener("DOMContentLoaded", function() {
  
    function validateField(field, pattern) {
      if (!field.value.match(pattern)) {
        field.classList.add('invalid');
        return false;
      } else {
        field.classList.remove('invalid');
        return true;
      }
    }
    
    document.getElementById('First').addEventListener('blur', function() {
      validateField(this, /^[a-zA-Z]+$/);
    });
  
    document.getElementById('Last').addEventListener('blur', function() {
      validateField(this, /^[a-zA-Z]+$/);
    });
  
    // Before form submission
    document.getElementById('theForm').addEventListener('submit', function(e) {
      let valid = true;
  
      // Check each field
      valid &= validateField(document.getElementById('First'), /^[a-zA-Z]+$/);
      valid &= validateField(document.getElementById('Last'), /^[a-zA-Z]+$/);
  
      // If any field fails validation
      if (!valid) {
        e.preventDefault();
        document.getElementById('error-message').textContent = "Please correct the invalid fields.";
      } else {
        document.getElementById('error-message').textContent = "";
      }
    });
  });
  