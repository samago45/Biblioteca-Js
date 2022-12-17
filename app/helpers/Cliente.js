//Json cliente
let arrayClients = [];
arrayClients = JSON.parse(localStorage.getItem("Clients")) ?? []


//Guardar clientes
 const gurdarClientes = () => {
    const name = document.getElementById("name").value
    const lastName = document.getElementById("lastName").value
    const ci = document.getElementById("ci").value
    if ([name, lastName, ci].includes("")) {
        alert("Ingrese los datos")
        return
    }
     clientsJson(name , lastName , ci);
     render( listaClientes(arrayClients) )

 }

//Elinminar de cliente de localStorege
 const deleteClient = (id) => {
    if(!id) return
    if(!confirm("Deseas Eliminar")) return

    arrayClients = arrayClients.filter((client) => client.id !== id)
    localStorage.setItem("Clients", JSON.stringify(arrayClients))
    render( listaClientes(arrayClients) )
}
//Busca si existe el cliente en localStorege
const editClient = (id) => {
    if(!id) return
    const clients = arrayClients.find( c => c.id === id)
    render( editarClients(clients) )
}

//Permite editar los datos del cliente
const editarCliente = (id) => {
    if(!id) return

   const  name = document.querySelector("#name").value
    const lastName = document.querySelector("#lastName").value
    const ci = document.querySelector("#ci").value

    if([name,lastName,ci].includes("")){
        alert("Ingrese los datos")
        return
    }

    const client = arrayClients.find( c => c.id.toString() === id.toString() )
    client.name = name
    client.lastName = lastName
    client.ci = ci

    render( listaClientes(arrayClients) )
    localStorage.setItem("Clients", JSON.stringify(arrayClients)); 
}














 const clientsJson = (name , lastName , ci)=>{
    const client ={
        id : generateId(),
       name : name,
        lastName : lastName,
        ci: ci
        }

        arrayClients.push(client)
        localStorage.setItem("Clients", JSON.stringify(arrayClients)); 
        
}

