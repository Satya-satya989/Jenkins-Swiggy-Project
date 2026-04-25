import React from 'react'
import './RestaurentOnline.css'

function RestaurentOnline() {

    const renderOffer = (offer) => {
        return offer ? <h4 className='fw-bolder'>{offer}</h4> : null;
    };

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-75'>
                <h4 className='fw-bold'>Restaurants with online food delivery in Kochi</h4>

                {/* Filters */}
                <div className='buttonsoffiltering'>
                    <button>Filter <i className="fa-solid fa-gears"></i></button>
                    <button>Sort by <i className="fa-solid fa-angle-down"></i></button>
                    <button>Fast Delivery</button>
                    <button>New On Swiggy</button>
                    <button>Rate 4.0+</button>
                    <button>Pure Veg</button>
                    <button>Offers</button>
                    <button>Rs.300 - Rs.600</button>
                    <button>Less Than Rs.300</button>
                </div>

                <div id='Card-section'>

                    {/* ROW 1 */}
                    <div className='d-flex justify-content-between mt-4'>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...0b3356a88b6fc5966c452c4c9b1b5e4a)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("40% OFF UPTO ₹80")}</div>
                            </div>
                            <h5>The Good Bowl</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 4</span>
                            <p>Biriyani, North Indian, Pastas<br />Chittethukara</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...4a3b48488e3aa9bda13efd8cfcd95284)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("60% OFF UPTO ₹120")}</div>
                            </div>
                            <h5>Sweet Truth</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 3.9</span>
                            <p>Bakery, Dessert<br />Chittethukara</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...fx2mgrbp4ifryi76pgef)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("25% OFF UPTO ₹125")}</div>
                            </div>
                            <h5>Frozen Bottle</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 4.1</span>
                            <p>Beverages, IceCream<br />Ernakulam</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...af33b81798b11deba338e94b7585d348)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("50% OFF UPTO ₹100")}</div>
                            </div>
                            <h5>Faasos</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 3.7</span>
                            <p>Wraps, Snacks<br />Chittethukara</p>
                        </div>

                    </div>

                    {/* ROW 2 */}
                    <div className='d-flex justify-content-between'>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...1ace5fa65eff3e1223feb696c956b38b)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("50% OFF")}</div>
                            </div>
                            <h5>Subway</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 3.9</span>
                            <p>Healthy Food<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...hqskgt9wjjgqkj74coyw)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer(null)}</div>
                            </div>
                            <h5>The Burger Junction</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 4.5</span>
                            <p>Burgers, Beverages<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...56c9ab92bd79745fd152a30fa2525426)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("20% OFF UPTO ₹50")}</div>
                            </div>
                            <h5>KFC</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 4.1</span>
                            <p>Burgers, Snacks<br />Kakkanad</p>
                        </div>

                        <div className='Online-card'>
                            <div style={{ backgroundImage: `url(https://media-assets.swiggy.com/...ly5rzyg6tzwu4idmy4i1)` }} className='Online-Card-img'>
                                <div className='Online-color'>{renderOffer("10% OFF")}</div>
                            </div>
                            <h5>Amma's Pastries</h5>
                            <span><i className="fa-solid fa-star" style={{ color: "#20963a" }}></i> 3.9</span>
                            <p>Desserts<br />Kakkanad</p>
                        </div>

                    </div>

                </div>

                <hr />
            </div>
        </div>
    )
}

export default RestaurentOnline
