import React from 'react'

export default function About() {
    return (
        <>
            <header id="header" className="header-5">
                <div className="container">
                    <div className="row pad-logo logo-wrapper">
                        <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 t-logo">
                            <a href="/">
                                <img
                                    src="images/Lami_Logo_7.png"
                                    alt="logo"
                                    className="img-responsive"
                                />
                            </a>
                        </div>
                        <div className="col-lg-8 col-md-9 col-sm-12 col-xs-12 text-right">
                            <div className="top-two-right">
                                <div className="req-button text-right">
                                    <a href="request-qoute.html" className="submit">
                                        requet a quote
                                    </a>
                                </div>
                                <div className="top-panel">
                                    <div className="touch_top touch_top_pad">
                                        <ul className="nav">
                                            <li className="item item-phone">
                                                <div className="media">
                                                    <div className="blue-color media-left">
                                                        <a href="#">
                                                            <i className="icon icon-Phone2" />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            + (84) 033 932 9925
                                                            <br />
                                                            <span>
                                                                <a href="mailto:info@industrial.com">
                                                                    lamnguyen@lamiautomations.com
                                                                </a>
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="item item-ad">
                                                <div className="media">
                                                    <div className="blue-color media-left">
                                                        <a href="#">
                                                            <i className="icon icon-Pointer" />
                                                        </a>
                                                    </div>
                                                    <div className="media-body">
                                                        <p>
                                                            187/18 street 6, Ward 7
                                                            <br />
                                                            <span>Go Vap District, Ho Chi Minh</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Navigation*/}
                <div className="main_menu menu_fixed nav-home-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 col-xs-12">
                                <div className="logo">
                                    <img src="images/logo-mobile.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="navi">
                                    <div className="nav-menu pull-left text-left">
                                        <div className="nav-t-holder pull-left text-left">
                                            <div className="nav-t-header">
                                                <button>
                                                    <i className="fa fa-bars" />
                                                </button>
                                            </div>
                                            <div className="nav-t-footer">
                                                <ul className="nav">
                                                    <li>
                                                        <a href="index-2./">Home</a>
                                                        {/* <ul className="submenu">
                              <li>
                                <a href="index-3.html">Home Two</a>
                              </li>
                              <li>
                                <a href="index-4.html">Home Three</a>
                              </li>
                              <li>
                                <a href="index-5.html">Home Four</a>
                              </li>
                              <li>
                                <a href="index-6.html">Home Five</a>
                              </li>
                            </ul> */}
                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/about">about us</a>
                                                        {/* <ul className="submenu">
                              <li>
                                <a href="team.html">Our Team</a>
                              </li>
                              <li>
                                <a href="testimonials.html">Testimonials</a>
                              </li>
                              <li>
                                <a href="faq.html">Faq</a>
                              </li>
                            </ul> */}
                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="solutions.html">services</a>
                                                        <ul className="submenu">
                                                            <li>
                                                                <a href="meterial.html">Custom Machinery Design & Manufacture</a>
                                                            </li>
                                                            <li>
                                                                <a href="agricultural.html">
                                                                    CONCEPT DESIGN & RAPID 3D MODEL
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="mechanical.html">AUTOMATION SUPPORT AND MAINTENANCE</a>
                                                            </li>
                                                            <li>
                                                                <a href="chemical.html">PRECISION MACHINING SERVICES </a>
                                                            </li>
                                                            <li>
                                                                <a href="power.html">ELECTRICAL AND MECHANICAL INSTALLATION </a>
                                                            </li>
                                                            <li>
                                                                <a href="oil.html">ROBOTS & ROBOTIC AUTOMATION </a>
                                                            </li>
                                                            <li>
                                                                <a href="alternate.html">SAFETY COVER</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="projects.html">Products</a>
                                                        {/* <ul className="submenu">
                              <li>
                                <a href="classic.html">classic</a>
                              </li>
                              <li>
                                <a href="fullscreen.html">fullscreen</a>
                              </li>
                              <li>
                                <a href="lightbox.html">lightbox</a>
                              </li>
                              <li>
                                <a href="projects-details.html">Projects Details</a>
                              </li>
                            </ul> */}
                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="news.html">Blogs</a>
                                                        {/* <ul className="submenu">
                              <li>
                                <a href="news-details.html">News Details</a>
                              </li>
                            </ul> */}
                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="shop.html">Shop</a>
                                                        {/* <ul className="submenu">
                              <li>
                                <a href="product.html">Product Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Cart Page</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout Page</a>
                              </li>
                            </ul> */}
                                                    </li>
                                                    <li>
                                                        <a href="contact.html">contact us</a>
                                                    </li>
                                                </ul>
                                                <div className="mobile-link">
                                                    <a href="request-qoute.html" className="submit">
                                                        requet a quote
                                                    </a>
                                                    <div className="widget-t widget-t-search">
                                                        <div className="widget-t-inner">
                                                            <form action="#" method="get" className="search-form">
                                                                <div className="input-group">
                                                                    <input
                                                                        type="search"
                                                                        placeholder="Search"
                                                                        className="form-control"
                                                                    />
                                                                    <span className="input-group-addon">
                                                                        <button type="submit">
                                                                            <i className="icon icon-Search" />
                                                                        </button>
                                                                    </span>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav-search pull-right text-right">
                                        <div className="widget-t widget-t-search">
                                            <div className="widget-t-inner">
                                                <form action="#" method="get" className="search-form">
                                                    <div className="input-group">
                                                        <input
                                                            type="search"
                                                            placeholder="Search"
                                                            className="form-control"
                                                        />
                                                        <span className="input-group-addon">
                                                            <button type="submit">
                                                                <i className="icon icon-Search" />
                                                            </button>
                                                        </span>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main Navigation*/}
            </header>
            {/* Inner Header*/}
            <section className="inner-banner2 clearfix">
                <div className="container clearfix">
                    <h2>About us</h2>
                </div>
            </section>
            <section className="breadcumb-wrapper">
                <div className="container clearfix">
                    <ul className="breadcumb">
                        <li>
                            <a href="index-2.html">Home</a>
                        </li>
                        <li>
                            <span>About Us</span>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="about-tab-box sectpad">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-sm-4 col-lg-3">
                            <div className="tab-title-box">
                                <ul role="tablist" className="clearfix">
                                    <li data-tab-name="history">
                                        <a
                                            href="#history"
                                            aria-controls="history"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            Our VISION
                                        </a>
                                    </li>
                                    <li data-tab-name="mission" className="active">
                                        <a
                                            href="#mission"
                                            aria-controls="mission"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            Our VALUES
                                        </a>
                                    </li>
                                    <li data-tab-name="vision">
                                        <a
                                            href="#vision"
                                            aria-controls="vision"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            Our MISSION
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-8 col-lg-9">
                            <div className="tab-content-box tab-content about-tab">
                                <div id="history" className="single-tab-content tab-pane fade">
                                    <h2>Our VISION</h2>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit,
                                    </p>
                                    <p>
                                        sed quia non numquam eius modi tempora incidunt ut labore et
                                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                                        veniam, quis nostrum exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-12 abot-img">
                                            <img
                                                src="images/about/abt-img1.jpg"
                                                alt=""
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/about/abt-img2.jpg"
                                                alt=""
                                                className="img-responsive"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="mission"
                                    className="single-tab-content tab-pane fade in active"
                                >
                                    <h2>Our VALUES</h2>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit,
                                    </p>
                                    <p>
                                        sed quia non numquam eius modi tempora incidunt ut labore et
                                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                                        veniam, quis nostrum exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-12 abot-img">
                                            <img
                                                src="images/about/abt-img1.jpg"
                                                alt=""
                                                className="img-responsive"
                                            />
                                            <img
                                                src="images/about/abt-img2.jpg"
                                                alt=""
                                                className="img-responsive"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div id="vision" className="single-tab-content tab-pane fade">
                                    <h2>Our MISSION</h2>
                                    <p>
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                        aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                        ipsum quia dolor sit amet, consectetur, adipisci velit,
                                    </p>
                                    <p>
                                        sed quia non numquam eius modi tempora incidunt ut labore et
                                        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                                        veniam, quis nostrum exercitationem ullam corporis suscipit
                                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                                    </p>
                                    <div className="row">
                                        <div className="col-sm-12 abot-img">
                                            <img src="images/about/abt-img1.jpg" alt="" />
                                            <img src="images/about/abt-img2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* features Section*/}
            <div className="features-section">
                <div className="features-image">
                    <img src="images/features/1.jpg" alt="" />
                </div>
                <div className="features-area">
                    <div className="features">
                        <div className="features-content">
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/features/phone.png" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">24/7 availality</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec
                                        odio ipsum. Suspe ndisse cursus malesuada facilisis.
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/features/icon.png" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">No hidden cost</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec
                                        odio ipsum. Suspe ndisse cursus malesuada facilisis.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="features-content">
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/features/icon2.png" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Certified Mechanics</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec
                                        odio ipsum. Suspe ndisse cursus malesuada facilisis.
                                    </p>
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/features/hand.png" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <h4 className="media-heading">Affordable prices</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec
                                        odio ipsum. Suspe ndisse cursus malesuada facilisis.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team*/}
            {/* <section className="sectpad team-area">
                <div className="container clearfix">
                    <div className="section_header color">
                        <h2>Our Dedicated Team</h2>
                    </div>
                    <div className="row">
                        <div className="our-team">
                            <div className="col-sm-6 col-md-3 team">
                                <div className="team-images row m0">
                                    <img src="images/team/1.png" alt="" />
                                </div>
                                <ul className="nav social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-skype" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="team-content">
                                    <a href="#">
                                        <h4>John Martin</h4>
                                    </a>
                                    <p>Machine Engineer</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 team">
                                <div className="team-images row m0">
                                    <img src="images/team/2.png" alt="" />
                                </div>
                                <ul className="nav social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-skype" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="team-content">
                                    <a href="#">
                                        <h4>John Martin</h4>
                                    </a>
                                    <p>Machine Engineer</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 team">
                                <div className="team-images row m0">
                                    <img src="images/team/3.png" alt="" />
                                </div>
                                <ul className="nav social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-skype" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="team-content">
                                    <a href="#">
                                        <h4>John Martin</h4>
                                    </a>
                                    <p>Machine Engineer</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3 team">
                                <div className="team-images row m0">
                                    <img src="images/team/4.png" alt="" />
                                </div>
                                <ul className="nav social-icons">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-linkedin-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-skype" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="team-content">
                                    <a href="#">
                                        <h4>John Martin</h4>
                                    </a>
                                    <p>Machine Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* testimonial*/}
            {/* <section className="sectpad testimonial-area">
                <div className="container clearfix">
                    <div className="section_header">
                        <h2>What our client says</h2>
                    </div>
                    <div className="testimonial-sliders">
                        <div className="item">
                            <div className="media testimonial">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/testimonial/1.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                                        eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam,
                                    </p>
                                    <a href="#">- John Michale</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media testimonial">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/testimonial/2.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                                        eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam,
                                    </p>
                                    <a href="#">- John Michale</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media testimonial">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/testimonial/3.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                                        eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam,
                                    </p>
                                    <a href="#">- John Michale</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media testimonial">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/testimonial/4.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                                        eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam,
                                    </p>
                                    <a href="#">- John Michale</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media testimonial">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/testimonial/5.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                                        eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam,
                                    </p>
                                    <a href="#">- John Michale</a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="media testimonial">
                                <div className="media-left">
                                    <a href="#">
                                        <img src="images/testimonial/6.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="media-body">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do
                                        eiusmod tempor incid idunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam,
                                    </p>
                                    <a href="#">- John Michale</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Our Clients*/}
            <section className="our-client sectpad">
                <div className="container clearfix">
                    <div className="section_header">
                        <h2>Our Clients</h2>
                    </div>
                    <div className="client-carousel">
                        <div className="client-slider">
                            <div className="item">
                                <img src="images/clients/1.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="images/clients/2.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="images/clients/3.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="images/clients/4.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="images/clients/5.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="images/clients/6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="sec-padding footer-bg footer-bg3">
                <div className="container clearfix">
                    <div className="row">
                        <div className="widget about-us-widget col-md-3 col-sm-6">
                            <a href="#">
                                <img src="images/Lami_Logo_7.png" alt="" />
                            </a>
                            <p className="text-white">
                                Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim
                                ad minim.
                            </p>
                            <a className="text-color-e28743" href="about.html">
                                Read More <i className="fa fa-angle-double-right " />
                            </a>
                            <ul className="nav">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin-square" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook-square" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-skype" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-pinterest-square" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget widget-links col-md-3 col-sm-6">
                            <h4 className="widget_title">Our Products</h4>
                            <div className="widget-contact-list row m0">
                                <ul>
                                    <li>
                                        <a href="meterial.html">- Servo motor and driver</a>
                                    </li>
                                    <li>
                                        <a href="agricultural.html">- Aluminum extrusion frame</a>
                                    </li>
                                    <li>
                                        <a href="mechanical.html">- Pneumatic cylinder</a>
                                    </li>
                                    <li>
                                        <a href="chemical.html">- Various types of PLCs</a>
                                    </li>
                                    <li>
                                        <a href="power.html">- Robo cylinder</a>
                                    </li>
                                    <li>
                                        <a href="oil.html">- Modular pipe frame </a>
                                    </li>
                                    <li>
                                        <a href="oil.html">- Bearings </a>
                                    </li>
                                    <li>
                                        <a href="oil.html">- Sensor devices </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget widget-links col-md-3 col-sm-6">
                            <h4 className="widget_title">Quick Links</h4>
                            <div className="widget-contact-list row m0">
                                <ul>
                                    <li>
                                        <a href="about.html">- About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">- Services</a>
                                    </li>
                                    <li>
                                        <a href="#">- Products</a>
                                    </li>
                                    <li>
                                        <a href="news.html">- Blogs</a>
                                    </li>
                                    <li>
                                        <a href="faq.html">- Faq</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="widget widget-contact col-md-3 col-sm-6">
                            <h4 className="widget_title">Get in Touch</h4>
                            <div className="widget-contact-list row m0">
                                <ul>
                                    <li>
                                        <i className="fa fa-map-marker" />
                                        <div className="fleft location_address">
                                            187/18 street 6, Ward 7, Go Vap District, Ho Chi Minh
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-phone" />
                                        <div className="fleft contact_no">
                                            <a href="#">+ (84) 033 932 9925</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope-o" />
                                        <div className="fleft contact_mail">
                                            <a href="mailto:lamnguyen@lamiautom">
                                                lamnguyen@lamiautom
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="icon icon-Timer" />
                                        <div className="fleft service_time">Mon - Sat : 9am to 6pm</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <section className="footer-t-bottom footer-bottom footer-bottom3">
                <div className="container clearfix">
                    <div className="pull-left fo-txt">
                        <p>Copyright © Industiral 2016.. All rights reserved.</p>
                    </div>
                    <div className="pull-right fo-txt">
                        <p>
                            Downloaded From:
                            <a target="_blank" href="https://www.templateshub.net">
                                Templates Hub
                            </a>
                        </p>
                    </div>
                </div>
            </section> */}
        </>
    )
}