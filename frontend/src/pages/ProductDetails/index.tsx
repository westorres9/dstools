import {ReactComponent as ArrowIcon} from 'assets/images/arrow.svg';
import ProductImg from 'assets/images/product.png';
import FinancePrice from 'components/FinancePrice';
import FullPrice from 'components/FullPrice';
import PromoPrice from 'components/PromoPrice';

const ProductDetails = () => {
    return (
        <div className="product-details-container">
            <div className="product-details-card">
                <div className="goback-container">
                    <ArrowIcon/>
                    <h2>VOLTAR</h2>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="img-container">
                            <img src={ProductImg} alt="imagem do produto" />
                        </div>
                        <div className="name-price-container">
                            <h2>Bonita bico PVC Nº38</h2>
                            <div className='product-price-container'>
                            <FullPrice fullPrice={65.99} />
                            <PromoPrice promoPrice={59.99} />
                        </div>
                        <div className="finance-price">
                            <FinancePrice financePrice={"63.99 em 1x"}/>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="description-container">
                            <h2>Descrição do produto</h2>
                            <p>Botina de Segurança com elastico bico pvc Solado Bidensidade Nº38"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;