import React from 'react'

export default function Service() {
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
                                                        <a href="/">Home</a>

                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/about">about us</a>

                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/service">services</a>
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
                                                        <a href="/product">Products</a>

                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/blog">Blogs</a>

                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/shop">Shop</a>

                                                    </li>
                                                    <li>
                                                        <a href="/contact">contact us</a>
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

            <section className="inner-banner2 clearfix">
                <div className="container clearfix">
                    <h2>Services</h2>
                </div>
            </section>
            <section className="breadcumb-wrapper">
                <div className="container clearfix">
                    <ul className="breadcumb">
                        <li>
                            <a href="index-2.html">Home</a>
                        </li>
                        <li>
                            <span>Services</span>
                        </li>
                    </ul>
                </div>
            </section>
            {/* About us Content Tab Sec*/}
            {/* <section className="service-tab-box sectpad">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-xs-12 left=ser">
                            <h1>expertise in industrial solution</h1>
                            <p>
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                                ipsum quia dolor sit amet, consectetur, adipisci velit,
                            </p>
                            <h6>sed quia non numquam eius modi tempora incidunt ut</h6>
                            <p>
                                aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                                ex ea commodi consequatur?
                            </p>
                            <ul className="c-brochure">
                                <li>
                                    <a href="#" className="clearfix">
                                        <i className="fa fa-download" />
                                        <span>Download Company Brochure</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-md-5 col-xs-12 right-ser">
                            <div className="img-s-box">
                                <div className="img-st-box">
                                    <img src="images/services/ser-p-img2.jpg" alt="" />
                                </div>
                                <div className="img-so-box">
                                    <img src="images/services/ser-p-img1.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* Our Services*/}
            <section className="our-services sectpad-ser">
                <div className="container clearfix">
                    <div className="section_header color">
                        <h2>Our Services</h2>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img1.jpg" alt="" />
                                    <a href="mechanical.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="mechanical.html">
                                    <h4>CUSTOM MACHINERY DESIGN AND MANUFACTURE</h4>
                                </a>
                                <p>
                                    Provide tailored solutions for designing and manufacturing custom machinery to meet specific production needs
                                </p>
                                <h6>
                                    <a href="mechanical.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img2.jpg" alt="" />
                                    <a href="agricultural.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="agricultural.html">
                                    <h4>CONCEPT DESIGN AND RAPID 3D MODEL</h4>
                                </a>
                                <p>
                                    We offer innovative concept design and fast 3D modeling services to bring ideas to life quickly and efficiently.
                                </p>
                                <h6>
                                    <a href="agricultural.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img3.jpg" alt="" />
                                    <a href="oil.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="oil.html">
                                    <h4>AUTOMATION SUPPORT AND MAINTENANCE</h4>
                                </a>
                                <p>
                                    We provide automation support and maintenance services to  ensure your machinery operates stably, minimizes downtime
                                </p>
                                <h6>
                                    <a href="oil.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img4.jpg" alt="" />
                                    <a href="power.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="power.html">
                                    <h4>PRECISION MACHINING SERVICES </h4>
                                </a>
                                <p>
                                    We provide high-accuracy precision machining services to produce complex components with tight tolerances, supporting various industries and applications.
                                </p>
                                <h6>
                                    <a href="power.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img5.jpg" alt="" />
                                    <a href="chemical.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="chemical.html">
                                    <h4>ELECTRICAL AND MECHANICAL INSTALLATION</h4>
                                </a>
                                <p>
                                    We offer comprehensive electrical and mechanical installation services to ensure seamless integration.
                                </p>
                                <h6>
                                    <a href="chemical.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img6.jpg" alt="" />
                                    <a href="meterial.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="meterial.html">
                                    <h4>ROBOTS AND ROBOTIC AUTOMATION</h4>
                                </a>
                                <p>
                                    Our expertise in robots and robotic automation allows us to provide the very latest in collaborative robot technologies across all industry sectors.
                                </p>
                                <h6>
                                    <a href="meterial.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4 service-info">
                            <div className="item">
                                <div className="post-image">
                                    <img src="images/services/ser-img5.jpg" alt="" />
                                    <a href="chemical.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <a href="chemical.html">
                                    <h4>SAFETY COVER</h4>
                                </a>
                                <p>
                                    Design and install custom safety covers to protect operators and equipment.
                                    Using durable materials like polycarbonate or metal mesh, we ensure compliance with safety standards (ISO, OSHA).
                                </p>
                                <h6>
                                    <a href="chemical.html">Read more</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            {/* Indurial Solution*/}
            {/* <section className="indurial-t-solution indurial-solution indpad anim-5-all indurial-t-solution3">
                <div className="container clearfix">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="indurial-solution-text text-center">
                                <h2>
                                    If You Need Any Industrial Solution ... We Are Available For You
                                </h2>
                                <span className="contactus-button2 text-center">
                                    <a href="contact.html" className="submit">
                                        Contact Us{" "}
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

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
                                        <a href="/bout">- About Us</a>
                                    </li>
                                    <li>
                                        <a href="/service">- Services</a>
                                    </li>
                                    <li>
                                        <a href="/product">- Products</a>
                                    </li>
                                    <li>
                                        <a href="/blog">- Blogs</a>
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
        </>
    )
}