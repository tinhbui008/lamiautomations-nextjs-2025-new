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
                                                        <a href="/">Products</a>

                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/blog">Blogs</a>

                                                    </li>
                                                    <li className="has-t-submenu">
                                                        <a href="/">Shop</a>

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

            <section className="inner-banner2 clearfix">
                <div className="container clearfix">
                    <h2>Products</h2>
                </div>
            </section>

            <section className="breadcumb-wrapper">
                <div className="container clearfix">
                    <ul className="breadcumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <span>Products</span>
                        </li>
                    </ul>
                </div>
            </section>

            {/* Project  Page*/}
            <section className="core-projects sectpad">
                <div className="container clearfix">
                    <h1>Our company experts</h1>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit, aliquam quaerat voluptatem. Ut
                        enim ad minima veniam, quis nostrum exercitationem ullam corporis
                        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                    </p>
                </div>
            </section>

            {/* Projects*/}
            <section className="project-post-area sectpad">
                <div className="container-fluid clearfix">
                    <div className="project-post">
                        <div className="row">
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img4.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Servo motor and driver </h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img5.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Aluminum extrusion frame</h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img6.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Pneumatic cylinder</h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img7.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Various types of PLCs</h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-post">
                        <div className="row">
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img4.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Servo motor and driver </h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img5.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Aluminum extrusion frame</h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img6.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Pneumatic cylinder</h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
                            </div>
                            <div className="col-sm-3 project-post-info">
                                <div className="project-post-image">
                                    <a href="projects-details.html">
                                        <img src="images/projects/pro-img7.jpg" alt="" />
                                    </a>
                                    <a href="projects-details.html" className="four_arrow_hover_box">
                                        <span className="arrows">
                                            <span />
                                        </span>
                                    </a>
                                </div>
                                <div className="info-text">
                                    <a href="projects-details.html">
                                        <h4>Various types of PLCs</h4>
                                    </a>
                                    {/* <p>Oil &amp; Lubricant</p> */}
                                </div>
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
        </>
    );
}
