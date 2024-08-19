import { useEffect } from "react";
import { NavHead } from "../components/utilities"
import { Carousel, Image, Row, Col, Card, CardBody, Button } from "react-bootstrap";

export const Portfolio = () => {
    return (
        <>
            <style>
                {`
                    .portfolio-container {
                        display: flex;
                        min-height: 100vh;
                    }

                    .sidebar {
                        margin-top: 60px;
                        position: fixed;
                        top: 40px;
                        height: calc(100vh - 60px);
                        width: 250px;
                        background-color: #333;
                        color: white;
                        padding: 20px;
                        overflow-y: auto;
                    }

                    .main-content {
                        margin-left: 250px;
                        padding: 0;
                        background-color: #f4f4f4;
                        width: calc(100% - 250px);
                    }

                    .main-content h1 {
                        margin-top: 0;
                        text-align: left;
                        margin-left: 25px;
                    }

                    .sidebar ul {
                        list-style-type: none;
                        padding: 0;
                    }

                    .sidebar ul li {
                        margin-bottom: 15px;
                    }

                    .sidebar ul li a {
                        color: white;
                        text-decoration: none;
                    }

                    .sidebar ul li a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>

            <div className="portfolio-container">
                <div className="sidebar">
                    <ul style={{textAlign: "left"}}>
                        <li><a href="#logo">Logo</a></li>
                        <li><a href="#poster">Poster</a></li>
                        <li><a href="#motion-graphics">Motion Graphics</a></li>
                        <li><a href="#videos">Videos</a></li>
                        <li><a href="#websites">Functional Sample Websites</a></li>
                    </ul>
                </div>

                <div className="main-content">
                    <h1 className="mt-3 mb-3">Portfolio</h1>
                    
                    
                    
                    <div id="logo" style={{position:"relative", top: "-110px"}}/>
                    <h3>Logo</h3>
                    <hr/>
                    <h3>Sample Logo 1 - Katsun Restaurant</h3>
                    <Row className="d-flex justify-content-center align-items-center vh-100" style={{maxWidth:"1000px", maxHeight:"500px", width:"100%", margin:"0 auto", overflow:"hidden"}}>
                        <Col>
                            <Card style={{minWidth: "100px", minHeight: "100px", maxWidth: "400px", maxHeight: "400px"}}>
                                <CardBody>
                                    <Image src={require('../resources/katsun.png')} fluid/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Carousel>
                                    <Carousel.Item>
                                        <Image src={require('../resources/Mock_Katsun_1.png')} fluid/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={require('../resources/Mock_Katsun_2.png')} fluid/>
                                    </Carousel.Item>
                                </Carousel>
                            </Card>
                        </Col>
                    </Row>
                    <h3>Sample Logo 2 - Supreme Student Council</h3>
                    <Row className="d-flex justify-content-center align-items-center vh-100" style={{maxWidth:"1000px", maxHeight:"500px", width:"100%", margin:"0 auto", overflow:"hidden"}}>
                        <Col>
                            <Card style={{minWidth: "100px", minHeight: "100px", maxWidth: "400px", maxHeight: "400px"}}>
                                <CardBody>
                                    <Image src={require('../resources/SSC_Logo.png')} fluid/>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <div className="d-flex justify-content-center align-items-center vh-100" style={{maxWidth:"1000px", maxHeight:"500px", width:"100%", margin:"0 auto", overflow:"hidden"}}>
                                <Carousel>
                                    <Carousel.Item>
                                        <Image src={require('../resources/Mock_SSC_1.png')} fluid/>
                                        <Carousel.Caption>
                                            <h3>1</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image src={require('../resources/Mock_SSC_2.png')} fluid/>
                                        <Carousel.Caption>
                                            <h3>2</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>

                    <div id="poster" style={{position:"relative", top: "-110px"}}/>
                    <h3>Poster</h3>
                    <hr/>
                    <Row className="d-flex justify-content-center align-items-center vh-100" style={{maxWidth:"1000px", maxHeight:"500px", width:"100%", margin:"0 auto", overflow:"hidden"}}>
                        <Col>
                            <Image src={require('../resources/Tri-hop.png')} fluid/>
                        </Col>
                        <Col>
                            <Image src={require('../resources/Lj.png')} fluid/>
                        </Col>
                    </Row>

                    <div id="motion-graphics" style={{position:"relative", top: "-110px"}}/>
                    <h3>Motion Graphics</h3>
                    <hr/>
                    <Image src={require('../resources/Stand by Screen (Stationary).gif')} fluid/>
                    
                    <div id="videos" style={{position:"relative", top: "-110px"}}/>
                    <h3 >Videos</h3>
                    <hr/>
                    <iframe 
                        src="https://www.youtube.com/watch?v=qE9O81SL2s4" 
                        width="560" 
                        height="314" 
                        style={{ border: "none", overflow: "hidden" }} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                        allowFullScreen={true}
                    ></iframe>

                    <div id="websites" style={{position:"relative", top: "-110px"}}/>
                    <h3>Functional Sample Websites</h3>
                    <hr/>
                    <Row>
                        <Col>
                            <Button className="mt-3 mb-3" href="https://sei-qr-code-ticket.web.app/">Visit Website</Button>
                            <embed src="https://sei-qr-code-ticket.web.app/" style={{width:"500px", height: "300px"}}></embed>
                        </Col>
                        <Col>
                            <Button className="mt-3 mb-3" href="https://badat-health-tracking.web.app/">Visit Website</Button>
                            <embed src="https://badat-health-tracking.web.app/" style={{width:"500px", height: "300px"}}></embed>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
}