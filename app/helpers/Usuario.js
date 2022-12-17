var arrayUser = [];
arrayUser = JSON.parse(localStorage.getItem("Users")) ?? []



//Guardar clientes
const gurdarUsername = () => {
    const username = document.getElementById("username").value
    const passsword = document.getElementById("password").value
    if ([username, passsword].includes("")) {
        alert("Ingrese datos en el campo")
        return
    }
    UserJson(username , passsword);
    render( listaUser(arrayUser) )

 
}




const UserJson = (username , password)=>{
    const user ={
        id : generateId(),
        username : username,
        password : password,
        createData : date()

        }
        arrayUser.push(user)
        localStorage.setItem("Users", JSON.stringify(arrayUser)); 
        
}
