document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Perform form validation (add your validation logic here)
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    // Create a user object (you can send this data to a server for further processing)
    var user = {
      fullName: fullName,
      email: email,
      password: password
    };
    
    // Display user data (for demonstration purposes)
    console.log('User Registration:', user);
  });
  