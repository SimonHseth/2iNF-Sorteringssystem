import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Navbar () {
    return(
        <div className="w-full h-28 m-auto grid  ">
            <div className=" w-full h-8 bg-[#005850]">
             <div className="text-white flex text-left ml-2" >
                <Link href="https://innlandet.sharepoint.com/sites/INNsia-Eleverivideregendeskole">INNsia - elever i vgs</Link>
                
                
             </div>
            </div>
            
            <div className="w-full h-20 outline outline-green-500 flex text-black">
                
                <div className="w-fit h-fit justify-center ml-10 mt-1">
                    <Link href="./page.tsx" />
                    <img
                        src="/logo.svg"
                        width={200}
                        height={200}

                    />
                
                </div>
                <Link href="../login" className="text-black mt-6 ml-10">Logg inn</Link>
                

            </div>
            

            
            

        </div>
        
    )
}