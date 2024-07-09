import useFetch from './hooks/useFetch';
import {useState} from 'react';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const CustomHookUse = () => {
  const [url, setUrl] = useState(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const { data, loading, error } = useFetch(url);

  const generateGif = () => {
    setUrl(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&timestamp=${new Date().getTime()}`);
  };

  return (
    <div className="flex flex-col items-center border-2 rounded-md w-[700px] bg-[#26e126] gap-3 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Gif From Custom Hook</h1>
        <div className="w-full border-2 h-[2px]"></div>
      </div>
   
      {loading ? (
        <div className="flex flex-col items-center justify-center h-full">
          <svg className="animate-spin h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Loading...</p>
        </div>
      ) :  (
        <img src={data.data.images.downsized_large.url} alt="Random GIF" className="w-[300px] h-[300px] border-2" />
      )}
      <button
        className="w-[450px] border-1 h-[50px] bg-green-100 transition transform hover:bg-blue-500 active:scale-95 active:bg-blue-900 focus:outline-none"
        onClick={generateGif}
      >
        Generate
      </button>
    </div>
  );
};

export default CustomHookUse;
