import { useEffect } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";

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
                    <NavLink 
                            to="/" 
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            Home
                        </NavLink>
                        <NavLink 
                            to="/Portfolio" 
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            Portfolio
                        </NavLink>
                        <NavLink 
                            to="/About-Me" 
                            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                            About Me
                        </NavLink>
                    </Nav>
                </div>
            </header>
        </>
    )
}

export const TitleUpdater = () => {
    const location = useLocation();
    useEffect(() => {
        const titleMap = {
            '/': 'Home',
            '/Portfolio': 'Portfolio',
            '/About-Me': 'About Me'
        }  

        const currentTitle = titleMap[location.pathname] || 'Default Title';
        document.title = currentTitle;
    }, [location]);

    return null;
}