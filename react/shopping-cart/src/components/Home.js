import {useEffect, useState} from 'react';
import Card from './Card';
import Spinner from './Spinner';

const Home = () =>{
    const [loading, setLoading] = useState(false);
    const API_PRODUCTS = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    async function getProducts(){
        setLoading(true);
        try{
            const res = await fetch(API_PRODUCTS);
            const data = await res.json();
            setProducts(data);
        }catch(e){
            console.log("something went wrong")
        }
        setLoading(false);
    }

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div className="flex justify-center w-4/6 mx-auto mt-[40px] ">
            {
                loading ? (<div className="flex flex-col justify-center items-center mt-[40px]"><Spinner/></div>) : (products.length === 0 ? (<div>No Products Found</div>):(<div className="flex flex-wrap justify-center items-center gap-4 mb-[40px]">
                    {
                        products.map((product)=>{
                            return(<Card key={product.id} product={product}/>);
                        })
                    }
                </div>))
            }
        </div>
    );
};

export default Home;