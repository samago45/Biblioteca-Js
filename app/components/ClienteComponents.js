const listaClientes = (arrayClients) => {
    /// 
    return `<h1 class="d-flex justify-content-center align-items-center py-4">Listado Clientes</h1>
      <div class="row mt-5">
          <div class="col-3"></div>
          <div class="col-6">
              <table class="table table-primary">
              <thead>
              <tr>
                  <th scope="col">CI</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Apellido</th>
                  <th scope="col">Acciones</th>
              </tr>
              </thead>
              <tbody>
                  ${arrayClients.reduce((html, client) => html += `
                      <tr>
                          <th scope="row">${client.ci}</th>
                          <td>${client.name}</td>
                          <td>${client.lastName}</td>
                      <td class="d-flex"> 
                          <button class="btn btn-primary btn-sm m-2" onclick="editClient('${client.id}')" >Editar</button>
                          <button class="btn btn-primary btn-sm m-2" onclick="deleteClient('${client.id}')" >Eliminar</button>
                          
                      </td>
                    </tr>
                      `, "")
        }
              </tbody>
          </table>
          </div>
          <div class="col-3"></div>
      </div>`
}


const formularioCliente = () => {
    return `<div class="container ">
                <form class="row  justify-content-center align-items-center">
                    <h1 class="d-flex justify-content-center align-items-center py-4">Agregar Cliente</h1>
                    <div class="col-md-4 col-lg-8">
                      <label  class="form-label py-1">Nombre</label>
                      <input type="text" class="form-control" id="name" placeholder="Nombre completo">
                    </div>
                    <div class="col-md-4 col-lg-8">
                      <label  class="form-label py-1">Apellido</label>
                      <input type="text" class="form-control" id="lastName" placeholder="Apellido completo">
                    </div>
                    <div class="col-md-4 col-lg-8">
                      <label  class="form-label py-1">Cedula</label>
                      <input type="text" class="form-control" id="ci" placeholder="Ingresar numero de cedula">
                    </div>
                    
                    <div class="col-lg-8 py-3">
                      <button type="submit" class="btn btn-primary" onclick="gurdarClientes()" id="add-client">Guardar usuario</button>
                    </div>
                  </form>
            </div>`

}


const editarClients = (cliente) => `
<div class="container ">
    <form class="row  justify-content-center align-items-center">
        <h1 class="d-flex justify-content-center align-items-center py-4">Agregar Cliente</h1>
        <div class="col-md-4 col-lg-8">
          <label  class="form-label py-1">Nombre</label>
          <input type="text" class="form-control" id="name"value="${cliente ? cliente.name : "" }" placeholder="Nombre completo">
        </div>
        <div class="col-md-4 col-lg-8">
          <label  class="form-label py-1">Apellido</label>
          <input type="text" class="form-control" id="lastName" value="${cliente ? cliente.lastName : "" }" placeholder="Apellido completo">
        </div>
        <div class="col-md-4 col-lg-8">
          <label  class="form-label py-1">Cedula</label>
          <input type="text" class="form-control" id="ci" value="${cliente ? cliente.ci : "" }" placeholder="Ingresar numero de cedula">
        </div>
        
        <div class="col-lg-8 py-3">

        <div class="col-lg-8 py-3">
        <button type="submit" class="btn btn-primary" onclick="editarCliente(${cliente.id})" id="add-client">editar</button>
      </div>

        </div>
      </form>
</div>

`