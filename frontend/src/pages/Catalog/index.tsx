import './styles.css';
import ProductCard from "components/ProductCard";
import { Product } from 'types/product';

const Catalog = () => {

    const product : Product = {
        "id": 2,
        "name": "Jogo de Soquetes Estriado 8 a 32 mm",
        "description": "O Jogo de Soquetes Estriado 8 a 32 mm Encaixe 1/2\" com 22 Peças - Robust foi feito em aço cromo-vanádio proporcionando durabilidade e resistência e cabo metálico com perfil recartilhado oferecendo firmeza e ergonomia.\n",
        "fullPrice": 383.7,
        "promoPrice": 255.6,
        "financePrice": "R$ 269,05 em até 5x sem juros",
        "imgUrl": "https://user-images.githubusercontent.com/91570669/171783595-50110020-e1d1-4cd4-b43c-a1c6c420b1b1.png",
        "categories": [
          {
            "id": 2,
            "name": "Ferramentas"
          }
        ]
      }

return (
    <div className="container my-4">
        <div className="row">
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <ProductCard product={product} />
            </div>
        </div>
    </div>
);
}

export default Catalog;