import { Nav, NavLink } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export const NavHead = () => {
    const location = useLocation();
    
    return (
        <>
            <style>
                {`
                    .btn-secondary,
                    .btn-secondary:hover,
                    .btn-secondary:focus {
                        color: #333;
                        text-shadow: none;
                    }
                `}

                {`
                    .cover-container {
                        max-width: 42em;
                    }
                `}
            
                {`
                    .nav-masthead .nav-link {
                        padding: .25rem 0;
                        font-weight: 700;
                        color: rgba(201, 201, 201, 0.5);
                        background-color: transparent;
                        border-bottom: .25rem solid transparent;
                    }
                `}
            
                {`
                    .nav-masthead .nav-link:hover,
                    .nav-masthead .nav-link:focus {
                        border-bottom-color: rgba(157, 157, 157, 0.25);
                    }
                `}
            
                {`
                    .nav-masthead .nav-link + .nav-link {
                        margin-left: 1rem;
                    }
                `}
            
                {`
                    .nav-masthead .active {
                        color: #ffffff;
                        border-bottom-color: #878787;
                    }    
                `}
            
                {`
                    header {
                        position: sticky;
                        top: 0;
                        z-index: 1000;
                        text-align: center;
                        color: white;
                        background-color: rgb(68, 57, 85);
                        padding-top: 10px;
                        padding-bottom: 10px;
                    }
                `}
            
                {`
                    header h3 {
                        padding-bottom: 10px;
                    }
                `}
            </style>

            <header>
                <div>
                    <h3 class="md-start mb-0">Velius</h3>
                    <Nav className="nav-masthead justify-content-center md-end">
                        <NavLink aria-current="page" href="/" className={location.pathname === "/" ? "active" : ""}>Home</NavLink>
                        <NavLink aria-current="page" href="/Portfolio" className={location.pathname === "/Portfolio" ? "active" : ""}>Portfolio</NavLink>
                        <NavLink aria-current="page" href="/About-Me" className={location.pathname === "/About-Me" ? "active" : ""}>About Me</NavLink>
                    </Nav>
                </div>
            </header>
        </>
    )
}