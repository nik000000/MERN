import './Spinner.css';

function Spinner(){
    return (
        <div className="flex flex-col justify-center items-center mb-[300px]">
            <div className="spinner"></div>
            <h2>Loading...</h2>
        </div>
    );
}

export default Spinner;