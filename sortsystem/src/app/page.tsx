"use client";

import Navbar from "./components/navbar";
import EquipmentList from './inventoryList';
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      
      <div>
        <EquipmentList/>
      </div>
    </div>
    
      
    
    
  );
};

export default Home;