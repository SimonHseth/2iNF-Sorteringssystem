import Link from "next/link";
import Image from "next/image";

export default function Navbar () {
    return(
        <div className="w-full h-28 m-auto grid  ">
            <div className=" w-full h-10 bg-[#005850]">
             <div className="text-white flex text-left" >
                <Link href="https://innlandet.sharepoint.com/sites/INNsia-Eleverivideregendeskole">INNsia - elever i vgs</Link>
                
             </div>
            </div>
            <div className="w-full h-20 outline">
                <div className="w-12 h-12 bg-red-800 justify-center ml-20 mt-4">
                    <img
                        src="../innlandet-fylkeskommune.svg"
                        width={100}
                        height={100}

                    />
                
                </div>

            </div>

            
            

        </div>
        
    )
}