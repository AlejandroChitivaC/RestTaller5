let formulario = document.getElementById("ingresar");

formulario.addEventListener("submit", async (esc) => {
  esc.preventDefault();
  //capturando los datos del html y los voy a enviar a mi data.json
  let email = document.getElementById("email").value;
  let password = document.getElementById("pass").value;
  let resp = await fetch(`../api/users/${email}`);
  let data = await resp.json();
  if (data.email === email && data.password === password) {
    alert("Bienvenido");
    window.location.href = "../index.html";
  } else {
    alert("El usuario no existe, o los datos no coinciden con nuestros registros");
  }
});



