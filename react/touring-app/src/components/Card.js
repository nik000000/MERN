import {useState} from 'react';

const Card = ({id, name, info, image, price, removeTour}) => {
    const [readmore, setReadmore] = useState(false);
    let description = readmore? info:`${info.substring(0, 200)}....`;
    function readMoreHandler(){
        setReadmore(!readmore);
    }
    
    return (
        <div className="card w-[400px] h-max m-[1rem] p-[1rem] flex flex-col rounded-[10px] items-center shadow-custom-rgba hover:shadow-custom-hover duration-[0.5s] hover:scale-105">
            <img src={image} className="image w-[380px] aspect-1 object-cover" alt="not avaialable"/>
            <div className="my-[5px] mx-[20px]">
                <div className="tour-details">
                    <h4 className="text-green-800 text-[1.3rem] font-bold">₨ {price}</h4>
                    <h4 className="text-[1.5rem] font-bold">{name}</h4>
                </div>
                <div className="description-show">
                    {description}
                    <span className="read-more text-[#12b0e8] cursor-pointer" onClick={readMoreHandler}>
                        {
                            readmore ? 'Show Less' : 'Read More'
                        }
                    </span>
                </div>
            </div>

            <button onClick={() => removeTour(id)} className="btn-red mt-[18px] px-[80px] py-[10px] border-[1px] rounded-[10px] text-[18px] font-bold bg-[#b4161b21]
                   hover:bg-red-500 hover:text-white transition-all duration-[0.5s]">Not Interested</button>
        </div>
    );
};

export default Card;