document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const messageType = document.getElementById('messageType').value;
  const message = document.getElementById('message').value.trim();
  const responseDiv = document.getElementById('contactResponse');

  // Simple validation
  if(fullName === "" || email === "" || messageType === "" || message === "") {
    responseDiv.innerHTML = '<p style="color:red;">Please fill in all fields.</p>';
    return;
  }

  // Email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(!email.match(emailPattern)) {
    responseDiv.innerHTML = '<p style="color:red;">Please enter a valid email address.</p>';
    return;
  }

  // If validation passes
  responseDiv.innerHTML = `<p style="color:green;">Thank you, ${fullName}! Your ${messageType} message has been sent successfully.</p>`;

  // Optionally, reset form
  this.reset();
});


