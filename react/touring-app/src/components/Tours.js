import Card from './Card';
const Tours = (props) => {
    return (
        <div className="container flex justify-center items-center flex-col">
            <div>
                <h2 className='title text-[3rem] border-dashed border-[7px] border-[rgb(1,17,160)] m-[6vh] rounded-[20px] py-[1vh] px-[5vw]'>Plan Tour With Us</h2>
            </div>
            <div className="cards flex items-center justify-center flex-wrap max-w-[1300px] mx-auto">
                {
                    props.tours.map((tour) =>{
                        return <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
};

export default Tours;