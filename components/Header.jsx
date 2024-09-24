import React, { useState } from "react";
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaTruck,
  FaTags,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar

  const toggleDropdown = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(index); // Open the clicked dropdown
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-yellow-400 text-white">
      {/* First Row */}
      <div className="flex justify-between text-gray-600 items-center py-2 px-4 md:px-20 text-sm font-sans tracking-wide">
        <span>Delivery in 10 minutes</span>
        <div className="flex space-x-4 items-center">
          {/* Delivery Location */}
          <a href="#" className="text-gray-600 flex items-center space-x-1">
            <FaMapMarkerAlt className="text-white" />
            <span>Delivery to 222222</span>
          </a>
          <span className="text-white hidden md:inline">|</span>

          {/* Track Your Order */}
          <a href="#" className="text-gray-600 flex items-center space-x-1">
            <FaTruck className="text-white" />
            <span>Track Your Order</span>
          </a>
          <span className="text-white hidden md:inline">|</span>

          {/* All Offers */}
          <a href="#" className="text-gray-600 flex items-center space-x-1">
            <FaTags className="text-white" />
            <span>All Offers</span>
          </a>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-between items-center bg-white py-4 px-4 md:px-20">
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="text-2xl text-orange-500 font-bold">
            <span className="text-green-400 font-serif tracking-wide">Pre</span>
            <span className="text-yellow-500 font-serif tracking-wide">
              Prod
            </span>
          </h1>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden">
          <button onClick={toggleSidebar}>
            {sidebarOpen ? (
              <FaTimes className="text-xl text-black" />
            ) : (
              <FaBars className="text-xl text-black" />
            )}
          </button>
        </div>

        {/* Search Bar - hidden on small screens */}
        <div className="hidden md:block w-1/2">
          <input
            type="text"
            className="w-full px-4 py-2 font-sans tracking-wide text-gray-500 rounded bg-[#F3F9FB]"
            placeholder="Search for products..."
          />
        </div>

        {/* Login and Cart */}
        <div className="hidden md:flex items-center space-x-3 text-gray-600 font-sans tracking-wide">
          <Link href="/login" className="flex items-center space-x-2">
            <FaUser className="text-green-400" />
            <span>Login</span>
          </Link>
          <span className="text-gray-300">|</span>

          <a href="#" className="flex items-center space-x-2">
            <FaShoppingCart className="text-green-400" />
            <span>Cart</span>
          </a>
        </div>
      </div>

      {/* Third Row for larger screens */}
      <div className="hidden lg:block bg-white text-black py-2 px-4 ">
        <div className="flex justify-center space-x-10 text-sm font-sans tracking-wide z-10">
          {/* Dropdown Menus */}
          <DropdownMenu
            title="Fruits & Vegetables"
            items={["Fruits", "Vegetables", "Exotic"]}
          />
          <DropdownMenu
            title="Chocolates"
            items={["Milk Chocolate", "Dark Chocolate", "White Chocolate"]}
          />
          <DropdownMenu
            title="Bath & Body"
            items={["Soaps", "Shampoos", "Lotions"]}
          />
          <DropdownMenu
            title="Cold Drinks & Juice"
            items={["Sodas", "Juices", "Energy Drinks"]}
          />
          <DropdownMenu
            title="Icy Delights"
            items={["Ice Creams", "Frozen Yogurt", "Gelato"]}
          />
          <DropdownMenu
            title="Egg, Meat & Fish"
            items={["Egg", "Fish", "Chicken"]}
          />
          <DropdownMenu
            title="Dairy & Breakfast"
            items={["Bread", "Ketchup", "Peanut Butter"]}
          />
        </div>
      </div>

      {/* Sidebar for smaller screens */}
      {sidebarOpen && (
        <div className="md:hidden bg-white text-black fixed inset-0 z-50 w-64 overflow-auto">
          <div className="flex flex-col space-y-4 p-4 font-sans tracking-wide">
            <h1
              href="#"
              className="text-2xl px-3 mb-5 text-orange-500 font-bold"
            >
              <span className="text-green-400 font-serif tracking-wide">
                Pre
              </span>
              <span className="text-yellow-500 font-serif tracking-wide">
                Prod
              </span>
            </h1>

            {/* Dropdowns in Sidebar */}
            <SidebarDropdownMenu
              title="Fruits & Vegetables"
              items={["Fruits", "Vegetables", "Exotic"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={1}
            />
            <SidebarDropdownMenu
              title="Chocolates"
              items={["Milk Chocolate", "Dark Chocolate", "White Chocolate"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={2}
            />
            <SidebarDropdownMenu
              title="Bath & Body"
              items={["Soaps", "Shampoos", "Lotions"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={3}
            />
            <SidebarDropdownMenu
              title="Cold Drinks & Juice"
              items={["Sodas", "Juices", "Energy Drinks"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={4}
            />
            <SidebarDropdownMenu
              title="Icy Delights"
              items={["Ice Creams", "Frozen Yogurt", "Gelato"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={5}
            />
            <SidebarDropdownMenu
              title="Egg, Meat & Fish"
              items={["Egg", "Fish", "Chicken"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={6}
            />
            <SidebarDropdownMenu
              title="Dairy & Breakfast"
              items={["Bread", "Ketchup", "Peanut Butter"]}
              openDropdown={openDropdown}
              toggleDropdown={toggleDropdown}
              index={7}
            />
          </div>
        </div>
      )}
    </header>
  );
};

// Dropdown Menu Component for large screens
const DropdownMenu = ({ title, items }) => {
  return (
    <div className="relative group bg-[#F3F9FB] px-3 py-2">
      <a href="#" className="flex items-center">
        {title}
        <FaChevronDown className="ml-1 text-green-400" />
      </a>
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200">
        {items.map((item, index) => (
          <a key={index} href="#" className="block px-4 py-2 hover:bg-gray-100">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

// Sidebar Dropdown Menu Component for small screens
const SidebarDropdownMenu = ({
  title,
  items,
  openDropdown,
  toggleDropdown,
  index,
}) => {
  const isOpen = openDropdown === index;
  return (
    <div>
      <button
        onClick={() => toggleDropdown(index)}
        className="flex items-center justify-between w-full px-3 py-2 text-left"
      >
        <span>{title}</span>
        <FaChevronDown
          className={`ml-2 text-green-400 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="pl-4">
          {items.map((item, i) => (
            <a key={i} href="#" className="block px-4 py-2 hover:bg-gray-100">
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
