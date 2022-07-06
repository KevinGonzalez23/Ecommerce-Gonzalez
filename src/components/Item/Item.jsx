//aca van los productos
import JordanBlue from "./Img/jordan1.jpg"

const Item = () => {
    return (
        <section  className="Producto">
            <div className="card">
                <img src={JordanBlue} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Jordan 1 Blue</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Ver mas</a>
                </div>
            </div>
        </section>
    )
  }
  
  export default Item