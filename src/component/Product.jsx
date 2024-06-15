import React from 'react'
import './scss/Product/product.css'
import { Link } from 'react-router-dom'

function Product({ items }) {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((Product) => {
                            return (
                                <>
                                    <div key={Product.id} className="col-lg-4 col-md-6 my-3 text-center">
                                        <div className="card" style={{ width: '18rem' }}>
                                            <Link to={`/product/${Product.id}`} style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>

                                                <img src={Product.image} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{Product.title}</h5>
                                                <p className="card-text">{Product.description}</p>
                                                <button className='btn btn-primary mx-3'>{Product.price}{' '}₹</button>
                                                <button className='btn btn-warning'>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>

                                </>

                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product