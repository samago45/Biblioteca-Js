const formLibrosPrestados = () => `
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6 text-center">
            <h2>Informe de Libros Prestados</h2> <hr>

            <div class="alert alert-danger" id="msg" role="alert" style="display: none">
                Todos los campos son obligatorios!
            </div>

            <form class="m-3">
                <label class="form-label"> Fecha Inicial </label>
                <input type="date" id="fechaInicial" class="form-control"/>

                <label class="form-label"> Fecha Final </label>
                <input type="date" id="fechaFinal" class="form-control"/>


                <button class="btn btn-primary mt-3" id="submit-btn" onclick="crearInformeLibrosPrestados()" }">
                    Generar Informe
                </button>
            </form>

        </div>
        <div class="col-3"></div>
    </div>
`


const listadoLibrosinforme = (arrayBooks, filtrado) => `
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