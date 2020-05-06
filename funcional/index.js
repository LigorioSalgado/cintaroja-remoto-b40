const request = require('request')

function getPeopleBad(error,response, body){ //call back
    console.log(response.statusCode) // 200 ---> 0k de que todo estuvo bien
    const data = JSON.parse(body);

    data.results.map((personaje) => { // calback hell -----Nunca hacer esto 
       request(personaje.homeworld, function(error, response, body){
           const planeta = JSON.parse(body)
            for (const naveURL of personaje.starships) {
                request(naveURL,function(error,response, body){
                    const nave = JSON.parse(body);
                    console.log("El personaje es:  ", personaje.name)
                    console.log("Su planeta es: ", planeta.name)
                    console.log("Su nave es: ", nave.name )
                })
            }
       })
    })

    // for ( const person of data.results){
    //     console.log("El personaje es: ",person.name)
    //     request(person.homeworld,getPlanet) // Se ejecuta 10 veces
    // }

}

function getPeople(error,response, body){
    const data = JSON.parse(body);
    // map, filter y find
    const personajesMap = data.results.map((personaje) => {
       // return { nombre:personaje.name, peso: `${personaje.mass} Kg` }
       return `El personaje ${personaje.name} tiene un peso de ${personaje.mass} Kg `
    })

    //console.log(personajesMap)

    const personajesFilter = data.results.filter((personaje) =>{
        return personaje.gender === "n/a" //asercion logica
    })

    //console.log(personajesFilter)

    const personajesFind = data.results.find((personaje) =>{
        return personaje.birth_year === "57BBY"  //asercion logica
    })

    //console.log(personajesFind)

    const imcPersonajes = data.results.map((personaje) => {
        return { nombre:personaje.name , imc:(personaje.mass)/(personaje.height/100)**2   }
    }).filter( (personaje) => { return personaje.imc < 30 }) //return implicito 

    //console.log(imcPersonajes)


}

request('http://swapi.dev/api/people/',getPeople) // Se ejecuta una vez

const arr = [2,4,6,8,10]

for(const numero of arr){
    
}