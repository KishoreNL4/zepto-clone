import Header from "@/components/Header";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
function Description() {
  // State to keep track of the main image and the selected side image
  const [selectedImage, setSelectedImage] = useState("./images/maggie.png");
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of images for the side image gallery
  const images = [
    "./images/maggie.png",
    "./images/maggie1.png",
    "./images/maggie2.png",
  ];

  // Function to handle click event on side image
  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index); // This will update the selected image's index
  };

  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity increase
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to handle quantity decrease
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
      <div className="px-4 lg:px-10 py-10 flex flex-col lg:flex-row space-y-5 lg:space-x-5 lg:space-y-0">
        <div className="flex flex-col lg:flex-row w-full lg:w-[50%] space-y-5 lg:space-y-0 lg:space-x-5">
          {/* side image */}
          <div>
            <div className="flex flex-row lg:flex-col space-x-5 lg:space-x-0 space-y-5">
              {images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(image, index)}
                  className={`w-full h-auto border ${
                    activeIndex === index
                      ? "border-yellow-400"
                      : "border-gray-300"
                  } rounded-md p-2 cursor-pointer border-2`}
                >
                  {/* Image container with discount badge */}
                  <div className="relative -z-10 w-full h-[100px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
                    <img
                      src={image}
                      className="object-fit w-full h-[100px]"
                      alt="Bath & Body"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* main image */}
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative -z-10 w-full h-[377px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                src={selectedImage}
                className="object-fit w-full h-[377px]"
                alt="Bath & Body"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%]">
          <div className="px-5">
            <h1 className="font-sans tracking-wide text-lg text-start py-2 px-1">
              Korean MAGGI Korean Spicy Cheesy Noodles, Instant Cuppa Noodles
              Veg 71.5 g
            </h1>
            <h1 className="font-sans tracking-wide text-lg font-bold text-green-400 text-start  px-1">
              80 g
            </h1>
            <ul className="font-sans tracking-wide text-md text-gray-400 text-start py-2 px-1 list-disc pl-5">
              <li>
                Description: Nissin Geki Hot & Spicy Korean Noodles are made
                from high-quality ingredients that are semi-cooked and need to
                be just soaked and drained to be ready.
              </li>
              <li>Country of Origin: India</li>
              <li>Shelf Life: 10 months</li>
              <li>Manufacturer Name: Nissin</li>
              <li>
                Manufacturer Address: Nissin, 3rd Floor, Centenary Building, 28,
                M.G. Road, Bangalore - 560001.
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row px-4 lg:px-10 justify-between item-start lg:items-center mt-7">
              <div>
                <h1 className="font-sans tracking-wide text-3xl font-bold text-start  px-1">
                  ₹150
                </h1>
              </div>
              <div className="flex flex-row space-x-4 mt-4 sm:mt-0">
                <div className="flex items-center space-x-3">
                  {/* Decrement Button */}
                  <button
                    className="px-3 py-2 h-10 bg-gray-200 rounded-md text-gray-700 font-sans tracking-wide"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>

                  {/* Display Quantity */}
                  <span className="font-sans text-xl">{quantity}</span>

                  {/* Increment Button */}
                  <button
                    className="px-3 py-2 h-10 bg-gray-200 rounded-md text-gray-700 font-sans tracking-wide"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="px-5 py-2 h-10 flex justify-center items-center bg-green-400 rounded-md text-white font-sans tracking-wide">
                  ADD
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* similar products */}
      <div className="px-10 py-10">
        <h1 className="font-sans tracking-wide text-2xl">
          Similar <span className="text-green-500">Products</span>
        </h1>
        <div className="grid grid-cols-2 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {/* Category Item */}
          <Link href=".\description">
            <div className="w-full h-auto border border-gray-300 rounded-md p-2">
              {/* Image container with discount badge */}
              <div className="relative w-full h-[150px] -z-10 bg-[#F3F9FB] rounded-md flex items-center justify-center">
                <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                  50% OFF
                </span>
                <img
                  src=".\images\philips-trimmer.png"
                  className="object-fit w-full h-[150px]"
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
          </Link>
          <div className="w-full h-auto border border-gray-300 rounded-md p-2">
            {/* Image container with discount badge */}
            <div className="relative -z-10 w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img
                src=".\images\maggie.png"
                className="object-fit w-full h-[150px]"
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
            <div className="relative -z-10 w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img
                src=".\images\coffee.png"
                className="object-fit w-full h-[150px]"
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
            <div className="relative -z-10 w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img
                src=".\images\chocalet.png"
                className="object-fit w-full h-[150px]"
                alt="Bath & Body"
              />
            </div>

            {/* Title Section */}
            <h1 className="font-sans tracking-wide text-sm text-start py-2 px-1">
              {truncateText(
                "Ferrero Rocher Premium Chocolates 24 Pieces, 300 Gram",
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
            <div className="relative -z-10 w-full h-[150px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <span className="absolute top-0 right-0 bg-green-400 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                50% OFF
              </span>
              <img
                src=".\images\lays.png"
                className="object-fit w-full h-[150px]"
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Description;
