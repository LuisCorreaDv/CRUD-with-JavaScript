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

//Exportar objeto clientServices con la llave de la funcion listaClientes
export const clientServices = {
    listaClientes,
};





