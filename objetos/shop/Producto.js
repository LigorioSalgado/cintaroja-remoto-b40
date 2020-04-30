class Producto{
    constructor(nombre,precio){
        this._nombre = nombre
        this._precio = precio
    }

    // Getters & Setter

    getNombre(){
        return this._nombre
    }

    getPrecio(){
        return this._precio
    }

    setNombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }
}


module.exports = Producto;