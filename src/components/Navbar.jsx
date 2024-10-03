import React, { useEffect, useState } from "react";
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from "/logo.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme,setTheme] = useState('light')

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    // theme thight and dark
    const hanldeTheme =(e) =>{
      if(e.target.checked){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
 }


    useEffect(()=>{
      localStorage.setItem('theme',theme);
      const localThem = localStorage.getItem('theme')
      document.querySelector('html').setAttribute('data-theme',localThem)
   },[theme])
    
  const navItems = [
    { title: "Jewelry & Accessories", path: "/" },
    { title: "Clothing & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collectibles", path: "/" },
    { title: "Craft Supplies & Tools", path: "/" },
  ];
  return (
    <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className=" w-6 h-6 cursor-pointer hidden md:block" />
        <a href="/" className="">
          <img src={logo} alt="" />
        </a>
 
        {/* account and shopping btn */}
        <div className="text-lg sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2 ">
            <FaUser /> Account
          </a>
          <a href="/" className="flex items-center gap-2 container">
            <FaShoppingBag /> Shoping
          </a>
          <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <label className="cursor-pointer grid place-items-center">
  <input onChange={hanldeTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
  
</label>

        </div>

        <div className="sm:hidden">
            <button onClick={toggleMenu}>
                {
                    isMenuOpen ? <FaTimes className="w-6 h-6 "/> : <FaBars className="w-6 h-6 "/>
                }
            </button>
        </div>
      </nav>
      <hr />
      {/* nav items */}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between  hidden">
          {navItems.map(({ title, path}) => (
            <li key={title} className=" hover:text-orange-500">
              <NavLink
                to={path}
                className={({ isActive}) => isActive ? "active" : ""}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile menu items */}
      <div>
        <ul className={` text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
          {navItems.map(({ title, path }) => (
            <li key={title} className=" hover:text-orange-500 my-3 cursor-pointer">
              <Link
                to={path}
                onClick={toggleMenu}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      
    </header>
  );
};

export default Navbar;
