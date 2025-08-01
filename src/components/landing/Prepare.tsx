import resourceImage1 from '../../assets/landing/Resource.jpg'; // Replace with the correct file name  
import resourceImage2 from '../../assets/landing/HR.png'; // Replace with the correct file name  
import resourceImage3 from '../../assets/landing/Interview.png'; // Replace with the correct file name  
import {Link} from "react-router-dom"
const Prepare = () => {  
    return (  
        <div className="flex flex-col md:flex-row p-6 md:p-10 w-full items-center gap-10">  
            {/* Boxes Section */}  
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full md:w-1/2 justify-between items-center md:items-start">  
                {/* Box 1 */}  
                <div className="flex flex-col items-center justify-center rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-[18vw]">  
                    <img src={resourceImage1} alt="UPSC PREP" className="w-full h-auto object-cover" />  
                    <div className="w-full text-center font-bold mt-2 rounded-lg border border-[#0E2F3F] text-[#0E2F3F] py-2">
                        <Link to="../Resource/UPSC">UPSC PREP</Link>
                    </div>  
                </div>  
                {/* Box 2 */}  
                <div className="flex flex-col items-center justify-center rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-[18vw]">  
                    <img src={resourceImage2} alt="CAT PREP" className="w-full h-auto object-cover" />
                    <div className="w-full text-center font-bold mt-2 rounded-lg border border-[#0E2F3F] text-[#0E2F3F] py-2">
                        <Link to="../Resource/CAT">CAT PREP</Link> 
                    </div>  
                </div>  
                {/* Box 3 */}  
                <div className="flex flex-col items-center justify-center rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-[18vw]">  
                    <img src={resourceImage3} alt="HIGHER STUDIES" className="w-full h-auto object-cover" />  
                    <div className="w-full text-center font-bold mt-2 rounded-lg border border-[#0E2F3F] text-[#0E2F3F] py-2">
                        <Link to="../Resource/Higher_Studies">Higher Studies</Link>
                    </div>  
                </div>  
            </div>    

            {/* Description Section */}  
            <div className="flex flex-col w-full md:w-1/2 md:pl-10 text-center md:text-left">  
                <h3 className="text-2xl md:text-4xl mb-4 text-[#0C232D] font-bold">
                    Other Post-College Opportunities
                </h3>  
                <p className="mb-6 leading-relaxed text-[#0C232D] text-base md:text-lg">
                    Explore other options post-college such as preparing for competitive exams or higher studies!
                </p>   
            </div>  
        </div>
    );  
}  

export default Prepare;
