import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Korean MAGGI Korean Spicy Cheesy Noodles",
      price: 100,
      quantity: 1,
      image: "./images/maggie.png",
    },
    {
      id: 2,
      name: "Lay's American Cream",
      price: 60,
      quantity: 2,
      image: "./images/lays.png",
    },
  ]);

  // Function to handle incrementing quantity
  const handleIncrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  // Function to handle decrementing quantity
  const handleDecrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedItems);
  };

  // Function to calculate the total price for a single product
  const calculateTotal = (item) => {
    return item.price * item.quantity;
  };

  // Function to calculate the overall total for the cart
  const calculateGrandTotal = () => {
    return cartItems.reduce((acc, item) => acc + calculateTotal(item), 0);
  };

  const [addresses, setAddresses] = useState([
    "123 Street Name, City",
    "456 Another St, City",
  ]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [totalCost, setTotalCost] = useState(300); // Base cost before applying promo

  const handleAddNewAddress = () => {
    if (newAddress) {
      setAddresses([...addresses, newAddress]);
      setNewAddress("");
      setShowPopup(false);
    }
  };

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setTotalCost(totalCost - (totalCost * 10) / 100); // Apply 10% discount
    }
  };
  return (
    <div>
      <Header />
      <div className="px-4 py-6 flex flex-col lg:flex-row lg:space-x-10">
        <div className="w-full lg:w-[70%]">
          <div className="flex flex-row justify-between mt-3 px-4 lg:px-10">
            <h1 className="font-sans tracking-wide text-xl font-bold text-start py-2 px-1">
              Shopping Cart
            </h1>
            <h1 className="font-sans tracking-wide text-xl font-bold text-start py-2 px-1">
              1 Items
            </h1>
          </div>
          <div className="flex justify-center mt-3">
            <hr className="border-gray-300 w-full lg:w-[90%] flex justify-center" />
          </div>
          <div className="flex justify-center">
            <table className="min-w-full lg:min-w-[95%] ml-4 lg:ml-10 mt-5 bg-white">
              <thead>
                <tr className="w-full text-gray-500 font-sans tracking-wide">
                  <th className="py-3 w-[400px] font-semibold text-left">
                    Product Details
                  </th>
                  <th className="py-3 font-semibold text-center">Quantity</th>
                  <th className="py-3 font-semibold text-center">Price</th>
                  <th className="py-3 font-semibold text-center hidden lg:block">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      <span className="font-sans w-[300px] tracking-wide">
                        {item.name}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <div className="flex justify-center items-center">
                        <button
                          className="bg-gray-200 px-2 py-1"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <span className="mx-2 font-sans tracking-wide text-sm">
                          {item.quantity}
                        </span>
                        <button
                          className="bg-gray-200 px-2 py-1"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-center font-sans tracking-wide">
                      ₹{item.price.toLocaleString()}
                    </td>
                    <td className="py-4 text-center font-sans tracking-wide hidden lg:block">
                      ₹{calculateTotal(item).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link
            href="/market"
            className="cursor-pointer flex items-center px-4 lg:px-10 mt-5"
          >
            <ArrowLeftIcon className="h-4 w-4 mt-1 mr-2" />
            {/* Left Arrow Icon */}
            <h1 className="font-sans tracking-wide text-lg font-semibold text-start py-2">
              Shopping Cart
            </h1>
          </Link>
        </div>
        <div className="bg-[#ebebeb] w-full lg:w-[30%] mt-6 lg:mt-0">
          <h1 className="font-sans tracking-wide mt-3 text-xl px-5 font-bold text-start py-2">
            Order Summary
          </h1>
          <div className="flex justify-center mt-3">
            <hr className="border-gray-300 w-full lg:w-[90%] flex justify-center" />
          </div>
          <div className="px-5 flex flex-row justify-between">
            <h1 className="font-sans text-gray-500 tracking-wide text-md font-semibold text-start py-2 px-1">
              Items 2
            </h1>
            <h1 className="font-sans text-gray-500 tracking-wide text-md font-semibold text-start py-2 px-1">
              ₹ 300
            </h1>
          </div>
          <div className="flex flex-row justify-between mt-5 px-5">
            <h1 className="font-sans tracking-wide text-md font-semibold mt-4">
              Shipping
            </h1>
            <button
              className="text-green-400 text-sm font-sans tracking-wide font-semibold py-1 rounded-md mt-3"
              onClick={() => setShowPopup(true)}
            >
              + Add Address
            </button>
          </div>
          <div className="mt-3 px-5">
            {addresses.map((address, index) => (
              <div
                key={index}
                className="flex items-center font-sans text-gray-600 tracking-wide mb-2"
              >
                <input
                  type="checkbox"
                  checked={selectedAddress === address}
                  onChange={() => setSelectedAddress(address)}
                  className="mr-2 font-sans text-gray-600 tracking-wide"
                />
                <span>{address}</span>
              </div>
            ))}
          </div>

          {/* Add New Address Popup */}
          {showPopup && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-lg font-bold mb-3 font-sans tracking-wide">
                  Add New Address
                </h2>
                <input
                  type="text"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  placeholder="Enter new address"
                  className="border font-sans tracking-wide border-gray-300 rounded-md w-full px-3 py-2 mb-3"
                />
                <div className="flex justify-end">
                  <button
                    className="bg-blue-500 font-sans tracking-wide text-white px-4 py-2 rounded-md mr-2"
                    onClick={handleAddNewAddress}
                  >
                    Add Address
                  </button>
                  <button
                    className="bg-red-500 font-sans tracking-wide text-white px-4 py-2 rounded-md"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Promo Code Section */}
          <div className="mt-5 px-5">
            <h1 className="font-sans tracking-wide text-md font-semibold">
              Promo Code
            </h1>
            <div className="flex items-center mt-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter promo code"
                className="border border-gray-300 rounded-md w-full px-3 py-2 mr-3"
              />
              <button
                className="bg-blue-500 font-sans tracking-wide text-white px-3 py-2 rounded-md"
                onClick={handleApplyPromo}
              >
                Apply
              </button>
            </div>
          </div>

          {/* Total Cost and Place Order */}
          <div className="mt-5 px-5">
            <div className="flex justify-between py-2">
              <h1 className="font-sans tracking-wide text-md font-semibold">
                Total Cost
              </h1>
              <h1 className="font-sans tracking-wide text-md font-semibold">
                ₹ {totalCost.toLocaleString()}
              </h1>
            </div>
            <Link href="/order">
              <button className="bg-green-500 mb-5 font-sans tracking-wide text-white w-full py-2 rounded-md mt-3">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cart;
