//aca van los productos
import React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

const Item = ({Items}) => {
    const {id, nombre, precio, img} = Items;
    return (
       <>
            <div className="product">
                <div className="product-img">
                    <Link to={`/detalle/${id}`}><img src={img} alt=""/></Link>
                    <h3 className="product-title"> {nombre}</h3>
                </div>
                
                <div className="product-price">
                    <h3 className="product-price"> {precio}</h3>
                   <Link to={`/detalle/${id}`}><button type="button" className="btn btn-dark">Ver Mas</button></Link> 
                    
                </div>
            </div>
       </>
        
    )
  }
  
  export default Item

  /*   <div className="card">
                <img src={JordanBlue} className="card-img-top"/>
                
                <div className="card-body">
                    <h5 className="card-title">Jordan 1 Blue</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                
                <img src={VansBlue} alt="vans" className="card-img-top"/>
                
                <div className="card-body">
                    <h5 className="card-title">Jordan 1 Blue</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
            <div className="card">
                
                <img src={AdidasBlue} alt="nike" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Jordan 1 Blue</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div> */