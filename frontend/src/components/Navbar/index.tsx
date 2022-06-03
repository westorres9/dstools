import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/js/src/collapse.js';
import './styles.css';

function Navbar() {
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <Link to="/" className="nav-logo-text">
                    <h4>DS Tools</h4>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#dstools-navbar"
                    aria-controls="dstools-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="dstools-navbar">
                    <ul className="navbar-nav offset-md-3 main-menu">
                        <li>
                            <NavLink to="/" activeClassName="active" exact>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/products" activeClassName="active" >
                                PRODUTOS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/sobre" activeClassName="active" >
                                SOBRE NÓS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName="active" >
                                LOGIN
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;