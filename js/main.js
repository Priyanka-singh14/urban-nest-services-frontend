async function loadComponent(id, file) {
  const res = await fetch(file);
  const data = await res.text();
  document.getElementById(id).innerHTML = data;
}

loadComponent("navbar", "components/navbar.html");
loadComponent("footer", "components/footer.html");

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}
