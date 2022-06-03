type Props = {
    fullPrice : number;
}

const FullPrice = ({fullPrice} : Props) => {
    
    return(
        <>
            <span>De R$</span>
            <h3 className="fullprice">{fullPrice}</h3>
            
        </> 
    );
}

export default FullPrice;