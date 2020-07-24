const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById("email");
  const email = document.getElementById("email").value;
  const text = document.getElementById("text");
  const error = document.getElementById("error-icon");
  const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.match(pattern)) {
    text.style.color = "#00FF00";
    text.innerHTML = "Thank you for your interest!";
    text.style.display = "flex";
    error.style.display = "none";
    input.style.border = "1px solid hsl(0, 80%, 86%)";
  } else {
    text.style.color = "hsl(0, 93%, 68%)";
    text.innerHTML = "Please provide a valid email";
    text.style.display = "flex";
    error.style.display = "flex";
    input.style.border = "2px solid hsl(0, 93%, 68%)";
  }
})