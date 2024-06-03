import EquipmentList from "./inventoryList";

const Main = () => {
    return(
        <div className="w-full justify-center m-auto mt-10 flex">
            <button className=" text-md m-auto w-40 h-40 bg-[#009d4f] rounded-xl hover:bg-[#005850]">
                <h1 className="p-5 text-xl hover:text-white hover:text-4xl">Utlån</h1>

            </button>
            <button className="text-md m-auto w-40 h-40 bg-[#009d4f] rounded-xl hover:bg-[#005850]">
                <h1 className="p-5 text-xl hover:text-white hover:text-4xl">Lever</h1>

            </button>

            <div>
                <EquipmentList/>
            </div>
            
        </div>
        
            


    )
}

export default Main;