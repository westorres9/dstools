import { ReactComponent as MainImage } from 'assets/images/home-image.svg';
import ButtonIcon from 'components/ButtonIcon';
import './styles.css';

function Home() {
    return (
        <div className="home-container">
            <div className="base-card home-card">
                <div className="home-content-container">
                    <h1>Conheça o melhor catálogo de Ferramentas</h1>
                    <p>
                        Só aqui você encontra as melhores ferramentas disponíveis no mercado
                    </p>
                    <a href="link">
                        <ButtonIcon />
                    </a>
                </div>
                <div className="home-image-container">
                    <MainImage />
                </div>
            </div>
        </div>
    );
}

export default Home;