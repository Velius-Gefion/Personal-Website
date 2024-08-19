import { NavHead } from "../components/utilities"
import { Row, Col, Image, Card, CardHeader, CardBody, CardFooter, Container } from "react-bootstrap";

export const AboutMe = () => {
    return (
        <>
            <Container fluid>
            <h1 className="mt-3 mb-3">About Me</h1>
            <Row className="mt-3">
                <Col>
                    <div>
                        <Card>
                            <CardHeader className="mt-3 mb-3">
                                <Image src={require('../resources/Me.jpg')} style={{width: "250px", height: "250px"}} fluid/>
                            </CardHeader>
                            <CardBody>
                                <h5>I am Cyril Dominic P. Cataraja, a Freelancer based in the Philippines</h5>
                            </CardBody>
                            <CardFooter>
                                <h5>I am a</h5>
                                <h6> - Web Developer</h6>
                                <h6>Javascript</h6>
                                <h6>Java</h6>
                                <h6>Photoshop</h6>
                                <h6>Inkscape</h6>
                                <h6>Vegas Pro 19</h6>
                                <h6> - Video Editor</h6>
                                <h6> - Grahic Designer</h6>
                            </CardFooter>
                        </Card>
                    </div>

                    <h5 style={{position: "relative", textAlign: "center", paddingTop: "20px", paddingBottom: "50px"}}>
                        You can contact me thru this email: <i class="fa-solid fa-envelope"></i> veliusgefion@gmail.com
                    </h5>
                </Col>
                <Col>
                    <iframe 
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVeliusGefion&tabs=timeline&width=450&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                        width="450" 
                        height="500" 
                        style={{border: "none",overflow:"hidden"}} 
                        frameborder="0" 
                        allowfullscreen="true" 
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                </Col>
            </Row>
            </Container>
        </>
    )
}