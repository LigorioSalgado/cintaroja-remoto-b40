
function login(email, password){

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // aqui estoy simulando ir por datos al servidor
            const mail = "edwin@gmail.com"
            const pass = "holachicos"

            if(email === mail && password === pass){
                resolve({mensaje:"Logeado con extito", logueado:true})
            }else{
                const error = new Error('Tu password o email son incorrectos')
                reject(error)
            }


        },1000)
    })

}

console.log(login("edwin@gmail.com","holachicos"))

var user = login("edwin@gmail.com","holachicos")
     .then((mensaje) => console.log(mensaje.logueado) ) //La promesa se ejecuta de manera correcta
     .catch((error) => console.log(error)) //La promesa no se cumple


login("edwin@mail.com","holacchos")
     .then((mensaje) => console.log(mensaje) ) //La promesa se ejecuta de manera correcta
     .catch((error) => console.log(error)) //La promesa no se cumple


