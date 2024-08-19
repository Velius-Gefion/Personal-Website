import { useEffect } from "react";
import { NavHead } from "../components/utilities"
import { Carousel, Image, Row, Col, Card } from "react-bootstrap";

export const Portfolio = () => {
    
    return (
        <>
            <style>
                {`
                    .portfolio-container {
                        display: flex;
                        min-height: 100vh;
                    }
                `}

                {`
                    .sidebar {
                        margin-top: 40px;
                        position: fixed;
                        top: 60px; /* Adjust based on header height */
                        height: calc(100vh - 60px); /* Adjust based on header height */
                        width: 250px;
                        background-color: #333;
                        color: white;
                        padding: 20px;
                        overflow-y: auto; /* Allows sidebar to scroll if content overflows */
                    }
                `}

                {`
                    .sidebar ul {
                        list-style-type: none;
                        padding: 0;
                    }
                `}

                {`
                    .sidebar ul li {
                        margin-bottom: 15px;
                    }
                `}

                {`
                    .sidebar ul li a {
                        color: white;
                        text-decoration: none;
                    }
                `}

                {`
                    .sidebar ul li a:hover {
                        text-decoration: underline;
                    }
                `}

                {`
                    .main-content {
                        flex: 1;
                        padding: 20px;
                        background-color: #f4f4f4;
                    }
                `}

                {`
                    .main-content h1 {
                        margin-top: 0;
                    }
                `}
            </style>
            <NavHead/>

            

            
            <div className="portfolio-container">
                <div className={`d-none d-lg-flex flex-column flex-shrink-0 p-3 text-white bg-dark`}>
                    {/*<div className="d-flex justify-content-center align-items-center mb-3">*/}
                    <div >
                        <ul>
                            <li><a href="#section1">Videos</a></li>
                            <li><a href="#section2">Logo</a></li>
                            <li><a href="#section3">Post</a></li>
                        </ul>
                    </div>
                </div>
                <div className="main-content">
                    <h1>Portfolio</h1>
                            
                    <hr/>
                    <h2>Videos</h2>

                    <iframe 
                        src="https://www.youtube.com/watch?v=qE9O81SL2s4" 
                        width="560" 
                        height="314" 
                        style={{ border: "none", overflow: "hidden" }} 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                        allowFullScreen={true}
                    ></iframe>
                        <hr/>
                        <h1>Logo</h1>
                        <hr/>
                        <Row>
                            <Col>
                                <h1>
                                    Mock up
                                </h1>
                                
                            </Col>
                            <Col>
                            <div className="d-flex justify-content-center align-items-center vh-100" style={{maxWidth:"1000px", maxHeight:"500px", width:"100%", margin:"0 auto", overflow:"hidden"}}>
                                <Card>
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
                                    <Carousel.Item>
                                        <Image src={require('../resources/Mock_Katsun_1.png')} fluid/>
                                        <Carousel.Caption>
                                            <h3>3</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item><Carousel.Item>
                                        <Image src={require('../resources/Mock_Katsun_2.png')} fluid/>
                                        <Carousel.Caption>
                                            <h3>4</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                </Card>
                                </div>
                            </Col>
                        </Row>
                        
                    <h1>Motion Graphics</h1>
                    <Image src={require('../resources/Stand by Screen (Stationary).gif')} fluid/>
                    <h1></h1>
                    <h1>Sample Websites</h1>
                    <embed src="https://sei-qr-code-ticket.web.app/"  style={{width:"500px", height: "300px"}}></embed>
                    <embed src="https://badat-health-tracking.web.app/" style={{width:"500px", height: "300px"}}></embed>
                </div>
            </div>
        </>
    )
}