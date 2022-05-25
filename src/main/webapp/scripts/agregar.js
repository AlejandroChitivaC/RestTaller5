let formulario = document.getElementById("formulario");
/*
Recuerda hacer el fetch con la URI de REST
 */
const url = "https://db-alejandro.herokuapp.com/obrasarte/";
window.addEventListener("DOMContentLoaded", async () => {});
formulario.addEventListener("submit", async (esc) => {
  esc.preventDefault();
  //capturando los datos del html y los voy a enviar a mi data.json
  let nombre = document.getElementById("name").value;
  let descr = document.getElementById("descripcion").value;
  let foto = document.getElementById("foto").value;
  let id = document.getElementById("id").value;
  let coleccion = document.getElementById("coleccion").value;

  // atraves de una promesa url donde se van a guardar esos datos
  let resp = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre,
      descripcion: descr,
      // imagen: foto, 
      id: id,
      coleccion: ":"+ coleccion,
      likes: 0,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
  let data = resp.json();
  console.log(data);
  alert("Su obra ha sido agregada");
  window.location = "../web/social.html";
});
