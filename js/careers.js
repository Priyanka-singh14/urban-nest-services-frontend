document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("careerForm");
  const success = document.getElementById("careerSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Name']").value.trim();
    const email = form.querySelector("input[placeholder='Email']").value.trim();
    const role = form.querySelector("select").value;

    // Reset message style
    success.className = "mt-3";

    // Basic validation
    if (name === "" || email === "" || role === "") {
      success.innerText = "Please fill all fields.";
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

    // Success message (no backend)
    success.innerText = "Application submitted successfully!";
    success.classList.add("text-green-600");

    form.reset();
  });
});
