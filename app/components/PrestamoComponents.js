
const formLeanding = (arrayLoan) => {
    const arrayClients = JSON.parse(localStorage.getItem("Clients")) ?? []
     const arrayBooks = JSON.parse(localStorage.getItem("Books")) ?? []
    return `
    <div class="row justify-content-center align-items-center">

    <div class="">
        <form class="row  justify-content-center align-items-center">
        <h2 class="text-center py-4">${arrayLoan ? "Editar Editar" : "Agregar Prestamo"}</h2>
            <div class="col-md-4 col-lg-8">
            <label class="form-label py-1">Seleccione un Cliente</label>
            <select class="form-select" id="client" ${arrayLoan ? `value="${arrayLoan.client_id}" `: ""}>
                ${
                arrayClients.reduce((html,client) => html+=`
                <option value="${client.id}">${client.name+", "+client.lastName}</option>
                `, "")}</select>
            </div>
            <div class="col-md-4 col-lg-8">
            <label class="form-label text-center py-1">Seleccione Fecha de Devolucion</label>
            <input type="date" id="date" class="form-control" ${arrayLoan ?
                `value="${arrayLoan.retunrData}" `: "" } />
            </div>
            
            <div class="col-md-4 col-lg-8">
                <h3 class="text-center py-3">Seleccione uno o más Libros</h3>
            <hr />
            <table class="table table-primary table-md-4 table-lg-8">
                <thead>
                    <tr>
                        <th scope="col">Agregar</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Autores</th>
                        <th scope="col">Año de publicacion</th>
                        <th scope="col">En Stock</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                    arrayBooks.reduce( (html, book) => html+=`
                    <tr>
                        <th scope="row">
                            <input type="checkbox" name="addBook" value="${book.id}"
                                ${book.stock<=0 ? "disabled" : "" } ${arrayLoan &&
                                arrayLoan.book_id.some( id=> id .toString() === book.id.toString() ) ?
                            "checked" : ""}

                            />
                        </th>
                        <th scope="row">
                            <img src="${book.img}" class="mx-auto d-block" width="50px" />
                        </th>
                        <td>${book.title}</td>
                        <td>${book.authors}</td>
                        <td>${book.width}</td>
                        <td ${book.stock<=0 ? "style='color: red'" : '' }>${book.stock}</td>
                    </tr>
                    `, "" )
                    }
                </tbody>
            </table>
        </div>
            <div class="col-lg-8 py-3">
                <button class="btn btn-primary"
                    onclick="${arrayLoan ? `editarPrestamo(${arrayLoan.id})` : " guardarPrestamo()" }">
                    Realizar Prestamo
                </button>
            </div>
        </form>

    </div>

</div>`
}


//Devuelve listado de prestamos
const listadoPrestamos = (arrayLoan) => {
    const arrayClients = JSON.parse(localStorage.getItem("Clients")) ?? []

   return `
   <div class="row mt-5">
        <div class="col-2"></div>
        <div class="col-8">
        <table class="table table-sm">
        <thead>
        <tr>
            <th scope="col">Cliente</th>
            <th scope="col">Fecha Creacion</th>
            <th scope="col">Fecha Devolucion</th>
            <th scope="col">Devuelto</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
            ${
                arrayLoan.reduce( (html, prestamo) => html+=`
                <tr>
                    <td>
                       ${arrayClients.find(cliente => cliente.id === prestamo.client_id).name+", "+arrayClients.find(cliente => cliente.id === prestamo.client_id).lastName}
                    </td>
                    <td>${prestamo.createData}</td>
                    <td>${prestamo.retunrData}</td>
                    <td>${prestamo.returned ? "Si" : "No"}</td>
                    <td>
                        <button class="btn btn-sm btn-primary" ${prestamo.returned ? "disabled" : ""} onclick="EditarPrestamo(${prestamo.id})">Editar</button>
                        <button class="btn btn-sm btn-primary" onclick="eliminarPrestamo(${prestamo.id})">Eliminar</button>
                        <button class="btn btn-sm btn-primary" ${prestamo.returned ? "disabled" : ""} onclick="devolverPrestamo(${prestamo.id})">Devolver</button>
                        <button class="btn btn-sm btn-primary" onclick="render( detallePrestamo(${prestamo.id}) )")">Detalles</button>
                    </td>
            </tr>
                `, "" ) 
            }
        </tbody>
     </table>
        </div>
        <div class="col-2"></div>
    </div>
     
    `
}






  
const detallePrestamo = (id) => {
    
     prestamo = arrayLoan.find( prestamo => prestamo.id.toString() === id.toString() )
     client = arrayClients.find( cliente => cliente.id.toString() === prestamo.client_id.toString())
     librosPrestados = arrayBooks.filter( libro => prestamo.book_id.includes(libro.id.toString())  )

    return `
    <div class="row mb-3">
        <div class="col-2"></div>
            <div class="col-8">
                 <h2 class="mb-2 mt-5 text-center py-4">Detalles</h2>

                <div class="row">
                    <div class="col d-flex">
                        <p> <b>Nombre :</b>  ${client.name}</p>
                        <p> <b>Apellido :</b>  ${client.lastName}</p>
                        <p> <b>Cedula  N°:</b>  ${client.ci}</p>
                        <p> <b>Fecha de Prestamo:</b>  ${prestamo.createData}</p>
                        <p> <b>Fecha de Devolucion:</b>  ${prestamo.retunrData}</p>
                        <p> <b>Devuelto: </b>  ${prestamo.returned ? "Sí" : "No"}</p>
                    </div>
                    <div class="col d-flex flex-row-reverse align-items-end">
                            <button class="btn btn-lg btn-primary m-3 " ${prestamo.returned ? "disabled" : ""} onclick="handleEditarPrestamo(${prestamo.id})">Editar</button>
                            <button class="btn btn-lg btn-primary m-3" onclick="eliminarPrestamo(${prestamo.id})">Eliminar</button>
                             <button class="btn btn-lg btn-primary m-3" ${prestamo.returned ? "disabled" : ""} onclick="devolverPrestamo(${prestamo.id})">Devolver</button>
                          
                     </div>
                </div>
                

                <hr>  
                <h2 class="mb-3 text-center">Libros Prestados</h2>
                <div class="mt-3">
                    ${listado( librosPrestados )}
                </div>
            </div>
            <div class="col-2"></div>
    </div>
`
}



const listado = (arrayBooks, filtrado) => {
    return`
    ${ filtrado ? `<div class="container mt-3">${filtradorLibros()}</div>` : "" }
<div class="row mt-5">
        <div class="col-2"></div>
        <div class="col-8">
        <table class="table table-sm">
        <thead>
        <tr>
            <th scope="col">imagen</th>
            <th scope="col">Titulo</th>
            <th scope="col">Autor</th>
        </tr>
        </thead>
        <tbody>
            ${
                arrayBooks.reduce( (html, libro) => html+=`
                <tr> 
                    <th scope="row">
                        <img src="${libro.img}" class="mx-auto d-block" width="50px" />
                    </th>
                    <td>${libro.title}</td>
                    <td>${libro.authors}</td>
                     
            </tr>
                `, "" ) 
            }
        </tbody>
     </table>
        </div>
        <div class="col-2"></div>
    </div>


`
}