import React, { useState } from "react";

function Filter() {
  const [activeCategory, setActiveCategory] = useState(false);
  const [ChildrenCategory, setChildrenCategory] = useState(false);
  const [manCategory, setManCategory] = useState(false);

  const handleManCheckbox = () => {
    setManCategory((prev) => !prev);
  };

  const handleCheckbox = () => {
    setActiveCategory((prev) => !prev);
  };
  const handleChildrenCheckbox = () => {
    setChildrenCategory((prev) => !prev);
  };

  return (
    <div className="">
      <h6 className="text-xs lg:text-md" className="mb-5">Catagories</h6>
      <ul>
        <div className="flex flex-col justify-start">
          <li className="flex flex-row gap-2 justify-start items-center w-[25vh]">
            <input
              type="checkbox"
              name=""
              onClick={handleCheckbox}
              id=""
              checked={activeCategory}
            />
            Woman wear
          </li>
          {activeCategory === true && (
            <ul className="ml-5">
              <li>
                <input type="checkbox" />
                Midi Dresses
              </li>
              <li>
                <input type="checkbox" />
                Maxi Dresses
              </li>
              <li>
                <input type="checkbox" />
                Prom Dresses
              </li>
              <li>
                <input type="checkbox" />
                Little Black Dresses
              </li>
              <li>
                <input type="checkbox" />
                Mini Dresses
              </li>
            </ul>
          )}
        </div>
        <div className="flex flex-col justify-start">
          <li className="flex flex-row gap-2 justify-start items-center w-[25vh]">
            <input
              type="checkbox"
              name=""
              onClick={handleManCheckbox}
              id=""
              checked={manCategory}
            />
            Man wear
          </li>
          {manCategory === true && (
            <ul className="ml-5">
              <li>
                <input type="checkbox" />
                Midi Dresses
              </li>
              <li>
                <input type="checkbox" />
                Maxi Dresses
              </li>
              <li>
                <input type="checkbox" />
                Prom Dresses
              </li>
              <li>
                <input type="checkbox" />
                Little Black Dresses
              </li>
              <li>
                <input type="checkbox" />
                Mini Dresses
              </li>
            </ul>
          )}
        </div>
        <div className="flex flex-col justify-start">
          <li className="flex flex-row gap-2 justify-start items-center w-[25vh]">
            <input
              type="checkbox"
              name=""
              onClick={handleChildrenCheckbox}
              id=""
              checked={ChildrenCategory}
            />
            Children wear
          </li>
          {ChildrenCategory === true && (
            <ul className="ml-5">
              <li>
                <input type="checkbox" />
                Midi Dresses
              </li>
              <li>
                <input type="checkbox" />
                Maxi Dresses
              </li>
              <li>
                <input type="checkbox" />
                Prom Dresses
              </li>
              <li>
                <input type="checkbox" />
                Little Black Dresses
              </li>
              <li>
                <input type="checkbox" />
                Mini Dresses
              </li>
            </ul>
          )}
        </div>
      </ul>
      {/* <div className="widget price mb-50">
        <h6 className="text-xs lg:text-md" className="widget-title mb-30">Filter by Price</h6>
        <input
          type="range"
          min={0}
          max="100"
          value="40"
          className="range range-secondary"
        />
      </div> */}

      <div className="  mb-70 mt-10">
        <h6 className="text-xs lg:text-md" className="mb-30">Filter by Color</h6>
        <div className="">
          <ul className="flex flex-row justify-start gap-2">
            <li className="bg-gray-300">
             
            
            </li>
            <li className="red">
             
              <span>(25)</span>
            </li>
            <li className="yellow">
             
              <span>(112)</span>
            </li>
            <li className="green">
             
              <span>(72)</span>
            </li>
            <li className="teal">
             
              <span>(9)</span>
            </li>
            <li className="cyan">
             
              <span>(29)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="widget size mb-50">
        <h6 className="text-xs lg:text-md" className="widget-title mb-30">Filter by Size</h6>
        <div className="widget-desc">
          <ul className="flex flex-row justify-start gap-2">
            <li className="hover:bg-btnbg px-3 py-2">XS</li>
            <li className="hover:bg-btnbg px-3 py-2">S</li>
            <li className="hover:bg-btnbg px-3 py-2">M</li>
            <li className="hover:bg-btnbg px-3 py-2">L</li>
            <li className="hover:bg-btnbg px-3 py-2">XL</li>
            <li className="hover:bg-btnbg px-3 py-2">XXL</li>
          </ul>
        </div>
      </div>

      <div className=" ">
        <h6 className="text-sm mb-3 lg:text-lg" >Recommended</h6>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-2">
          <div className=" flex flex-col justify-center gap-2 mb-30">
            <div className="mb-2 mr-3">
              <img className="w-[10vh] h-[10vh]"
                src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg"
                alt=""
              />
            </div>
            <div className="">
              <h6 className="text-xs lg:text-md">Men’s T-shirt</h6>
              <p>$ 39.99</p>
            </div>
          </div>
          <div className=" flex flex-col  mb-30">
            <div className="mb-2 mr-3">
              <img className="w-[10vh] h-[10vh]"
                src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg"
                alt=""
              />
            </div>
            <div className="">
              <h6 className="text-xs lg:text-md">Blue mini top</h6>
              <p>$ 19.99</p>
            </div>
          </div>
          <div className=" flex flex-col ">
            <div className="mb-2 mr-3">
              <img className="w-[10vh] h-[10vh]"
                src="https://res.cloudinary.com/dzqxgr4lr/image/upload/v1706181849/product-1_ucqfqi.jpg"
                alt=""
              />
            </div>
            <div className="">
              <h6 className="text-xs lg:text-md">Women’s T-shirt</h6>
              <p>$ 39.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
