let huesos = {
    num_ojos:2,
    color:'cafe',
    num_patas:4,
    altura:'1m',
    peso:'3kg',
    ladra:() => {
        return 'Guau Guau'
    },
    olfatea: (objeto) =>{
        return 'Huesos esta olfateando '+objeto
    },
    comer: (comida) =>{
        if(comida == 'carne'){
            return 'Huesos esta contento'
        }else{
            return 'Huesos ya no te quiere :('
        }
    }
};

console.log(huesos.ladra())
console.log(huesos.olfatea('otro perro'))
console.log(huesos.comer('pescadito'))

let snoopy = {
    nombre:"Snoopy",
    num_ojos:2,
    color:'blanco',
    num_patas:2,
    altura:'1m',
    peso:'5kg',
    saluda: function(){
        return " Hola soy " + this.nombre
    }
};
console.log('El color de snoopy es: ', snoopy.color )

console.log("Huesos pesa: ",huesos.peso)
console.log("Snoopy pesa: ",snoopy.peso)

snoopy.amigo = "Charly Brown"
snoopy.baila = () =>{
    return "Snoopy esta bailando"
}
snoopy.color = 'blanco con manchas negras'

console.log('El color de snoopy es: ', snoopy.color )
console.log(snoopy.baila())

console.log("El amigo de huesos es: ", huesos.amigo)
console.log("El amigo de snoopy es: ",snoopy.amigo)


let scooby = {
    nombre:"Scooby Dood",
    saluda: function(){
        return " Hola soy " + this.nombre
    }
}
// //scope -> prototype
// function(){

// }
// // scope  -> arrow class
// () => {}

console.log(scooby.saluda())
console.log(snoopy.saluda())