const crearInformeLibrosPrestados = () => {
    const fechaInicial = document.querySelector("#fechaInicial").value
    const fechaFinal = document.querySelector("#fechaFinal").value

    if([fechaInicial,fechaFinal].includes("")){
       alert("Agregue los campos correspondientes")
        return
    }

    const idLibrosPrestados = arrayLoan.filter(prestamo =>  new Date(prestamo.createData) >= new Date(fechaInicial) && new Date(prestamo.createData) <= new Date(fechaFinal) )
        .map( prestamo => prestamo.book_id ).flat()


    const librosPrestados = arrayBooks.filter( libro =>  
        new Set(idLibrosPrestados).has(libro.id.toString())
    )

    render( listadoLibrosinforme(librosPrestados) )

}



const informePrestamosVencidos = () =>{
    const prestamosVencidos = arrayLoan.filter(prestamo => !prestamo.returned && new Date(prestamo.retunrData) < new Date(date()))
    render(listadoPrestamos(prestamosVencidos)) 
}


