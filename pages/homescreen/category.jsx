import Link from "next/link";
import React from "react";

function Category() {
  return (
    <div className="px-10 py-10">
      <div>
        <h1 className="font-sans tracking-wide text-xl">
          Shop From <span className="text-green-500">Top Categories</span>
        </h1>
        {/* Responsive grid for categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5 mt-5">
          {/* Category Item */}
          <Link href="/market">
            <div className="w-full h-[200px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                className="w-full px-1 py-1 h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwYa0iGi1O3ih4XSf9vr-gNxumXlIXdVwUMQ&s"
                alt="Bath & Body"
              />
            </div>
            <h1 className="font-sans tracking-wide text-md text-center py-2">
              Bath & Body
            </h1>
          </Link>
          {/* Repeat Category Item as needed */}
          <div>
            <div className="w-full h-[200px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                className="w-full px-1 py-1 h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVo0iRgK2JFnF-RdhXjwZdGconD5_bajQ5bQ&s"
                alt="Bath & Body"
              />
            </div>
            <h1 className="font-sans tracking-wide text-md text-center py-2">
              Egg, Meat & Fish
            </h1>
          </div>
          <div>
            <div className="w-full h-[200px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                className="w-full px-1 py-1 h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzatBPtrN1JPdFhrC20aZB7YnzCjOd5LaY5Q&s"
                alt="Bath & Body"
              />
            </div>
            <h1 className="font-sans tracking-wide text-md text-center py-2">
              Cool Drinks & Juice
            </h1>
          </div>
          <div>
            <div className="w-full h-[200px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbCnVVB0lCa1_k4K3cOWftFZno6IcFzEAVw&s"
                alt="Bath & Body"
                className="w-full px-1 py-1 h-full object-cover"
              />
            </div>

            <h1 className="font-sans tracking-wide text-md text-center py-2">
              Snacks & Munches
            </h1>
          </div>
          <div>
            <div className="w-full h-[200px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                className="w-full px-1 py-1 h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2ah93m_yBLGu_IQSQNnuIkjDN73gu8U3cg&s"
                alt="Bath & Body"
              />
            </div>
            <h1 className="font-sans tracking-wide text-md text-center py-2">
              Cosmetics
            </h1>
          </div>
          <div>
            <div className="w-full h-[200px] bg-[#F3F9FB] rounded-md flex items-center justify-center">
              <img
                className="w-full px-1 py-1 h-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehQn_W51y1OSvdrnlZgjRLaEDt3N24v951A&s"
                alt="Bath & Body"
              />
            </div>
            <h1 className="font-sans tracking-wide text-md text-center py-2">
              Fruits & Vegetables
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
