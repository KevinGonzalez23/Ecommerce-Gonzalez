import React from 'react'
import './ItemDetail.css'


function ItemDetail({Item}) {
    const { nombre, precio, description, img} = Item;
  return (

    <div className="producto">
                <div className='row'>
                  <div className='col-md-6 order-md1'>
                    <img src={img}/>
                  </div>
                  <div className='col-md-6 order-md2'>
                    <h2>{nombre}</h2>
                    <h2>{precio}</h2>
                    <p className='lead'>{description}</p>
                    <div className="d-grid gap-3 col-10 mx-auto">
                      <button className='btn btn-primary' type='button'>Comprar Ahora</button>
                      <button className='btn btn-outline-primary' type='button'>Agregar al carrito</button>
                    </div>
                  </div>
                </div>
    </div>
  )
}

export default ItemDetail