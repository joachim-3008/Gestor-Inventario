let inventario = [];


const contenedorCarta = document.querySelector('#card');
const aggProducto = document.querySelector('#formulario');
const padre = document.querySelector('.contenedor');


// -------------------------------------------------------------
const datosAlmacenados = localStorage.getItem('inventario');

(datosAlmacenados) ?(
    inventario = JSON.parse(datosAlmacenados)       //Esta parte lo que hace es preguntarle al navegador si tene algo almacenado con el nombre inventario en el local storague
): null

// -------------------------------------------------------------

aggProducto.addEventListener("click", ()=>{

    padre.innerHTML = `
        <div class="contenedor-inf">
            <input type="text" id="nombre-pro" class="inf" maxlength="29" placeholder="Escribe el nombre del producto">
            <input type="number" id="precio-pro" class="inf" maxlength="29" placeholder="Escribe el precio del producto">
            <input type="number" id="stock-pro" class="inf" maxlength="29" placeholder="Escribe la cantidad del producto">
            <button id="boton" class="buttons">Agregar</button>
        </div>
        `;

const nombre = document.querySelector('#nombre-pro');
const precio = document.querySelector('#precio-pro');
const stock = document.querySelector('#stock-pro');
const buton = document.querySelector('#boton');

buton.addEventListener('click', () => {

    const nuevoPro = {
        nombre: nombre.value,
        precio: parseFloat(precio.value),
        stock: parseInt(stock.value)
    };


console.log(inventario);

(nuevoPro.nombre && nuevoPro.precio && nuevoPro.stock) ?(
    inventario.push(nuevoPro),
    localStorage.setItem('inventario', JSON.stringify(inventario)), //Aqui le decimos al navegador toma esta lista de objetos q cree y almacenala 
    crearCarta(nuevoPro),
    limpiarTarjeta()
) : alert('Rellene todos los campos');


}); //este es agg el producto al inv

const limpiarTarjeta = () => {
    nombre.value = "";
    precio.value = "";
    stock.value = "";
};

}); //este es agg el formulario a la pantalla



const crearCarta = (nuevoPro) =>{
    const carta = document.createElement('div');
    carta.classList.add('contenedor-cartas');

    carta.innerHTML = `
    <h3>${nuevoPro.nombre}</h3>
    <p><strong>Precio: </strong>$${nuevoPro.precio}</p>
    <p><strong>Stock: </strong>${nuevoPro.stock} uds</p>
    <button class="btn-eliminar">Eliminar</button>`;

const btnEliminar = carta.querySelector(".btn-eliminar");

btnEliminar.addEventListener("click", ()=>{
    carta.remove();
    inventario = inventario.filter(p => p.nombre !== nuevoPro.nombre);
    localStorage.setItem('inventario', JSON.stringify(inventario));    //Aqui actualiza la lista de objeto (inventario) despues de borrarlo
});


    contenedorCarta.appendChild(carta);
};

 inventario.forEach(pro => crearCarta(pro));