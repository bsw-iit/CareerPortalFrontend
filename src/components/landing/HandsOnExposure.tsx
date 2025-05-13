import yosemiteValleyImage from '../../assets/landing/yosemite-valley.png';  
import { Link } from "react-router-dom";
const HandsOnExposure = () => {  
    return (   
        <div className="bg-[#0E2F3F] w-full flex p-10 relative">  
            <div className="flex w-full md:w-1/2 flex-col my-auto gap-4 md:px-10 text-white">  
                <h4 className="text-lg font-inter font-bold text-[#7CD2FC]">Bag your dream internship</h4>  
                <h3 className="text-3xl md:text-4xl font-bold tracking-wide leading-tight">BUILD PROFILE</h3>  
                <p className="text-base md:text-lg font-montserrat leading-relaxed max-w-3xl">
                    FAQs, CV making guides and tips to get started, from <br />
                    seniors at the top of their fields.
                </p>  
                <div className="flex flex-wrap gap-3 my-2"> {/* Adjusted gap between buttons using gap-x */}  
                <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-lg hover:bg-white hover:text-[#0E2F3F]">
                        <Link to="../BUILD/core">Core</Link>
                    </button>
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-lg hover:bg-white hover:text-[#0E2F3F]">
                        <Link to="../BUILD/sde">SDE</Link>
                    </button> 
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-lg hover:bg-white hover:text-[#0E2F3F]">
                        <Link to="../BUILD/consult">Consult</Link>
                    </button>  
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-lg hover:bg-white hover:text-[#0E2F3F]">
                        <Link to="../BUILD/finance">Analytics</Link>
                    </button> 
                    <button className="border-white border-2 bg-transparent text-white py-1 px-3 rounded-lg hover:bg-white hover:text-[#0E2F3F]">
                        <Link to="../BUILD/quant">Quant</Link>
                    </button>
                </div>  
                <div>
                    <div>
                    <button className="bg-transparent text-[#0E2F3F] py-1 px-3">Had to create to give space</button> 
                    </div>
                </div>
                <div>

                </div>
            </div>  
            <img  
                className="absolute bottom-0 right-0 w-full md:w-1/2 h-64 md:h-full object-cover opacity-30 md:opacity-100 pointer-events-none z-0"
                src={yosemiteValleyImage}  
                alt="Yosemite Valley"   
            />  
        </div> 
    );  
}  

export default HandsOnExposure;
