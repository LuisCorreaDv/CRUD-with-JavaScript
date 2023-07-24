//Backticks ` ` 
const crearNuevaLinea = (nombre, email) => {
    const linea = document.createElement("tr");
    const contenido =
        `<td class="td" data-td>${nombre}</td>
        <td>${email}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html"
                        class="simple-button simple-button--edit"
                    >Editar</a
                    >
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`
    linea.innerHTML = contenido;
    return linea;
};

const table = document.querySelector("[data-table]");



//Abrir http (método,url)
//url - donde queremos que se realice la acción
//CRUD - métodos HTTP
// Create - POST
// Read - GET
// Update - PUT/PATCH
// Delete - DELETE


//Fetch API - ya viene activa en el navegador
//Regresa una promesa
//Transformar la respuesta a formato JSON

const listaClientes = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

//---------------Ambas hacen lo mismo---------------
// //Funcion async
// const promise = new Promise((resolve, reject) => {
//     const http = new XMLHttpRequest();
//     http.open("GET", "http://localhost:3000/perfil");

//     //Manda la información
//     http.send();

//     //Recibe la información de db.json
//     http.onload = () => {
//         //Convierte el texto de data a formato JS
//         const response = JSON.parse(http.response);
//         //Verificar status de la llamada http
//         if (http.status >= 400) {
//             reject(response);
//         } else {
//             resolve(response);
//         }
//     }
// });
// return promise

//Data es la informacion del archivo (response)
listaClientes().then((data) => {
    console.log(data);
    data.forEach(perfil => {
        const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));


