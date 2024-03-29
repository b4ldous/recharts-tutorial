import { useEffect, useState } from "react";
import Chart from "./chart";
import CryptoLineChart from "./CryptoLineChart";

function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      const data = await res.json();
      console.log(data);
      setdata(data?.data);
    };
    fetchDatas();
  }, []);

  console.log(data);

  
  return (<>
  
  
<h2>Criptocurrency prices</h2>
  
  <Chart data={data} />
  

  <ol>

    {
      data.map(({id, name, priceUsd})=>(<li key={id}>{name} <p>Price{priceUsd}</p></li>))
    }
  </ol>
  <CryptoLineChart data={data}/>

 
  </>
   
  );
}

export default App;
