
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Common/Header';
import { useEffect, useState } from 'react';
import Footer from './Common/Footer';

function App() {
  let [data,setData] = useState([]);

  useEffect(()=>{
    const fetchbookingData = async()=>{
    try{
      const response = await fetch("https://booking-backend-3ugk.onrender.com/api/rooms");
      const d = await response.json();
      
      setData(d);
    }catch(err){}
  };
  fetchbookingData();
  },[]);
  return (
    <div className="App">
      <Header></Header>
      <Outlet
        context ={{
          data,
        }}
      ></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
