"use client";

import Navbar from "./components/navbar";
import EquipmentList from './components/inventoryList';
import Main from "./components/main";

const Home: React.FC = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <main>
        <Main/>
      </main>
    </div>
    
      
    
    
  );
};

export default Home;



