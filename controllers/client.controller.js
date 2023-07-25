import { clientServices } from "../service/client-service.js"

//Backticks ` ` 

const crearNuevaLinea = (nombre, email, id) => {
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
                        type="button" id="${id}">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>`
    linea.innerHTML = contenido;
    const btn = linea.querySelector("button");
    btn.addEventListener('click', () => {
        const id = btn.id;
        console.log("click", id);
    });
    return linea;
};

const table = document.querySelector("[data-table]");

//Data es la informacion del archivo (response)
clientServices.listaClientes().then((data) => {
    console.log(data);
    //Desestructuracion de - perfil
    data.forEach(({nombre,email,id}) => {
        const nuevaLinea = crearNuevaLinea(nombre,email,id);
        table.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrió un error"));

const eliminarCliente = (id) => {
    console.log("Elimina a: "+id);
}