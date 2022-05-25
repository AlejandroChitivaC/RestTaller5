let formulario = document.getElementById("formulario");
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let fcoins = document.getElementById("fcoins").value;
/*
Recuerda hacer el fetch con la URI de REST
 */
const url = 'api/users';
window.addEventListener("DOMContentLoaded", async () => {});
formulario.addEventListener("submit", async (esc) => {
  esc.preventDefault();
  let resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      fcoins: fcoins,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  let data = resp.json();
  console.log(data);
  alert("Se han agregado"+ fcoins + "fcoins" + "a la cuenta de "+email);
  window.location = "../web/social.html";
});
