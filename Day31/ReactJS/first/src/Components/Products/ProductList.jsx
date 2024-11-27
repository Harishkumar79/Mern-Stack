import React from 'react';
import { data } from './Data';
import { NavLink } from 'react-router-dom';

function ProductList() {
    return (
        <>
            <h1>Products</h1>
            <div className='card-box'>
                {data.map((product, index) => (
                    <div className="product-card" key={product.id}>
                        <div className='img'>
                            <img alt='img' src={product.image} />
                        </div>
                        <div className='title'>
                            <h5>{product.title}</h5>
                        </div>
                        <div className='desc'>{product.description}</div>
                        <div className='price'>${product.price}</div>
                        <div className='view'></div>
                        <span>
                            <NavLink id='view-more' to={`/${product.id}`}>View more</NavLink>
                            <NavLink to='/'>
                                <button id='card-btn' type='button'>Add To Cart</button>
                            </NavLink>
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ProductList;
