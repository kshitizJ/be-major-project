/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useRef } from "react";
// react plugin used to create charts
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

export default function LandingPage() {
  const vidRef1 = useRef(null);
  const vidRef2 = useRef(null);
  const vidRef3 = useRef(null);
  const vidRef4 = useRef(null);
  const vidRef5 = useRef(null);
  const vidRef6 = useRef(null);


  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  const playAll = (e) => {
    e.preventDefault();
    vidRef1.current.play();
    vidRef2.current.play();
    vidRef3.current.play();

  }
  const diffPlay = (e) => {
    e.preventDefault();
    vidRef4.current.play();
    vidRef5.current.play();
    vidRef6.current.play();
  }
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("assets/img/blob.png")}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path2.png")}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/img/triunghiuri.png")}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/img/waves.png")}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/img/patrat.png")}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/img/cercuri.png")}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  3D Photography Using <br />Context-aware Layered <br />Depth Inpainting
                  {/* <span className="text-white">secured</span> */}
                </h1>
                <p className="text-white mb-3">
                  3D photography capturing views of the world with a camera and using
                  image-based rendering techniques for novel view synthesis is a fascinating
                  way to record and reproduce visual perception...
                </p>
                {/* <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    From 9.99%/mo
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div> */}
                {/* <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div> */}
              </Col>
              <Col lg="5" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/camera.png")}
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section section-lg">
          <section className="section">
            <img
              alt="..."
              className="path"
              src={require("assets/img/path4.png")}
            />
            <Container>
              <Row className="justify-content-between">
                <Col lg="12">
                  <h1 className="text-center">Our Output</h1>
                </Col>
                <Col md="3" className="my-4 video-section">
                  <video ref={vidRef1} width="400" height="300" src={require("assets/videos/omkar/circle.mp4")} controls="controls" />
                </Col>
                <Col md="3" className="my-4 video-section">
                  <video ref={vidRef2} width="400" height="300" src={require("assets/videos/omkar/swing.mp4")} controls="controls" />
                </Col>
                <Col md="3" className="my-4 video-section">
                  <video ref={vidRef3} width="400" height="300" src={require("assets/videos/omkar/zoom_in.mp4")} controls="controls" />
                </Col>
                <Col lg="12">
                  <Button className="btn" onClick={playAll}>Play All</Button>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <section className="section section-lg">
          {/* <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          /> */}
          <img
            alt="..."
            className="path2"
            src={require("assets/img/path5.png")}
          />
          <img
            alt="..."
            className="path3"
            src={require("assets/img/path2.png")}
          />
          <Container>
            <Row className="justify-content-between">
              <Col lg="12">
                <h1 className="text-center">Difference</h1>
              </Col>
              <Col md="3" className="my-4 video-section">
                <video ref={vidRef4} width="400" height="300" src={require("assets/videos/duck/previous_swing.mp4")} controls="controls" />
              </Col>
              <Col md="3" className="my-4 video-section">
                <video ref={vidRef5} width="400" height="300" src={require("assets/videos/duck/middle_swing.mp4")} controls="controls" />
              </Col>
              <Col md="3" className="my-4 video-section">
                <video ref={vidRef6} width="400" height="300" src={require("assets/videos/duck/swing.mp4")} controls="controls" />
              </Col>
              <Col lg="12">
                <Button className="btn" onClick={diffPlay}>Play All</Button>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={require("assets/img/path5.png")}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/chester-wade.jpg")}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">Safe</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">573 K</CardTitle>
                        <p className="card-category text-white">
                          Satisfied customers
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">10 425</CardTitle>
                        <p className="card-category text-white">Business</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Awesome features</h3>
                  <p>
                    The design system comes with three pre-built pages to help
                    you get started faster. You can change the text and images
                    and you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <Footer />
      </div>
    </>
  );
}
