let nombreUsuario = prompt("Ingrese su nombre por favor!");

let tituloNombre = document.createElement("p");
tituloNombre.innerHTML = `<h3>Gracias por elegirnos, ${nombreUsuario}!</h3>`;
document.body.append(tituloNombre);
const titulo = document.querySelector("#title");
titulo.innerText = "Parrilla la Nueva Adelina. Lista de comidas:";

const comidas = [
  {
    id: 1,
    nombre: "Morcipan",
    precio: 600,
  },
  {
    id: 2,
    nombre: "Costillar",
    precio: 1600,
  },
  { id: 3, nombre: "Fritas grandes", precio: 500 },
  {
    id: 4,
    nombre: "Entrania",
    precio: 1400,
  },
];

const root = document.querySelector("#root");

comidas.forEach((producto) => {
  const nuevaComida = document.createElement("li");
  nuevaComida.innerText = `${producto.nombre} - $${producto.precio}`;
  root.append(nuevaComida);
});

let form = document.getElementById("formulario");
formulario.addEventListener("submit", validarForm);

function validarForm(e) {
  e.preventDefault();
  let formulario = e.target;
  let lista = document.getElementById("lista");
  lista.innerHTML = `<li> ${formulario.children[0].value} ${formulario.children[1].value} </li>`;
}

const confirmar = document.getElementById("confirmar");
confirmar.onclick = () => {
  alert("Su compra ha sido confirmada!");
};
