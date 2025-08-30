import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreDropdownOpen, setIsExploreDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isBuildDropdownOpen, setIsBuildDropdownOpen] = useState(false);

  const [exploreTimeout, setExploreTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [resourcesTimeout, setResourcesTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [buildTimeout, setBuildTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const [isMobileExploreOpen, setMobileExploreOpen] = useState(false);
  const [isMobileBuildOpen, setMobileBuildOpen] = useState(false);
  const [isMobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const toggleMobileExplore = () => {
    // Close other dropdowns before opening the new one
    setMobileExploreOpen(!isMobileExploreOpen);
    setMobileBuildOpen(false); // Close the Build dropdown
    setMobileResourcesOpen(false); // Close the Resources dropdown
  };

  const toggleMobileBuild = () => {
    // Close other dropdowns before opening the new one
    setMobileBuildOpen(!isMobileBuildOpen);
    setMobileExploreOpen(false); // Close the Explore dropdown
    setMobileResourcesOpen(false); // Close the Resources dropdown
  };

  const toggleMobileResources = () => {
    // Close other dropdowns before opening the new one
    setMobileResourcesOpen(!isMobileResourcesOpen);
    setMobileExploreOpen(false); // Close the Explore dropdown
    setMobileBuildOpen(false); // Close the Build dropdown
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // for auto-closing on link click

  const openExploreDropdown = () => {
    if (exploreTimeout) clearTimeout(exploreTimeout);
    if (buildTimeout) clearTimeout(buildTimeout);
    if (resourcesTimeout) clearTimeout(resourcesTimeout);
    setIsExploreDropdownOpen(true);
    setIsBuildDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const closeExploreDropdown = () => {
    if (exploreTimeout) clearTimeout(exploreTimeout);
    const timeout = setTimeout(() => {
      setIsExploreDropdownOpen(false);
    }, 200);
    setExploreTimeout(timeout);
  };

  const openBuildDropdown = () => {
    if (buildTimeout) clearTimeout(buildTimeout);
    if (exploreTimeout) clearTimeout(exploreTimeout);
    if (resourcesTimeout) clearTimeout(resourcesTimeout);
    setIsBuildDropdownOpen(true);
    setIsExploreDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };

  const closeBuildDropdown = () => {
    if (buildTimeout) clearTimeout(buildTimeout);
    const timeout = setTimeout(() => {
      setIsBuildDropdownOpen(false);
    }, 200);
    setBuildTimeout(timeout);
  };

  const openResourcesDropdown = () => {
    if (resourcesTimeout) clearTimeout(resourcesTimeout);
    if (exploreTimeout) clearTimeout(exploreTimeout);
    if (buildTimeout) clearTimeout(buildTimeout);
    setIsResourcesDropdownOpen(true);
    setIsExploreDropdownOpen(false);
    setIsBuildDropdownOpen(false);
  };

  const closeResourcesDropdown = () => {
    if (resourcesTimeout) clearTimeout(resourcesTimeout);
    const timeout = setTimeout(() => {
      setIsResourcesDropdownOpen(false);
    }, 200);
    setResourcesTimeout(timeout);
  };

  return (
    <div className="w-full z-10 h-[50px] md:h-[70px] bg-[#EDEDED] text-[#133748] font-[Poppins] fixed shadow-lg shadow-black/10">
      <div className="w-full h-full flex justify-between px-6 md:px-10 items-center">
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
                  <li>
                    <Link
                      to="/explore/sde"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      SDE
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/quant"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Quant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/core"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Core
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/finance"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/ai-ml"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      AI-ML
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/explore/consult"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Consulting
                    </Link>
                  </li>
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
                  <li>
                    <Link
                      to="/BUILD/sde"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      SDE
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/BUILD/quant"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Quant
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/BUILD/core"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Core
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/BUILD/finance"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Analytics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/BUILD/consult"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Consulting
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </span>

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
                  <li>
                    <Link
                      to="/Resource/UPSC"
                      className="block py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      UPSC
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Resource/CAT"
                      className="block py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      CAT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Resource/Higher_Studies"
                      className="block py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      Higher Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Resource/summer_guide"
                      className="block py-2 hover:bg-gray-100 whitespace-nowrap"
                    >
                      Summer Guide
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button type="button" onClick={toggleMenu} className="focus:outline-none" aria-label="Toggle menu">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#EDEDED] text-center shadow-md p-4 rounded-b-lg">
          <div className="flex flex-col gap-4">
            <span
              onClick={toggleMobileExplore}
              className="cursor-pointer text-xl font-bold py-2 px-4 rounded-lg bg-[#133748] text-white hover:bg-[#0f2a36] transition duration-300"
            >
              Explore
            </span>
            {isMobileExploreOpen && (
              <div className="flex flex-col pl-4 text-left bg-[#f9f9f9] rounded-md shadow-md mt-2">
                <Link
                  to="/explore/sde"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  SDE
                </Link>
                <Link
                  to="/explore/quant"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Quant
                </Link>
                <Link
                  to="/explore/core"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Core
                </Link>
                <Link
                  to="/explore/finance"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Analytics
                </Link>
                <Link
                  to="/explore/ai-ml"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  AI-ML
                </Link>
                <Link
                  to="/explore/consult"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Consulting
                </Link>
              </div>
            )}

            <span
              onClick={toggleMobileBuild}
              className="cursor-pointer text-xl font-bold py-2 px-4 rounded-lg bg-[#133748] text-white hover:bg-[#0f2a36] transition duration-300"
            >
              Build
            </span>
            {isMobileBuildOpen && (
              <div className="flex flex-col pl-4 text-left bg-[#f9f9f9] rounded-md shadow-md mt-2">
                <Link
                  to="/BUILD/sde"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  SDE
                </Link>
                <Link
                  to="/BUILD/quant"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Quant
                </Link>
                <Link
                  to="/BUILD/core"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Core
                </Link>
                <Link
                  to="/BUILD/finance"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Analytics
                </Link>
                <Link
                  to="/BUILD/consult"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Consulting
                </Link>
              </div>
            )}

            <span
              onClick={toggleMobileResources}
              className="cursor-pointer text-xl font-bold py-2 px-4 rounded-lg bg-[#133748] text-white hover:bg-[#0f2a36] transition duration-300"
            >
              Resources
            </span>
            {isMobileResourcesOpen && (
              <div className="flex flex-col pl-4 text-left bg-[#f9f9f9] rounded-md shadow-md mt-2">
                <Link
                  to="/Resource/UPSC"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  UPSC
                </Link>
                <Link
                  to="/Resource/CAT"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  CAT
                </Link>
                <Link
                  to="/Resource/Higher_Studies"
                  className="py-2 hover:bg-[#e2e2e2]"
                  onClick={closeMenu}
                >
                  Higher Studies
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
