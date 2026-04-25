import React from 'react'
import './RestaurentChain.css'

function RestaurentChain() {

    const renderOffer = (offer) => {
        return offer ? <h4 className='fw-bolder'>{offer}</h4> : null;
    };

    return (
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <div className='w-75'>
                <h4 className='fw-bolder'>Top restaurant chains in Kochi</h4>

                <div style={{ gap: "50px", overflowY: "scroll" }} className='d-flex align-items-center'>

                    {/* Card 1 */}
                    <div className='Hotel-card'>
                        <div
                            style={{ backgroundImage: `url(https://media-assets.swiggy.com/...k2why61tsxk9sh0sl68d)` }}
                            className='Hotel-Card-img'
                        >
                            <div className='Hotel-color'>
                                {renderOffer("10% OFF UPTO ₹40")}
                            </div>
                        </div>
                        <h5 className='mt-3'>Alakapuri</h5>
                        <span><i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.4</span>
                        <p>South indian, Kerala, North Indian <br />Kakkanad</p>
                    </div>

                    {/* Card 2 */}
                    <div className='Hotel-card'>
                        <div
                            style={{ backgroundImage: `url(https://media-assets.swiggy.com/...jys7zsopl1sjy2wwxadd)` }}
                            className='Hotel-Card-img'
                        >
                            <div className='Hotel-color'>
                                {renderOffer("FREE ITEM")}
                            </div>
                        </div>
                        <h5 className='mt-3'>Galaxy Family Restaurant</h5>
                        <span><i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.4</span>
                        <p>Kerala, South Indian, Chinese, North... <br />Kakkanad</p>
                    </div>

                    {/* Card 3 (Fixed empty heading issue) */}
                    <div className='Hotel-card'>
                        <div
                            style={{ backgroundImage: `url(https://media-assets.swiggy.com/...xejp6fugbtzu08vpfqmu)` }}
                            className='Hotel-Card-img'
                        >
                            <div className='Hotel-color'>
                                {renderOffer(null)}
                            </div>
                        </div>
                        <h5 className='mt-3'>Aryaas</h5>
                        <span><i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.4</span>
                        <p>South Indian, North Indian, Chinese <br />Kakkanad</p>
                    </div>

                    {/* Example Fix (KFC issue) */}
                    <div className='Hotel-card'>
                        <div
                            style={{ backgroundImage: `url(https://media-assets.swiggy.com/...56c9ab92bd79745fd152a30fa2525426)` }}
                            className='Hotel-Card-img'
                        >
                            <div className='Hotel-color'>
                                {renderOffer("20% OFF UPTO ₹50")}
                            </div>
                        </div>
                        <h5 className='mt-3'>KFC</h5>
                        <span><i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 4.1</span>
                        <p>American, Burgers, Biryani, Snacks...<br />Kakkanad</p>
                    </div>

                    {/* Example Fix (Invalid structure fixed) */}
                    <div className='Hotel-card'>
                        <div
                            style={{ backgroundImage: `url(https://media-assets.swiggy.com/...ly5rzyg6tzwu4idmy4i1)` }}
                            className='Hotel-Card-img'
                        >
                            <div className='Hotel-color'>
                                {renderOffer("10% OFF UPTO ₹40")}
                            </div>
                        </div>
                        <h5 className='mt-3'>Amma's Pastries</h5>
                        <span><i style={{ color: "#20963a" }} className="fa-solid fa-star"></i> 3.9</span>
                        <p>Desserts, Bakery<br />Kakkanad</p>
                    </div>

                </div>

                <hr style={{ width: "100%", marginTop: "-50px" }} />
            </div>
        </div>
    )
}

export default RestaurentChain
