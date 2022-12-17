let userlogin 

const iniciarSesion = () => {
     const username = document.querySelector("#username").value
    const password = document.querySelector("#password").value

    if([username,password].includes("")){
        alert("Ingrese los datos correspondintes para el inicio de sesion")
        return
    }

    const user = arrayUser.find( u => u.username === username && u.password === password )

    if(!user){
      alert("Datos Errones")
        return
    }
    
    userlogin = user

     render(vistaLibro(arrayBooks))
    

    //mostrarUsuario()
}


const cerrarSesion = () => {
    userlogin = undefined
    render( loginComponent()  )
}