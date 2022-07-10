import React from 'react'
import '../Item/Item.css'


function ItemDetail(Items) {
    const { nombre, precio, description, img} = Items;
  return (

    <div className="Card">
        <img className="Img" src={img}/>
        <div className="Body">
            <h1>{nombre}</h1>
            <p>Precio: $ {precio}</p>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ItemDetail