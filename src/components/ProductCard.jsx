import {useState} from "react";

const ProductCard=({productId,productName,image,description, quantity, price, discount, specialPrice,about=false})=> {
    const [openProductViewModal,setOpenProductViewModal]=useState(false);
    const btnLoader=false;
    const [selectedViewProduct,setSelectedViewProduct]=useState("");
    const isAvailable=quantity && Number(quantity)>0;

    const handleProductView=(product)=>{
        if(!about){
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
        }
    }
    return (
        <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div className="w-full overflow-hidden aspect-3/2" onClick={
                ()=> {handleProductView({
                id:productId,
                productName:productName,
                image:image,
                quantity:quantity,
                price:price,
                discount:discount,
                specialPrice:specialPrice,
                description:description,
            })
            }}>
                <img className="w-100 h-100" src={image} alt={productName}/>
            </div>

        </div>
    )
}

export default ProductCard;