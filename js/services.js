function showService(name) {
  document.getElementById("serviceTitle").innerText = name;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}
