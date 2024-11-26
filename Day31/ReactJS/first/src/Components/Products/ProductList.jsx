import React from 'react'
import { data } from './Data';
import { NavLink } from 'react-router-dom';

function ProductList() {
    console.log(data);
    return (
        <>
            <h1>Products</h1>
            <div className='card-box'>
                {
                    data.map((data, i) => {
                        return (
                            <>
                                <div className="product-card">
                                    <div className='img'><img alt='img' src={data.image}></img></div>
                                    <div className='title'><h5>{data.title}</h5></div>
                                    <div className='desc'>{data.description}</div>
                                    <div className='price'>${data.price}</div>
                                    <div className='view'></div>
                                    <NavLink id='view-more' to='/'>View more</NavLink>
                                    <NavLink to='/'><button id='card-btn' type='button'>Add To Cart</button></NavLink>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    );
}

export default ProductList;