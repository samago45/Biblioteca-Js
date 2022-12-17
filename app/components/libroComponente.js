arrayBooks = JSON.parse(localStorage.getItem("Books")) ?? []

//Muestra libros en el home

const vistaLibro = () => {
        return `<div class="container  d-flex align-content-around py-4">
          ${
            arrayBooks.reduce((html , item) => html+=`
            <div class="card p-2 m-3" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${item.title}</h3>
                <h5 class="card-title">${item.authors}</h5>
                <p class="card-text">${item.description}.</p>
                <a href="#" class="btn btn-primary" onclick="render(detalleLibro(${item.id}))">Ver datalles</a>
            </div>
            </div>` , "")
          }
         </div>`   
}

//Formulario para agregar libros
const formsLibro = () => {
    return `<div class="container ">
      <form class="row  justify-content-center align-items-center">
          <h1 class="d-flex justify-content-center align-items-center py-4">Agregar Libro</h1>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Titulo</label>
            <input type="text" class="form-control" id="title">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Descipcion</label>
            <input type="text" class="form-control" id="description" placeholder="Descripcion del libro">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Resumen</label>
            <input type="text" class="form-control" id="summary" placeholder="Resumen">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Año de publicacion</label>
            <input type="date" class="form-control" id="width" placeholder="Apartment, studio, or floor">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Editorial</label>
            <input type="text" class="form-control" id="editorial">
          </div>
          <div class="col-md-4 col-lg-5">
          <label  class="form-label py-1">Autores</label>
          <input type="text" class="form-control" id="authors">
  
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">stock</label>
            <input type="number" class="form-control" id="stock">
          </div>
  
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">URL de la imagen</label>
            <input type="text" class="form-control" id="img">
          </div>      
          <div class="col-8 py-3">
            <button type="submit" class="btn btn-primary" onclick="guardarBook()" id="add-ebook">Guardar libro</button>
          </div>
        </form>
  </div>`


}

//Vista de los detalles de los libros


const detalleLibro = (id) => {
    const book = arrayBooks.find(l => l.id.toString() === id.toString())
    return `<div class="row">
        <div class="col-12 text-center py-4"> <h1> ${book.title}  </h1> </div>
        
    </div>
    <div class="row mt-4">
                <div class="col-md-4 mb-3">
                    <img src="${book.img}" class="mx-auto d-block" width="300rem" />
                </div>
                <div class="col-md-8">
                    <p> <span class="fw-bold"> Id: </span>  ${book.id} </p>
                    <p> <span class="fw-bold"> Autor/es: </span>  ${book.authors} </p>
                    <p> <span class="fw-bold"> Año de publicacion: </span>  ${book.width} </p>
                    <p> <span class="fw-bold"> Editorial: </span>  ${book.editorial} </p>
                    <p> <span class="fw-bold"> Fecha de creacion: </span>  ${book.create_data} </p>
                    <p> <span class="fw-bold"> Stock: </span>  ${book.stock} </p>
                    <p> ${book.description} </p>
                    <button class="btn btn-primary m-2" onclick="buscar('${book.id}')" >Editar</button>
                    <button class="btn btn-primary m-2" onclick="deleteBook('${book.id}')" >Eliminar</button>
                </div> 

              
                </div>
    </div>`

}


//Listado de libro
const listaLibros = () => {
    const arrayBooks = JSON.parse(localStorage.getItem("Books")) ?? []
    return `<div class="container">
    <h1 class="d-flex justify-content-center align-items-center py-4">Inventario de libros</h1>
    <table class=" table table-primary">
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Titulo</th>
      <th scope="col">Stock</th>
      <th scope="col">Fecha de creacion</th>
      <th scope="col"></th>
  </tr>
    </thead>
    <tbody>
        ${
            
            arrayBooks.reduce((html, book) => html += 
        `<tr>
        <th scope="row">${book.id}</th>
        <td>${book.title}</td>
        <td>${book.stock}</td>
        <td>${book.create_data}</td>
        <td class="d-flex"> 
            <button class="btn btn-primary m-2" onclick="buscar('${book.id}')" >Editar</button>
             <button class="btn btn-primary m-2" onclick="deleteBook('${book.id}')" >Eliminar</button>
         </td>
      </tr>
            `, "")
}
    </tbody>
</table>
    
    </div>
      
      `
}


const editarLibro = (book) => {
    return `
  <div class="container ">
      <form class="row  justify-content-center align-items-center">
          <h1 class="d-flex justify-content-center align-items-center py-4">Editar Libro</h1>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Titulo</label>
            <input type="text" class="form-control" id="title" value="${book.title}">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Descipcion</label>
            <input type="text" class="form-control" id="description" value="${book.description }">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Resumen</label>
            <input type="text" class="form-control" id="summary" value="${book.summary}"">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Año de publicacion</label>
            <input type="date" class="form-control" id="width" value="${book.width}"">
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">Editorial</label>
            <input type="text" class="form-control" id="editorial" value="${book.editorial}"">
          </div>
          <div class="col-md-4 col-lg-5">
          <label  class="form-label py-1">Autores</label>
          <input type="text" class="form-control" id="authors" value="${book.authors}"">
  
          </div>
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">stock</label>
            <input type="number" class="form-control" id="stock" value="${book.stock}"">
          </div>
  
          <div class="col-md-4 col-lg-5">
            <label  class="form-label py-1">URL de la imagen</label>
            <input type="text" class="form-control" id="img" value="${book.img}"">
          </div>
  
          <div class="col-8 py-3">
            <button type="submit" class="btn btn-primary"  onclick="editarBook('${book.id}')" id="add-ebook">Guardar</button>
          </div>
        </form>
  </div>
  
  `}
