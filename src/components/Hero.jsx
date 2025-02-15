const Hero=()=>{

    return(
        <div className="container">
        <main className="hero">
            <div className="hero-content"><h1>Your Feet Deserve The Best</h1>
            <p className="hero-image">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Molestias consectetur vel voluptatem est tenetur eius praesentium debitis voluptas commodi facere?
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <p>Also available On</p>
                <div className="brand">
                    <img src="images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>

            </div>
            </div>
            <div className="hero-img"><img src="/images/hero-image.png" alt="" /></div>
        </main>
        </div>
    )
}
export default Hero