class Perro {

    constructor(nombre,color,num_patas,peso,altura){ // Crea un objeto a partir de la plantilla
        console.log("Desde el constructor de ",nombre)
        this.nombre = nombre
        this.color = color
        this.num_patas = num_patas
        this.peso = peso
        this.altura = altura
    }

    saluda(){ // Metodo
        return "Hola soy "+this.nombre
    }

}

let snoopy = new Perro("Snoopy","Blanco con Negro", 2,"9kg","1m")
let scooby = new Perro("Scooby Doo", "Cafe con Negro",4,'15kg',"1.5m")
let huesos = new Perro("Huseos", "Cafe", 4,"4kg",'1.1m')

// console.log(snoopy.color)
// console.log(scooby.color)
// console.log(huesos.color)

