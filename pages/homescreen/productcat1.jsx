import React from "react";

function Productcat1({ title }) {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  return (
    <div className="px-10 py-10">
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="font-sans tracking-wide text-xl">
            Bath & Body
            {/* <span className="text-green-500">Up to 50% off</span> */}
          </h1>
          <button className="text-green-500 font-sans tracking-wide   px-3">
            View All
          </button>
        </div>

        {/* Responsive grid for categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5 mt-5">
          {/* Category Item */}
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img
                className="object-fit w-full h-[150px]"
                src=""
                alt="Bath & Body"
              />
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
              <img
                className="object-fit w-full h-[150px]"
                src=""
                alt="Bath & Body"
              />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Korean MAGGI Korean Spicy Cheesy Noodles, Instant Cuppa Noodles Veg 71.5 g",
                6
              )}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:80</h1>
              <button className="text-green-500 font-sans tracking-wide border border-green-500 bg-[#F3F9FB] px-3">
                Add
              </button>
            </div>
          </div>{" "}
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img
                className="object-fit w-full h-[150px]"
                src=""
                alt="Bath & Body"
              />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText("NESCAFE Sunrise Instant Coffee Powder 100 g", 6)}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:390</h1>
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
              <img
                className="object-fit w-full h-[150px]"
                src=""
                alt="Bath & Body"
              />
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
              <h1 className="font-sans tracking-wide text-md">Rs:780</h1>
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
              <img
                className="object-fit w-full h-[150px]"
                src=""
                alt="Bath & Body"
              />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Lay's American Cream & Onion Potato Chips 143 g",
                6
              )}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:70</h1>
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
              <img
                className="object-fit w-full h-[150px]"
                src=""
                alt="Bath & Body"
              />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText("Chemist At Play Vitamin C Face Wash 100ml", 6)}
            </h1>

            {/* Divider line */}
            <hr className="border-gray-300" />

            {/* Price and Add to Cart Button */}
            <div className="flex flex-row justify-between px-1 items-center py-2">
              <h1 className="font-sans tracking-wide text-md">Rs:120</h1>
              <button className="text-green-500 font-sans tracking-wide border border-green-500 bg-[#F3F9FB] px-3">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productcat1;
