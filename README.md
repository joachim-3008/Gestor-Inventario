# 📦 Gestor de Inventario Simple

Sistema de gestión de productos ligero y dinámico desarrollado con **JavaScript Vanilla**. Este proyecto permite administrar existencias de forma local, persistente y con un diseño totalmente adaptativo.

> **Link del proyecto:** [Ver Demo en Vivo](https://joachim-3008.github.io/Gestor-Inventario/)

---

## 🚀 Características

* **Operaciones CRUD**: Agregar y eliminar productos en tiempo real.
* **Persistencia con LocalStorage**: Los datos se guardan en el navegador; no se pierden al recargar la página.
* **Diseño Responsive**: Interfaz optimizada para móviles, tablets y escritorio usando CSS Flexbox.
* **Validación de Datos**: Control para evitar entradas vacías o valores numéricos inválidos.

---

## 🛠️ Tecnologías utilizadas

* **HTML5**: Estructura semántica del gestor.
* **CSS3**: Diseño moderno con Media Queries y Flexbox.
* **JavaScript (ES6+)**: Lógica de negocio, manipulación del DOM y persistencia de datos.

---

## 📋 Cómo funciona el código

El flujo de información se divide en tres procesos clave:

1.  **Carga inicial**: El script utiliza `localStorage.getItem()` para recuperar el inventario guardado. Si hay datos, los convierte de JSON a objetos para dibujarlos en pantalla.
2.  **Adición de productos**: Al capturar los datos del formulario, se crea un objeto, se añade al array global con `.push()` y se sincroniza con el almacenamiento local mediante `JSON.stringify()`.
3.  **Eliminación**: Se utiliza el método `.filter()` para crear un nuevo array que excluye el producto seleccionado, actualizando tanto la vista como el almacenamiento de forma inmediata.

---

## 🔧 Instalación y Uso

1.  Clona este repositorio:
    ```bash
    git clone [https://github.com/joachim-3008/Gestor-Inventario.git](https://github.com/joachim-3008/Gestor-Inventario.git)
    ```
2.  Abre el archivo `index.html` en tu navegador.
3.  ¡Empieza a gestionar tus productos!

---

## 💡 Próximas Mejoras (Roadmap)

- [ ] Implementar **IDs únicos** (UUID) para evitar errores con productos de nombres idénticos.
- [ ] Agregar función de **Edición** rápida de stock.
- [ ] Buscador/Filtro de productos en tiempo real.
- [ ] Exportación de datos a formato PDF o Excel.

---

### 👤 Autor
**Joachim** - [GitHub Profile](https://github.com/joachim-3008)