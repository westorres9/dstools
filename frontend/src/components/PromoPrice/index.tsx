type Props = {
    promoPrice : number;
}


const PromoPrice = ({promoPrice} : Props) => {
    
    return(
        <>
            <span>Por R$</span>
            <h3 className="promo">{promoPrice}</h3>
        </>
        
    );
}

export default PromoPrice;