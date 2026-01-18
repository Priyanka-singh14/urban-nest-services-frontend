document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("success");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Reset message
    success.className = "mt-3";

    // Empty field validation
    if (name === "" || email === "" || message === "") {
      success.innerText = "All fields are required.";
      success.classList.add("text-red-600");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      success.innerText = "Please enter a valid email address.";
      success.classList.add("text-red-600");
      return;
    }

    // Success (no backend)
    success.innerText = "Message sent successfully!";
    success.classList.add("text-green-600");

    form.reset();
  });
});
