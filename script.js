// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We will get back to you shortly.");
  this.reset();
});
