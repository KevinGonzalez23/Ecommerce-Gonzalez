import Nike1 from '../Img/Zapatillas/ZapatillasNike.png'
import Nike2 from '../Img/Zapatillas/ZapatillasNike2.png'
import Nike3 from '../Img/Zapatillas/ZapatillasNike3.png'
import RemeraPuma from '../Img/Remeras/RemeraPuma.png'
import RemeraNike from '../Img/Remeras/RemeraNike.png'
import RemeraAdidas from '../Img/Remeras/RemeraAdidas.png'


const productosDeBaseDeDatos = [
    {
      id: 1,
      categoria: "Remeras",
      nombre: "Remera Puma Classics Boxy Hombre",
      description: "Indumentaria Remera Puma Classics Boxy de Lifestyle para Hombre",
      precio: "$" + 300,
      img: RemeraPuma
    },
    {
      id: 2,
      categoria: "Remeras",
      nombre: "REMERA NSP TOP SS MESH NIKE",
      description: "Remera mangas cortas para adultos Nike Sportwear NSP Top SS Mesh",
      precio: "$" + 300,
      img: RemeraNike
    },
    {
      id: 3,
      categoria: "Remeras",
      nombre: "REMERA ADIDAS SPORTSWEAR FUTURE ICONS",
      description: "Remera mangas cortas para adultos Adidas Sportwear Future Icons",
      precio: "$" + 300,
      img: RemeraAdidas
    },
    {
      id: 4,
      categoria: "Pantalones",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: RemeraAdidas
    },
    {
      id: 5,
      categoria: "Pantalones",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: RemeraAdidas
    },
    {
      id: 6,
      categoria: "Pantalones",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: RemeraAdidas
    },
    {
      id: 7,
      categoria: "Zapatillas",
      nombre: "Nike Dunk High By You",
      description: "Las Nike Dunk High By You ofrecen el increíble estilo de los 2000 con un toque futurista.La piel, el ante y el tejido Woven en colores llamativos y metalizados aportan una nueva vida a este básico deportivo con un tipo de letra de edición especial para añadir un toque de personalidad adicional.",
      precio: "$" + 100,
      img: Nike1
    },
    {
      id: 8,
      categoria: "Zapatillas",
      nombre: "Nike Dunk High By You",
      description: "Las Nike Dunk High By You ofrecen el increíble estilo de los 2000 con un toque futurista.La piel, el ante y el tejido Woven en colores llamativos y metalizados aportan una nueva vida a este básico deportivo con un tipo de letra de edición especial para añadir un toque de personalidad adicional.",
      precio: "$" + 200,
      img: Nike2
    },
    {
      id: 9,
      categoria: "Zapatillas",
      nombre: "Nike Dunk High By You",
      description: "Las Nike Dunk High By You ofrecen el increíble estilo de los 2000 con un toque futurista.La piel, el ante y el tejido Woven en colores llamativos y metalizados aportan una nueva vida a este básico deportivo con un tipo de letra de edición especial para añadir un toque de personalidad adicional.",
      precio: "$" + 300,
      img: Nike3
    },
]

export const dataBase = new Promise((resolve, reject) => {
    let condition = true;
    
      if (condition) {
        setTimeout(() => {
          resolve(productosDeBaseDeDatos);
        }, 2000);
      } else {
        reject("400 not found");
      }
    
});
/* const task = new Promise((resolve, reject) => {
    let condition = true
  
    if (condition) {
      resolve('200 Ok')
    } else {
      reject('400 Not Found')
    }
  })
  task
    .then( respuesta => {
      //procesando respuesta, esto sirve para consultar a un objeto json, aca lo parseamos y le pasamos el objeto a la siguiente .then
        return respuesta
    },
    ) 
    .then(res => console.log(res))
    .catch(err => console.log(err))  */