const Cliente = require('./Cliente');
const Producto = require('./Producto');

let ipad = new Producto('Ipad 16gb',7000)
let iphone = new Producto('Iphon X Max',60000)
let cliente1 = new Cliente(1,'Edwin',27,'M','edwin@gmail.com','57000000')

cliente1.agregarCarrito(ipad)
cliente1.agregarCarrito(iphone)
console.log(cliente1.comprar())

let computadora = new Producto('Computadora Gamer',70000)
let celular =  new Producto('Samsung Galaxy s20',30000)
let play = new Producto('Play Station 4',10000)

console.log(computadora.getNombre())
computadora.nombre =  "Otra computadora que no es Gamer"
console.log(computadora.getNombre())
computadora.setNombre("Computadora Master Gamer")
console.log(computadora.getNombre())

const cliente2 = new Cliente(2, 'Luis Torres', 35, 'M', 'luis@gmail.com', '570000000')

cliente2.agregarCarrito(computadora)
computadora.precio = 2
cliente2.comprar()



