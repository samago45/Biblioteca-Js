let arrayLoan = [];
 arrayLoan = JSON.parse(localStorage.getItem("Prestamos")) ?? []

//Prestamos
const guardarPrestamo = () => {
   
    const cliente_id = document.getElementById("client").value
    const fechaDevolucion = document.getElementById("date").value
    const seleccionados = document.querySelectorAll('[name="addBook"]')
    const libros_id = Array.from(seleccionados).filter( e => e.checked ).map( e => e.value )

    if([cliente_id, fechaDevolucion].includes("") || !libros_id.length){
       alert("Agrege los campos")
        return
    }

    arrayBooks.forEach( libro => {
        if( libros_id.some(id => Number(id) === Number(libro.id)) )
            libro.stock-=1
            // localStorage.setItem("Books" , JSON.stringify(arrayBooks))
    } )

    lendingJson(cliente_id,fechaDevolucion,libros_id,false)
    render( listadoPrestamos(arrayLoan) )
    
}

//Editar Prestamo
const EditarPrestamo = (id) => {
    if(!id) return
    const prestamo = arrayLoan.find( prestamo => id.toString() === prestamo.id.toString() )
     render( formLeanding(prestamo) )
}

const editarPrestamo = (id) => {
    if(!id) return
    const prestamo = arrayLoan.find( prestamo => prestamo.id.toString() === id.toString() )
    if(!prestamo) return

    const client_id = document.querySelector("#client").value
    const retunrData = document.querySelector("#date").value
    const listBook = document.querySelectorAll('[name="addBook"]')
    const book_id = Array.from(listBook).filter( e => e.checked ).map( e => e.value )


    if([client_id, retunrData].includes("") || !book_id.length){
        window.scrollTo(0,0)
        document.querySelector("#msg").style.display = "block"
        return
    }
    //Reestablecer el Stock
    arrayBooks.forEach( libro => {
        libro.stock += arrayLoan.book_id.filter( p => Number(p) === book.id ).length
        if( book_id.some(id => Number(id) === Number(book.id)) )
            book.stock-=1
    } )

    prestamo.client_id = client_id
    prestamo.retunrData = retunrData
    prestamo.book_id = book_id

    localStorage.setItem("Prestamos",JSON.stringify(arrayBooks))

    render( listadoPrestamos(arrayLoan) )
}
//Elimina los prestamos
const eliminarPrestamo = (id) => {
    if(!id) return
    if(!confirm("Esta acción no se puede deshacer, ¿Está seguro?")) return

    prestamo = arrayLoan.find( prestamo => prestamo.id.toString() === id.toString() )
    if(!prestamo.returned){
        arrayBooks.forEach( libro => {
             libro.stock += prestamo.book_id.filter( p => Number(p) === libro.id ).length
        } )
    }

    prestamos = arrayLoan.filter( prestamo => prestamo.id.toString() !== id.toString() )
    localStorage.setItem("Prestamos",JSON.stringify(prestamos))

    render( listadoPrestamos(arrayLoan) )
}

//Devulve los prestamos
const devolverPrestamo = (id) => {
    if(!id) return
    if(!confirm("Esta acción no se puede deshacer, ¿Está seguro?")) return
    prestamo = arrayLoan.find( p => p.id.toString() === id.toString() )
    if(!prestamo) return

    prestamo.returned = true
    arrayBooks.forEach( libro => {
        libro.stock += prestamo.book_id.filter( p => Number(p) === libro.id ).length
    } )

    localStorage.setItem("Prestamos",JSON.stringify(arrayLoan))
    render( listadoPrestamos(arrayLoan) )


}




//Guarda los prestamos realizados por lo clientes en localStorege
const lendingJson = (client_id,retunrData,book_id,returned)=>{
    const loan = {
        id : generateId(),
        client_id : client_id,
        retunrData : retunrData,
        createData: date(),
        book_id : book_id,
        returned : returned
    }
    arrayLoan.push(loan);
    localStorage.setItem("Prestamos", JSON.stringify(arrayLoan));
 

}