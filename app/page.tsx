import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header id="header" className="header-5">
        <div className="container">
          <div className="row pad-logo logo-wrapper">
            <div className="col-lg-4 col-md-3 col-sm-12 col-xs-12 t-logo">
              <a href="index-2.html">
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
                          <li className="has-t-submenu">
                            <a href="index-2.html">Home</a>
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
                            <a href="about.html">about us</a>
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
      {/* =========home banner start============*/}
      <div
        id="minimal-bootstrap-carousel"
        data-ride="carousel"
        className="carousel slide carousel-fade shop-slider full_width ver_new_5_slider"
      >
        {/* Wrapper for slides*/}
        <div role="listbox" className="carousel-inner">
          <div
            style={{
              backgroundImage: "url(images/home_page_variation5/slider/1.jpg)"
            }}
            className="item active"
          >
            <div className="carousel-caption">
              <div className="thm-container">
                <div className="box valign-top">
                  <div className="content text-left pull-left">
                    <h1 data-animation="animated fadeInLeft" className="bnrfnt40">
                      providing Good
                      <br />
                      Technolgy Solutions
                    </h1>
                    <span className="line" />
                    <p data-animation="animated fadeInRight" className="pln_he">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do <br />
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                      <br />
                      enim ad minim.
                    </p>
                    <a
                      data-animation="animated fadeInUp"
                      href="about_us.html"
                      className="view-all hvr-bounce-to-right slide_learn_btn btn btn0"
                    >
                      learn more
                    </a>
                    <a
                      data-animation="animated fadeInUp"
                      href="about_us.html"
                      className="view-all hvr-bounce-to-right slide_learn_btn btn"
                    >
                      our sevices
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url(images/home_page_variation5/slider/2.jpg)"
            }}
            className="item"
          >
            <div className="carousel-caption">
              <div className="thm-container">
                <div className="box valign-top">
                  <div className="content text-left pull-left">
                    <h1 data-animation="animated fadeInLeft" className="bnrfnt40">
                      A complete line of
                      <br />
                      products is available
                    </h1>
                    <span className="line" />
                    <p data-animation="animated fadeInRight" className="pln_he">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do <br />
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                      <br />
                      enim ad minim.
                    </p>
                    <a
                      data-animation="animated fadeInUp"
                      href="about_us.html"
                      className="view-all hvr-bounce-to-right slide_learn_btn btn btn0"
                    >
                      learn more
                    </a>
                    <a
                      data-animation="animated fadeInUp"
                      href="about_us.html"
                      className="view-all hvr-bounce-to-right slide_learn_btn btn"
                    >
                      our sevices
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: "url(images/home_page_variation5/slider/3.jpg)"
            }}
            className="item"
          >
            <div className="carousel-caption">
              <div className="thm-container">
                <div className="box valign-top">
                  <div className="content text-left pull-left">
                    <h1 data-animation="animated fadeInLeft" className="bnrfnt40">
                      expert in welding
                      <br />
                      automation
                    </h1>
                    <span className="line" />
                    <p data-animation="animated fadeInRight" className="pln_he">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do <br />
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
                      <br />
                      enim ad minim.
                    </p>
                    <a
                      data-animation="animated fadeInUp"
                      href="about_us.html"
                      className="view-all hvr-bounce-to-right slide_learn_btn btn btn0"
                    >
                      learn more
                    </a>
                    <a
                      data-animation="animated fadeInUp"
                      href="about_us.html"
                      className="view-all hvr-bounce-to-right slide_learn_btn btn"
                    >
                      our sevices
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Controls*/}
        <a
          href="#minimal-bootstrap-carousel"
          role="button"
          data-slide="prev"
          className="left carousel-control"
        >
          <i className="fa fa-angle-left" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          href="#minimal-bootstrap-carousel"
          role="button"
          data-slide="next"
          className="right carousel-control"
        >
          <i className="fa fa-angle-right" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* =========home banner end============*/}
      {/* Control in compliance*/}
      <section className="container ind-common-pad2 clearfix">
        <div className="quality-wrapper text-center">
          <div className="vision tab-panel fade in">
            <h2>
              A hight level Quality Control in compliance with National and In
              International regulations and standards
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Consect petur adipiscing elit. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="values tab-panel fade hide">
            <h2>
              A hight level Quality Control in compliance with National and In
              International regulations and standards
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Consect petur adipiscing elit. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="mission tab-panel fade hide">
            <h2>
              A hight level Quality Control in compliance with National and In
              International regulations and standards
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Consect petur adipiscing elit. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
          <div className="vision-wrapper text-center">
            <ul>
              <li>
                <a id="vision" href="javascript:void(0)">
                  <img src="images/services/ser-icon4.png" alt="" />
                  <p>Vision</p>
                </a>
              </li>
              <li>
                <a id="values" href="javascript:void(0)">
                  <img src="images/services/ser-icon5.png" alt="" />
                  <p>Values</p>
                </a>
              </li>
              <li>
                <a id="mission" href="javascript:void(0)">
                  <img src="images/services/ser-icon6.png" alt="" />
                  <p>Mission</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Control in compliance*/}
      {/* Team*/}
      <section className="team-wrapper team-wrapper4 clearfix">
        <div className="container clearfix">
          <div className="our-team-page">
            <div className="section_header2">
              <h2>Our Services</h2>
              <div className="decor-line" />
            </div>
            <div className="row event-pad">
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/services/custom_machinery_design_and_manufacture.jpg" alt="" />
                  <div className="caption">
                    <h2>CUSTOM MACHINERY DESIGN AND MANUFACTURE</h2>
                    <p>
                      Provide tailored solutions for designing and manufacturing custom machinery to meet specific production needs.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/services/custom_machinery_design_and_manufacture.jpg" alt="" />
                  <div className="caption">
                    <h2>CONCEPT DESIGN AND RAPID 3D MODEL</h2>
                    <p>
                      We offer innovative concept design and fast 3D modeling services to bring ideas to life quickly and efficiently.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/services/custom_machinery_design_and_manufacture.jpg" alt="" />
                  <div className="caption">
                    <h2>AUTOMATION SUPPORT AND MAINTENANCE </h2>
                    <p>
                      We provide automation support and maintenance to ensure stable operation and maximize efficiency.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/services/custom_machinery_design_and_manufacture.jpg" alt="" />
                  <div className="caption">
                    <h2>PRECISION MACHINING SERVICES </h2>
                    <p>
                      We provide high-accuracy precision machining services to produce complex components with tight tolerances.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/team/4-5.jpg" alt="" />
                  <div className="caption">
                    <h2>ELECTRICAL AND MECHANICAL INSTALLATION</h2>
                    <p>
                      We offer electrical and mechanical installation services for seamless integration.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/team/4-6.jpg" alt="" />
                  <div className="caption">
                    <h2>ROBOTS AND ROBOTIC AUTOMATION</h2>
                    <p>
                      We provide cutting-edge collaborative robot technologies for enhanced efficiency
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 team">
                <div className="box-img">
                  <img src="images/team/4-6.jpg" alt="" />
                  <div className="caption">
                    <h2>SAFETY COVER</h2>
                    <p>
                      We design custom safety covers using durable materials for compliance and efficiency
                    </p>
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest News*/}
      <section className="latest-news1 sectpad about-us5">
        <div className="container clearfix">
          <div className="row">
            <div className="col-lg-6 about-sec-content">
              <div className="section_header2 common">
                <h2>About Us</h2>
              </div>
              <div className="row event-pad" />
              <h4>
                Tdolor sit amet, consectetur, adipis civelit sed quia non qui
                dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red
                quia numquam.
              </h4>
              <p>
                Tdolor sit amet, consectetur, adipis civelit sed quia non qui
                dolorem ipsum quia dolor sit amet, consectetur, adipis civelit. Red
                quia numquam.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="fa fa-arrow-circle-right" /> Our Company Growth
                    </li>
                    <li>
                      <i className="fa fa-arrow-circle-right" /> 1000 Employed
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      <i className="fa fa-arrow-circle-right" /> Our Company Growth
                    </li>
                    <li>
                      <i className="fa fa-arrow-circle-right" /> Customer
                      Relationship
                    </li>
                  </ul>
                </div>
              </div>
              <div className="req-button about-but text-left">
                <a href="about.html" className="submit">
                  About Us <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="section-faq">
                <div className="section_header2 common">
                  <h2>Frequently Ask questions</h2>
                </div>
                <div className="accordian-area accordian-area-pad">
                  <div
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                    className="panel-group"
                  >
                    <div className="panel panel-default">
                      <div id="headingOne" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                            className="collapsed"
                          >
                            <span>WE offer luxury service to our customer</span>
                            <i className="fa fa-minus" />
                            <i className="fa fa-plus" />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body faq-content">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div id="headingTwo" role="tab" className="panel-heading">
                        <h4 className="panel-title on">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            WE offer luxury service to our customer
                            <i className="fa fa-minus" />
                            <i className="fa fa-plus" />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        className="panel-collapse collapse in"
                      >
                        <div className="panel-body faq-content">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div id="headingThree" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            className="collapsed"
                          >
                            WE offer luxury service to our customer
                            <i className="fa fa-minus" />
                            <i className="fa fa-plus" />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body faq-content">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div id="headingFour" role="tab" className="panel-heading">
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                            className="collapsed"
                          >
                            WE offer luxury service to our customer
                            <i className="fa fa-minus" />
                            <i className="fa fa-plus" />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseFour"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        className="panel-collapse collapse"
                      >
                        <div className="panel-body faq-content">
                          <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                            aut odit aut fugit, sed quia consequuntur magni dolores
                            eos qui ratione voluptatem sequi nesciunt.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Our Projects*/}
      <section className="our-galler-five clearfix">
        <div className="container clearfix">
          <div className="section_header common">
            <h2 className="white">Our Projects</h2>
          </div>
        </div>
        <div className="fullwidth-silder2">
          <div className="fullwidth-slider2">
            <div className="item project_img">
              <img src="images/projects/servo_motor_and_driver.png" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Servo motor and driver</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/our-projects/our-project2-2.jpg" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Aluminum extrusion frame</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/our-projects/our-project2-3.jpg" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Pneumatic cylinder</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/our-projects/our-project2-4.jpg" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Various types of PLCs</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/our-projects/our-project2-5.jpg" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Robo cylinder</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/projects/servo_motor_and_driver.png" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Modular pipe frame</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/our-projects/our-project2-5.jpg" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Bearings</h6>
              </div>
            </div>
            <div className="item project_img">
              <img src="images/our-projects/our-project2-5.jpg" alt="" />
              <div className="project_txt_btn">
                <a
                  href="#"
                  className="view-all desi-bounce-to-right slide_learn_btn view_project_btn"
                >
                  view project
                </a>
                <h6>Sensor devices</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LOOKING AN ADEQUATE*/}
      <section className="looking-wrapper clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
              <div className="indurial-solution-text2">
                <h2>LOOKING AN ADEQUATE SOLUTION FOR YOUR COMPANY?</h2>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-right">
              <div className="req-button text-right">
                <a href="contact.html" className="submit">
                  Contact Us <i className="fa fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LOOKING AN ADEQUATE*/}
      {/* Lattest news*/}
      <div className="container clearfix sectpad-sec">
        <div className="section_header2 common">
          <h2>Lattest news</h2>
        </div>
        <div className="row event-pad">
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="news-evn-img">
              <a href="news.html" className="image_hover">
                <img
                  src="images/event/1.jpg"
                  alt=""
                  className="img-responsive zoom_img_effect"
                />
              </a>
              <div className="event-date">
                <h3>
                  05 <small>Aug</small>
                </h3>
              </div>
            </div>
            <div className="news-evn-cont">
              <div className="news-meta">
                <a href="news.html">By: Anjori Meyami</a>
                <a href="news.html"> Comments: 6</a>
              </div>
              <a href="news.html">
                <h3>The Surprising Reason College Tuition Is Crazy Expensive</h3>
              </a>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa nt ium doloremque laudantium totam rem aperiam
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="news-evn-img">
              <a href="news.html" className="image_hover">
                <img
                  src="images/event/2.jpg"
                  alt=""
                  className="img-responsive zoom_img_effect"
                />
              </a>
              <div className="event-date">
                <h3>
                  05 <small>Aug</small>
                </h3>
              </div>
            </div>
            <div className="news-evn-cont">
              <div className="news-meta">
                <a href="news.html">By: Anjori Meyami</a>
                <a href="news.html"> Comments: 6</a>
              </div>
              <a href="news.html">
                <h3>The Surprising Reason College Tuition Is Crazy Expensive</h3>
              </a>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa nt ium doloremque laudantium totam rem aperiam
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="news-evn-img">
              <a href="news.html" className="image_hover">
                <img
                  src="images/event/3.jpg"
                  alt=""
                  className="img-responsive zoom_img_effect"
                />
              </a>
              <div className="event-date">
                <h3>
                  05 <small>Aug</small>
                </h3>
              </div>
            </div>
            <div className="news-evn-cont">
              <div className="news-meta">
                <a href="news.html">By: Anjori Meyami</a>
                <a href="news.html"> Comments: 6</a>
              </div>
              <a href="news.html">
                <h3>The Surprising Reason College Tuition Is Crazy Expensive</h3>
              </a>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusa nt ium doloremque laudantium totam rem aperiam
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter*/}
      <section className="newsletter">
        <div className="container">
          <div className="inn">
            <h2>Newsletter</h2>
            <div className="row">
              <div className="col-md-5">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusa nt ium doloremque laudantium totam.
                </p>
              </div>
              <div className="col-md-5">
                <input type="text" name="newsletter" />
              </div>
              <div className="col-md-2">
                <div className="req-button text-right">
                  <a href="contact.html" className="submit">
                    Subscribe
                    <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="map-area">
        <div
          id="contact-google-map"
          data-map-lat="-37.812802"
          data-map-lng="144.956981"
          data-icon-path="images/map/map-marker.png"
          data-map-title="Envato HQ"
          data-map-zoom={12}
          className="google-map"
        />
      </section>
      {/* Indurial Solution*/}
      <section className="indurial-t-solution indurial-solution indpad anim-5-all indurial-t-solution3">
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
      </section>
      {/* Indurial Solution*/}
      <footer className="sec-padding footer-bg footer-bg3">
        <div className="container clearfix">
          <div className="row">
            <div className="widget about-us-widget col-md-3 col-sm-6">
              <a href="#">
                <img src="images/header/f-logo2.png" alt="" />
              </a>
              <p>
                Lorem ipsum dolor sit amet, consectet ur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna ali qua. Ut enim
                ad minim.
              </p>
              <a href="about.html">
                Read More <i className="fa fa-angle-double-right" />
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
      <section className="footer-t-bottom footer-bottom footer-bottom3">
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
      </section>
    </>
  );
}
