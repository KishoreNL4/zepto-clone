import React from "react";
// Import the CSS file for custom styles

function Featuredbrand() {
  return (
    <div className="px-10 py-10">
      <div className="flex flex-row justify-between">
        <h1 className="font-sans tracking-wide text-xl">Featured brand</h1>
        <button className="text-green-500 font-sans tracking-wide px-3">
          View All
        </button>
      </div>
      {/* Horizontal scroll wrapper */}
      <div className="w-full overflow-x-auto hide-scrollbar">
        {" "}
        {/* Add custom class to hide scrollbar */}
        <div className="mt-5 flex space-x-6" style={{ width: "max-content" }}>
          <div className="inline-block   bg-[#F3F9FB]">
            <img
              className="objecy-contain w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] rounded-lg "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRATLyPCE3sCfqA5JeDQP0oGO845Y9IGl_2IA&s"
              alt="brand 1"
            />
          </div>
          <div className="inline-block w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] bg-[#F3F9FB]">
            <img
              className="objecy-contain w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] rounded-lg "
              src=""
              alt="brand 2"
            />
          </div>
          <div className="inline-block w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] bg-[#F3F9FB]">
            <img
              className="objecy-contain w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] rounded-lg "
              src=""
              alt="brand 3"
            />
          </div>
          <div className="inline-block w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] bg-[#F3F9FB]">
            <img
              className="objecy-contain w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] rounded-lg "
              src=""
              alt="brand 4"
            />
          </div>
          <div className="inline-block w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] bg-[#F3F9FB]">
            <img
              className="objecy-contain w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] rounded-lg "
              src=""
              alt="brand 5"
            />
          </div>
          <div className="inline-block w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] bg-[#F3F9FB]">
            <img
              className="objecy-contain w-[400px] lg:w-[400px] h-[200px] lg:h-[230px] rounded-lg "
              src=""
              alt="brand 6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featuredbrand;
