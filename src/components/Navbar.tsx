import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
    const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);

    const [isBuildDropdownOpen, setIsBuildDropdownOpen] = useState(false);
    const [exploreTimeout, setExploreTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const [ResourcesTimeout, setResourcesTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const [buildTimeout, setBuildTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const toggleMenu = () => setIsOpen(!isOpen);

    const openExploreDropdown = () => {
        if (exploreTimeout) clearTimeout(exploreTimeout); // Clear any previous timeout
        setIsExploreDropdownOpen(true);
    };

    const closeExploreDropdown = () => {
        if (exploreTimeout) clearTimeout(exploreTimeout); // Clear any previous timeout
        const timeout = setTimeout(() => {
            setIsExploreDropdownOpen(false);
        }, 200); // Delay for 0.5 seconds after mouse leaves
        setExploreTimeout(timeout);
    };

    const openBuildDropdown = () => {
        if (buildTimeout) clearTimeout(buildTimeout); // Clear any previous timeout
        setIsBuildDropdownOpen(true);
    };

    const closeBuildDropdown = () => {
        if (buildTimeout) clearTimeout(buildTimeout); // Clear any previous timeout
        const timeout = setTimeout(() => {
            setIsBuildDropdownOpen(false);
        }, 200); // Delay for 0.5 seconds after mouse leaves
        setBuildTimeout(timeout);
    };
    const openResourcesDropdown = () => {
        if (ResourcesTimeout) clearTimeout(ResourcesTimeout); // Clear any previous timeout
        setIsResourcesDropdownOpen(true);
    };

    const closeResourcesDropdown = () => {
        if (ResourcesTimeout) clearTimeout(ResourcesTimeout); // Clear any previous timeout
        const timeout = setTimeout(() => {
            setIsResourcesDropdownOpen(false);
        }, 200); // Delay for 0.5 seconds after mouse leaves
        setResourcesTimeout(timeout);
    };

    return (
        <div className="w-full z-10 h-[50px] md:h-[70px] bg-[#EDEDED] text-[#133748] font-[Poppins] fixed shadow-lg shadow-black/10">
            <div className="w-full h-full flex justify-between px-6 md:px-10 items-center">
                {/* Left Section */}
                <div id="left-box">
                    <h1 className="text-2xl md:text-3xl font-extrabold cursor-pointer">
                        <Link to="/">BSW Career Mentorship</Link>
                    </h1>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:flex justify-center items-center gap-8 relative">
                    {/* Explore Dropdown */}
                    <span
                        className="nav-item-home cursor-pointer relative"
                        onMouseEnter={openExploreDropdown}
                        onMouseLeave={closeExploreDropdown}
                    >
                        Explore
                        {isExploreDropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-[200px]">
                                <ul className="flex flex-col text-left">
                                    <li><Link to="/explore/sde" className="block px-4 py-2 hover:bg-gray-100">SDE</Link></li>
                                    <li><Link to="/explore/quant" className="block px-4 py-2 hover:bg-gray-100">Quant</Link></li>
                                    <li><Link to="/explore/core" className="block px-4 py-2 hover:bg-gray-100">Core</Link></li>
                                    <li><Link to="/explore/finance" className="block px-4 py-2 hover:bg-gray-100">Analytics</Link></li>
                                    <li><Link to="/explore/ai-ml" className="block px-4 py-2 hover:bg-gray-100">AI-ML</Link></li>
                                    <li><Link to="/explore/consult" className="block px-4 py-2 hover:bg-gray-100">Consulting</Link></li>
                                </ul>
                            </div>
                        )}
                    </span>

                    {/* Build Dropdown */}
                    <span
                        className="nav-item-home cursor-pointer relative"
                        onMouseEnter={openBuildDropdown}
                        onMouseLeave={closeBuildDropdown}
                    >
                        Build
                        {isBuildDropdownOpen && (
                            <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md w-[200px]">
                                <ul className="flex flex-col text-left">
                                    <li><Link to="/BUILD/sde" className="block px-4 py-2 hover:bg-gray-100">SDE</Link></li>
                                    <li><Link to="/BUILD/quant" className="block px-4 py-2 hover:bg-gray-100">Quant</Link></li>
                                    <li><Link to="/BUILD/core" className="block px-4 py-2 hover:bg-gray-100">Core</Link></li>
                                    <li><Link to="/BUILD/finance" className="block px-4 py-2 hover:bg-gray-100">Analytics</Link></li>                                   
                                    <li><Link to="/BUILD/consult" className="block px-4 py-2 hover:bg-gray-100">Consulting</Link></li>
                                </ul>
                            </div>
                        )}
                    </span>

                    {/* Static Navbar Items */}
                     {/* Resources Dropdown */}
<span
    className="nav-item-home cursor-pointer relative"
    onMouseEnter={openResourcesDropdown}
    onMouseLeave={closeResourcesDropdown}
>
    Resources
    {isResourcesDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-md rounded-md min-w-[165px] translate-x-[20%]">
            <ul className="flex flex-col text-left pl-3 pr-4">
                <li><Link to="/Resource/UPSC" className="block py-2 hover:bg-gray-100 whitespace-nowrap">UPSC</Link></li>
                <li><Link to="/Resource/CAT" className="block py-2 hover:bg-gray-100 whitespace-nowrap">CAT</Link></li>
                <li><Link to="/Resource/Higher_Studies" className="block py-2 hover:bg-gray-100 whitespace-nowrap">Higher Studies</Link></li>
            </ul>
        </div>
    )}
</span>
                    
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#EDEDED] text-center shadow-md">
                    <div className="flex flex-col px-2 py-4 gap-4">
                        <span className="cursor-pointer">Explore</span>
                        <span className="cursor-pointer">Build</span>
                        <span className="cursor-pointer">Resources</span>
                       
                    </div>
                </div>
            )}
        </div>
    );
}
