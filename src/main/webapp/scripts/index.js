/*
Recuerda hacer el fetch con la URI de REST
 */
const url = " https://db-alejandro.herokuapp.com/obrasarte/"
let campo = document.querySelector("#socialcard")
// se trae la info del .json
//contador likes
let contador = 0;
let msg = "Solo puedes dar un clic por obra de arte"
function contar() {
    document.getElementById("btnlikes").innerHTML = contador++;
    if (counter > 1) {
        alert(msg)
    }
}
const getData = async () => {

    const resp = await fetch(url);
    console.log(resp)

    const data = await resp.json();
    data.forEach(card => {
        const { nombre, imagen, categoria, precio, likes,coleccion,descripcion } = card;
        campo.innerHTML += ` 
        <div class="card">
                <img src="${imagen}" alt="">
                <p style="color:blue; font-weight:bold">${"@" + nombre}</p>
                <p>${precio}</p>
                <p>${"Colección"+coleccion}</p>
                <p>${descripcion}</p>
                <button id="btnlikes" class="btn btn-primary" style="border-radius:50px" onclick="contar()">${likes} Like</button>
            </div> 
        `
    })
}

window.addEventListener('DOMContentLoaded', getData);
