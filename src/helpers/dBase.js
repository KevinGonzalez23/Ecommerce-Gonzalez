import Jordan from '../Img/jordan1.png'
import Vans from '../Img/vans.png'
import Adidas from '../Img/adidas.png'
import RemeraA from '../Img/RemeraAdidas.png'
import Pantalon from  '../Img/pantalon.png'

const productosDeBaseDeDatos = [
    {
      id: 1,
      categoria: "Remeras",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: RemeraA
    },
    {
      id: 2,
      categoria: "Remeras",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: RemeraA
    },
    {
      id: 3,
      categoria: "Remeras",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: RemeraA
    },
    {
      id: 4,
      categoria: "Pantalones",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: Pantalon
    },
    {
      id: 5,
      categoria: "Pantalones",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: Pantalon
    },
    {
      id: 6,
      categoria: "Pantalones",
      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: Pantalon
    },
    {
      id: 7,
      categoria: "Zapatillas",

      nombre: "Jordan 1 Blue",
      description: "lala",
      precio: "$" + 100,
      img: Jordan
    },
    {
      id: 8,
      categoria: "Zapatillas",

      nombre: "Vans",
      description: "saldlasd",
      precio: "$" + 200,
      img: Vans
    },
    {
      id: 9,
      categoria: "Zapatillas",

      nombre: "Adidas",
      description: "fasf",
      precio: "$" + 300,
      img: Adidas
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