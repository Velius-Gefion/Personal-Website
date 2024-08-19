import React from "react";
import { NavHead } from "../components/utilities";
import { Row, Col } from "react-bootstrap";


export function HomePage() {
    return (
        <>
            <style>
                {`
                    .container {
                        display: flex;
                        flex-wrap: wrap;
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
                `}

                {`
                    .container > div {
                        flex: 1;
                        min-width: 0;
                    }
                `}
            
                {`
                    .container > div > div {
                        margin: 0 10px;
                    }
                `}
            </style>
            <Row className="mt-3">
                <Col>
                    <div className="container">
                        <h1>Hey from HomePage</h1>
                        <p>This is your awesome HomePage subtitle</p>
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
        </>
    );
}