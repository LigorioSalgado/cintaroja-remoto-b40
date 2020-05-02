

// let boton =  document.getElementById('mybutton')
// boton.addEventListener('click',function(){
//     //Mi codiguito
// })

function getUsuarios(callback){
    let datos = [
        {'name':'Edwin','age':27,'city':'CDMX'},
        {'name':'Luis','age':19,'city':'Durango'},
        {'name':'Ana','age':24,'city':'EdoMex'},
    ]
    setTimeout(function(){
        callback(datos,"Todo chido")
        console.log("Despues de callback")
    },2000)
}

console.log("Bienvenido Obteniendo Datos ")

getUsuarios(function(data,text){
    console.log(data)
    console.log("Usuarios recibidos")
    console.log(text)

})

console.log("Cargando ......")

function saludo(callback){
    console.log("Hola deasde una funcion")
    // calback = despedida
    callback()
}

function despedida (){
    console.log("Adios desde el callback")
}


saludo(despedida)

saludo(function(){
    console.log("desde una funcion anonima")
})

//saludo()


