import axios from 'axios';
import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [loading, setLoading] = useState(false);

  const fetchData = async (url, retries = 3, backoff = 300) => {
    if (!API_KEY) {
        console.error('Invalid API key');
      return;
    }
    setLoading(true);
    try {
      console.log("Fetching GIF...");
      const { data } = await axios.get(url);
      console.log(data);
      const imageUrl = data.data.images.downsized_large.url;
      console.log(imageUrl);
      setGif(imageUrl);
      console.log("updated the gif");
      setLoading(false);
    } catch (err) {
      if (err.response && err.response.status === 429 && retries > 0) {
        const retryAfter = err.response.headers['retry-after']
          ? parseInt(err.response.headers['retry-after'], 10) * 1000
          : backoff;
        setTimeout(() => {
          fetchData(url, retries - 1, backoff * 2);
        }, retryAfter);
      }else{
        console.log("in the else block");
      }
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const generateGif = () => {
    fetchData(url);
  };

  return (
    <div className="flex flex-col items-center border-2 rounded-md w-[700px] bg-[#26e126] gap-3 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">A Random GIF</h1>
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
        <img src={gif} alt="Random GIF" className="w-[300px] h-[300px] border-2" />
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

export default Random;
