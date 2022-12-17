const formularioUser = () => {
    return `<div class="container ">
                <form class="row  justify-content-center align-items-center">
                    <h1 class="d-flex justify-content-center align-items-center py-4">Agregar Nuevo Usuario</h1>
                    <div class="col-md-4 col-lg-8">
                      <label  class="form-label py-1">Username</label>
                      <input type="text" class="form-control" id="username" placeholder="Username">
                    </div>
                    <div class="col-md-4 col-lg-8">
                      <label  class="form-label py-1">Password</label>
                      <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <div class="col-lg-8 py-3">
                      <button type="submit" class="btn btn-primary" onclick="gurdarUsername()" id="add-client">Guardar usuario</button>
                    </div>
                  </form>
            </div>`

}



const listaUser = (arrayUser) => {
    /// 
    return `<h1 class="d-flex justify-content-center align-items-center py-4">Listado Usuarios</h1>
      <div class="row mt-5">
          <div class="col-3"></div>
          <div class="col-6">
              <table class="table table-primary">
              <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Password</th>
                  <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
                  ${arrayUser.reduce((html, user) => html += `
                      <tr>
                          <th scope="row">${user.id}</th>
                          <td>${user.username}</td>
                          <td>${user.password}</td>
                      <td class="d-flex"> 
                          <button class="btn btn-primary btn-sm m-2" onclick="editUser('${user.id}')" >Editar</button>
                          <button class="btn btn-primary btn-sm m-2" onclick="deleteUser('${user.id}')" >Eliminar</button>
                          
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