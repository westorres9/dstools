import 'bootstrap/js/src/collapse.js';
import './styles.css';

function Navbar () {
    return (
        <div className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
            <div className="container-fluid">
                <a href="link" className="nav-logo-text">
                    
                    <h4>DSTools</h4>
                </a>

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
                            <a href="link" className="active">HOME</a>
                        </li>
                        <li>
                            <a href="link">PRODUTOS</a>
                        </li>
                        <li>
                            <a href="link">MARCAS</a>
                        </li>
                        <li>
                            <a href="link">DEPARTAMENTOS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;