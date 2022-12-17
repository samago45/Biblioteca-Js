render = (frame) => {
    if(!frame) return
    document.querySelector("#root").innerHTML = userlogin ?  frame : loginComponent() 
}


//Genra un id aletorio
let generateId = () => {
    return Date.now().toString().slice(-5)
}

//Genera la creacion del libros
 let date = () => {
    const d = new Date()
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
}