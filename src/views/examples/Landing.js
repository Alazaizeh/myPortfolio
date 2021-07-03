/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import profile from "assets/img/theme/profile.jpg";
// index page sections
import Download from "../IndexSections/Download.js";

// project
import p1 from "assets/img/theme/proj/p1.png";
import p2 from "assets/img/theme/proj/p2.png";
import p3 from "assets/img/theme/proj/p3.png";
import p4 from "assets/img/theme/proj/p4.png";
import p5 from "assets/img/theme/proj/p5.png";
import p6 from "assets/img/theme/proj/p6.png";
import p7 from "assets/img/theme/proj/p7.png";
class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-10">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-5">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-1 text-white">
                        My Projects :
                        {/* <span>completed with examples</span> */}
                      </h1>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          {/* <section className="section section-lg pt-lg-0 mt--200"></section> */}
          <Container className="container-lg">
            <Row style={{ marginBottom: "30px" }}>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link
                    to={{
                      pathname: "https://omx302.github.io/cookie-stand/",
                    }}
                    target="_blank"
                  >
                    <CardImg alt="..." src={p1} />
                  </Link>
                </Card>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Salmon Cookies
                </h1>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link
                    to={{
                      pathname: "https://omx302.github.io/meditation/",
                    }}
                    target="_blank"
                  >
                    <CardImg alt="..." src={p2} />
                  </Link>
                </Card>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Meditation
                </h1>
              </Col>
            </Row>
            <Row style={{ marginBottom: "30px" }}>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link
                    to={{
                      pathname: "https://omx302.github.io/About-Me/",
                    }}
                    target="_blank"
                  >
                    <CardImg alt="..." src={p7} />
                  </Link>
                </Card>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Who Am I
                </h1>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link
                    to={{
                      pathname: "https://omx302.github.io/MemoryCards/",
                    }}
                    target="_blank"
                  >
                    <CardImg alt="..." src={p4} />
                  </Link>
                </Card>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Memory Game
                </h1>
              </Col>
            </Row>
            <Row style={{ marginBottom: "100px" }}>
              <Col className="mb-5 mb-md-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link
                    to={{
                      pathname: "https://okashininjas.github.io/Okashi/",
                    }}
                    target="_blank"
                  >
                    <CardImg alt="..." src={p5} />
                  </Link>
                </Card>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Okashi
                </h1>
              </Col>
              <Col className="mb-5 mb-lg-0" md="6">
                <Card className="card-lift--hover shadow border-0">
                  <Link
                    to={{
                      pathname: "https://practical-wiles-0b1406.netlify.app/",
                    }}
                    target="_blank"
                  >
                    <CardImg alt="..." src={p6} />
                  </Link>
                </Card>
                <h1 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Horned Beasts
                </h1>
              </Col>
            </Row>
          </Container>
          {/* <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="12">
                      <h3 className="text-white">
                        ALL PROGRESS TAKES PLACE OUTSIDE THE COMFORT ZONE
                      </h3>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section> */}
          <section className="section section-lg"></section>
          {/* <section className="section section-lg"></section> */}
          <section className="section section-lg bg-gradient-default">
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Interested in working together?</h4>
                      <p className="mt-0">
                        Your project is very important to us.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={() =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={() =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
