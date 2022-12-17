arrayBooks = [];
arrayBooks = JSON.parse(localStorage.getItem("Books")) ?? []
//Guardar libros
const guardarBook = () => {

    const title = document.querySelector("#title").value
    const description = document.querySelector("#description").value
    const summary = document.querySelector("#summary").value
    const width = document.querySelector("#width").value
    const editorial = document.querySelector("#editorial").value
    const authors = document.querySelector("#authors").value
    const stock = document.querySelector("#stock").value
    const img = document.querySelector("#img").value


    if ([title, description, summary, width, editorial, authors,
        stock].includes("")) {
        alert("Ingrese los datos")
        return
    }
    render(vistaLibro(arrayBooks))
    return bookJson(title, description, summary, authors, width, editorial, stock, img)
}


//Busca si existe para modificar
const deleteBook = (id) => {
    if (!id) return
    if (!confirm("Deseas Eliminar")) return

    arrayBook = arrayBooks.filter((book) => book.id !== id)
    localStorage.setItem("Books", JSON.stringify(arrayBook))
    render(listaLibros(arrayBooks))
}

//Busca una considencia si existe el libro por id
const buscar = (id) => {
    if (!id) return
    book = arrayBooks.find(c => c.id.toString() === id.toString())
    console.log(book.id)
    render(editarLibro(book))
}


//Permite modificar el libro
const editarBook = (id) => {
    // 
    if (!id) return `No existe el id ${id}`
    const title = document.querySelector("#title").value
    const description = document.getElementById("description").value
    const summary = document.getElementById("summary").value
    const width = document.getElementById("width").value
    const editorial = document.getElementById("editorial").value
    const authors = document.getElementById("authors").value
    const stock = document.getElementById("stock").value
    const img = document.getElementById("img").value

    if ([title, description, summary,
        width, editorial, authors, stock, img].includes("")) {
        alert("Ingrese los datos")
        return
    }

    const books = arrayBooks.find((book => book.id.toString() === id.toString()))
    id = id
    books.title = title
    books.description = description
    books.summary = summary
    books.width = width
    books.editorial = editorial
    books.authors = authors
    books.stock = stock
    books.img = img
    books.create_data = books.create_data
   
    render(vistaLibro(arrayBooks))
    localStorage.setItem("Books", JSON.stringify(arrayBooks));
    
}



//Json libros
const bookJson = (title, description, summary, authors, width, editorial, stock, img) => {
    const book = {
        id: generateId(),
        title: title,
        description: description,
        summary: summary,
        authors: authors,
        width: width,
        editorial: editorial,
        stock: stock,
        create_data: date(),
        img: img
    }
    arrayBooks.push(book);
    localStorage.setItem("Books", JSON.stringify(arrayBooks));
    return book;
}