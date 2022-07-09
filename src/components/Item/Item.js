//aca van los productos
import React from "react";
import "./products.css";

const Item = ({Items}) => {
    const { nombre, description, precio, img} = Items;
    return (
       
            <div className="product">
                <div className="product-img">
                    <img src={img} alt=""/>
                    <h3 className="product-title"> {nombre}</h3>
                </div>
                
                <div className="product-description">
                    <h3 className="product-price"> {precio}</h3>
                    <h4> {description}</h4>
                    <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        
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