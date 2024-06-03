"use client";

import Navbar from "./components/navbar";
import EquipmentList from './components/inventoryList';
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <main>
        <div className="w-full justify-center m-auto mt-10 flex">
            <button className=" text-md m-auto w-40 h-40 bg-[#009d4f] rounded-xl hover:bg-[#005850]">
                <h1 className="p-5 text-xl hover:text-white hover:text-4xl">Utlån</h1>

            </button>
            <button className="text-md m-auto w-40 h-40 bg-[#009d4f] rounded-xl hover:bg-[#005850]">
                <Link className="p-5 text-xl hover:text-white hover:text-4xl" href={'./Lever'}>Lever</Link>

            </button>

            
            
        </div>
      </main>
      <div>
        <EquipmentList/>
      </div>
    </div>
    
      
    
    
  );
};

export default Home;



