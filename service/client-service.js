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

const crearCliente = (nombre,email) => {
    return fetch("http://localhost:3000/perfil",{
        //Tipo de metodo
        method: "POST",
        //Definir encabezados
        headers: {
            "Content-Type": "application/json"
        },
        //Informacion que queremos enviar en el cuerpo de la peticion
        //Transformar datos a texto
        body: JSON.stringify({nombre,email, id: uuid.v4()}),
    });
};

const eliminarCliente = (id) => {
    //JSON server toma el identificador que recibe
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    });
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => 
        respuesta.json()
    );
};
    
const actualizaCliente = (nombre,email,id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({nombre, email}),
    })
    .then((respuesta) => console.log(respuesta))
    .catch((err) => console.log(err));
};

//Exportar objeto clientServices con la llave de la funcion listaClientes
export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizaCliente,
};





