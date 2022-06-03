import './styles.css';
import ProductCard from "components/ProductCard";
import { Product } from 'types/product';

const Catalog = () => {

    const product : Product = {
        "id": 1,
        "name": "Bonita bico PVC Nº38",
        "description": "Botina de Segurança com elastico bico pvc Solado Bidensidade Nº38",
        "fullPrice": 65.99,
        "promoPrice": 59.99,
        "financePrice": "63.99 em 1x",
        "imgUrl": "https://user-images.githubusercontent.com/91570669/171781213-9f89350e-45ec-46dd-8329-91efe2315dbd.png",
        "categories": [
          {
            "id": 1,
            "name": "Epis"
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