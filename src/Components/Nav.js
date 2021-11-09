import React from "react";

function Nav() {
  return (
    <div className="container flex p-2">
      <div>
        <img src="" alt="logo" />
      </div>

      <ul className="flex ml-auto lg:ml">
        <li className="p-2">Home</li>
        <li className="p-2">Home</li>
        <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
          Register
        </button>
      </ul>
    </div>
  );
}

export default Nav;
