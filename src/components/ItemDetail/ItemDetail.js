import React from 'react'
import {ItemCount} from '../ItemCount/ItemCount'
import './ItemDetail.css'


function ItemDetail({Item}) {
    const functionContador = (contador) =>{
      console.log("El Valor del contador es", contador)
    }
  return (

    <div className="producto">
                <div className='row'>
                  <div className='col-md-6 order-md1'>
                    <img src={Item.img}/>
                  </div>
                  <div className='col-md-6 order-md2'>
                    <h2>{Item.nombre}</h2>
                    <h2>{Item.precio}</h2>
                    <p className='lead'>{Item.description}</p>
                    <div className="d-grid gap-3 col-10 mx-auto">
                      <button className='btn btn-primary' type='button'>Comprar Ahora</button>
                      <button className='btn btn-outline-primary' type='button'>Agregar al carrito</button>
                    </div>
                    

                    <ItemCount stock={10} initial={0} onAdd={ functionContador } />
                    

                  </div>
                </div>
    </div>
  )
}

export default ItemDetail