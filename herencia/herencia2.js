class Largometraje{

    constructor(titulo,duracion){
        this.titulo = titulo
        this.duracion = duracion
    }
}

class Pelicula extends Largometraje{
    constructor(titulo,duracion,genero,clasificacion){
        super(titulo,duracion)
        this.genero = genero
        this.clasificacion = clasificacion
    }
}

class Documental extends Largometraje{
    constructor(titulo,duracion,patrocinador,pais){
        super(titulo,duracion)
        this.patrocinador = patrocinador
        this.pais = pais
    }
}

class Cine{
    constructor(nombre){
        this.nombre = nombre
    }

    reproducir(largometraje){
      return `Reproduciendo: ${largometraje.titulo}  `
    }
    // reproducirPelicula(pelicula){
    //     return `Reproduciendo: ${pelicula.titulo}  `
    // }

    // reproducriDocumental(documental){
    //     return `Reproduciendo: ${documental.titulo}`
    // }
}

let titanic = new Pelicula('Titanic','190min','historica','T')
let volcanes = new Documental('Volcanes de America','100min','ONESCO','México')

let cine = new Cine('Cinepolis')

console.log(cine.reproducir(titanic))
console.log(cine.reproducir(volcanes))


