import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from './Data';
import { NavLink } from 'react-router-dom';

function Product() {
    var dataa = useParams();
    // var [data , setdata] = useState();
    // for (var i = 0; i < dataa.length; i++) {
    //     // eslint-disable-next-line
    //     if (data[i].id == dataa.id) {
    //         setdata(data[i])
    //         console.log(data)
    //     }
    // }

    return (
        <>
            {
                // eslint-disable-next-line 
                data.map((item, id) => {
                    // eslint-disable-next-line 
                    if (item.id == dataa.id) {
                        return (
                            <div className="product-card1" key={item.id}>
                                <div class="tz-gallery">

                                    <div class="row">

                                        <div class="col-sm-12 col-md-4 img-div">
                                            <a class="lightbox" href={item.image}>
                                                <img src={item.image} alt="Bridge" />
                                            </a>
                                        </div>
                                        <div class="col-sm-6 col-md-4 img-div">
                                            <a class="lightbox" href={item.image}>
                                                <img src={item.image} alt="Park" />
                                            </a>
                                        </div>
                                        <div class="col-sm-6 col-md-4 img-div">
                                            <a class="lightbox" href={item.image}>
                                                <img src={item.image} alt="Tunnel" />
                                            </a>
                                        </div>
                                        <div class="col-sm-12 col-md-8 img-div">
                                            <a class="lightbox" href={item.image}>
                                                <img src={item.image} alt="Traffic" />
                                            </a>
                                        </div>
                                        <div class="col-sm-6 col-md-4 img-div">
                                            <a class="lightbox" href={item.image}>
                                                <img src={item.image} alt="Coast" />
                                            </a>
                                        </div>
                                    </div>

                                </div>

                                <div className='title-p'>
                                    <h5>{item.title}</h5>
                                </div>
                                <div className='desc-p'>{item.description}</div>
                                <div className='price-p'>${item.price}</div>
                                <div className='view-p'></div>
                                <NavLink to='/'>
                                    <button id='card-btn-p' type='button'>Add To Cart</button>
                                </NavLink>
                            </div>
                        )
                    }
                })
            }
        </>
    );
}

export default Product;