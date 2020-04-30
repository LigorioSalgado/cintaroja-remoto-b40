// class Animal{
//     constructor(ojos){
//         this.ojos = ojos;
//     }
// }


class Mascota{

    constructor(nombre,color){
       // super(ojos)
        this.nombre = nombre
        this.color = color
     }

     comer(alimento){
        return `${this.nombre} esta comiendo ${alimento}`  //Interpolacion  es6 
    }
}

class Perro extends Mascota{

    constructor(nombre,color,patas,raza,peso){
        super(nombre,color)
        this.patas = patas
        this.raza = raza
        this.peso = peso

    }

}

let huesos = new Perro ('Huesos','cafe',4,'galgo','5kg')
console.log(huesos.nombre)
console.log(huesos.raza)
console.log(huesos.comer('carnita'))