import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get('https://picsum.photos/v2/list');
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-10">
      <div className="p-5 mt-5 bg-cyan-950">
        {data.map((elem, idx) => (
          <div
            key={idx}
            className="bg-gray-400 text-black flex items-center justify-between w-full py-6 px-7 rounded-2xl mb-3"
          >
            <img className="h-40 rounded" src={elem.download_url} alt={elem.author} />
            <h1 className="text-lg font-semibold">{elem.author}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
