import Header from "@/components/Header";
import React, { useState } from "react";

function Market() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      id: 1,
      name: "Chocolates",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbCnVVB0lCa1_k4K3cOWftFZno6IcFzEAVw&s",
    },
    {
      id: 2,
      name: "Cool Drinks",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzatBPtrN1JPdFhrC20aZB7YnzCjOd5LaY5Q&s",
    },
    {
      id: 3,
      name: "Bath & Wash",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYa0iGi1O3ih4XSf9vr-gNxumXlIXdVwUMQ&s",
    },
    {
      id: 4,
      name: "Fruits & Vegetables",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehQn_W51y1OSvdrnlZgjRLaEDt3N24v951A&s",
    },
    {
      id: 5,
      name: "Cosmetics",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2ah93m_yBLGu_IQSQNnuIkjDN73gu8U3cg&s",
    },
  ];

  const handleSelect = (id) => {
    setSelectedItem(id);
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div>
      <Header />
      <div className="px-5 py-5 md:px-10 md:py-10 flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-20">
        {/* Sidebar for item categories */}
        <div className="space-y-3 w-full lg:w-[250px]">
          {items.map((item) => (
            <div
              key={item.id}
              className={`py-3 flex flex-row space-x-4 items-center px-5 cursor-pointer
              ${
                selectedItem === item.id
                  ? "bg-[#F3F9FB] border-l-4 border-green-400"
                  : "bg-gray-200"
              }`}
              onClick={() => handleSelect(item.id)}
            >
              <img
                className="rounded-full w-[40px] h-[40px] object-contain"
                src={item.image}
                alt={item.name}
              />
              <h1 className="font-sans tracking-wide font-lg font-semibold">
                {item.name}
              </h1>
            </div>
          ))}
        </div>

        {/* Main content: grid layout for products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {/* Category Item */}
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img src="" alt="Bath & Body" />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Philips S1121/45 Shaver For Men - Black & Blue 1 piece",
                6
              )}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:350</h1>
              <button className="text-green-500 font-sans tracking-wide border border-green-500 bg-[#F3F9FB] px-3">
                Add
              </button>
            </div>
          </div>
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img src="" alt="Bath & Body" />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Philips S1121/45 Shaver For Men - Black & Blue 1 piece",
                6
              )}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:350</h1>
              <button className="text-green-500 font-sans tracking-wide border border-green-500 bg-[#F3F9FB] px-3">
                Add
              </button>
            </div>
          </div>
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img src="" alt="Bath & Body" />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Philips S1121/45 Shaver For Men - Black & Blue 1 piece",
                6
              )}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:350</h1>
              <button className="text-green-500 font-sans tracking-wide border border-green-500 bg-[#F3F9FB] px-3">
                Add
              </button>
            </div>
          </div>
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img src="" alt="Bath & Body" />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Philips S1121/45 Shaver For Men - Black & Blue 1 piece",
                6
              )}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:350</h1>
              <button className="text-green-500 font-sans tracking-wide border border-green-500 bg-[#F3F9FB] px-3">
                Add
              </button>
            </div>
          </div>

          {/* More product cards as needed */}
        </div>
      </div>
    </div>
  );
}

export default Market;
