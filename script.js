let inventario = [];

const contenedorCarta = document.querySelector("#card");
const btnAggProducto = document.querySelector("#formulario");
const formulario = document.querySelector(".contenedor-form");

// -------------------------------------------------------------
const datosAlmacenados = localStorage.getItem("inventario");

datosAlmacenados
  ? (inventario = JSON.parse(datosAlmacenados)) //Esta parte lo que hace es preguntarle al navegador si tene algo almacenado con el nombre inventario en el local storague
  : null;

// -------------------------------------------------------------

btnAggProducto.addEventListener("click", () => {
  formulario.innerHTML = `
        <div class="contenedor-inf">
            <label for="nombre-pro">Nombre del producto:</label>
            <input type="text" id="nombre-pro" class="inf" maxlength="29" placeholder="Escribe el nombre del producto">
            <label for="precio-pro">Precio del producto:</label>
            <input type="number" id="precio-pro" class="inf" maxlength="29" placeholder="Escribe el precio del producto">
            <label for="stock-pro">Stock del producto:</label>
            <input type="number" id="stock-pro" class="inf" maxlength="29" placeholder="Escribe la cantidad del producto">
            <label for="imagen-pro">Imagen del producto:</label>
            <input type="file" id="imagen-pro" class="inf" accept="image/*">
            <p>Recomendación: Verificar que la imagen que coloque tenga nombres diferentes.<p>
            <button id="boton" class="buttons">Agregar</button>
        </div>
        `;

  const nombre = document.querySelector("#nombre-pro");
  const precio = document.querySelector("#precio-pro");
  const stock = document.querySelector("#stock-pro");
  const imagenInput = document.querySelector("#imagen-pro");
  const buton = document.querySelector("#boton");

  buton.addEventListener("click", () => {
    const file = imagenInput.files[0]; // obtenemos el archivo seleccionado

    // verificamos que todos los campos y la imagen existan
    if (nombre.value && precio.value && stock.value && file) {
      const reader = new FileReader(); //crea una herramienta que lee archivos 

      // determina que hacer cuando la lectura termine 
      reader.onload = function (e) {
        const nuevoPro = {
          nombre: nombre.value,
          precio: parseFloat(precio.value),
          stock: parseInt(stock.value),
          imagen: e.target.result // garda la imagen en tipo texto en (base 64)
        };

        inventario.push(nuevoPro);
        localStorage.setItem("inventario", JSON.stringify(inventario));
        crearCarta(nuevoPro);
        limpiarTarjeta();
      };

      reader.readAsDataURL(file); // iniciamos la lectura de la imagen
    } else {
      alert("Rellene todos los campos, incluida la imagen");
    }
  });

  const limpiarTarjeta = () => {
    nombre.value = "";
    precio.value = "";
    stock.value = "";
    formulario.innerHTML = "";

    imagenInput.type = "text"; 
    imagenInput.type = "file"; 
    imagenInput.value = "";
  };
}); //este es agg el formulario a la pantalla

const crearCarta = (nuevoPro) => {
  const carta = document.createElement("div");
  carta.classList.add("contenedor-cartas");

  carta.innerHTML = `
    <div class="foto-producto">
        <img src="${nuevoPro.imagen}" alt="${nuevoPro.nombre}" style="width: 100%; border-radius: 8px;">
    </div>
    <h3>${nuevoPro.nombre}</h3>
    <p><strong>Precio: </strong>$${nuevoPro.precio}</p>
    <p><strong>Stock: </strong>${nuevoPro.stock} uds</p>
    <button class="btn-eliminar">Eliminar</button>`;

  const btnEliminar = carta.querySelector(".btn-eliminar");

  btnEliminar.addEventListener("click", () => {
    carta.remove();
    inventario = inventario.filter((p) => p.nombre !== nuevoPro.nombre);
    localStorage.setItem("inventario", JSON.stringify(inventario)); //Aqui actualiza la lista de objeto (inventario) despues de borrarlo
  });

  contenedorCarta.appendChild(carta);
};

inventario.forEach((pro) => crearCarta(pro));
