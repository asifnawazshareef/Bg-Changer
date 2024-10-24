import React, { useState } from "react";
const App = () => {
  const [color, setColor] = useState("#222");
  return (
    <div style={{ background: color }} className="h-screen">
      <div className="flex justify-center items-center">
        <div className="bg-white border shadow-2xl w-auto rounded-full px-5 py-3 absolute bottom-10 flex justify-center items-center text-lg font-medium gap-5">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="bg-red-600 text-white shadow-2xl px-5 py-3 rounded-full hover:bg-red-500"
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="bg-green-600 shadow-2xl text-white px-5 py-3 rounded-full hover:bg-green-500"
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="bg-[olive] shadow-2xl text-white px-5 py-3 rounded-full hover:opacity-90"
          >
            Olive
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-600 shadow-2xl text-white px-5 py-3 rounded-full hover:bg-blue-500"
          >
            Blue
          </button>
          <button
            onClick={() => {
              setColor("gray");
            }}
            className="bg-gray-600 shadow-2xl text-white px-5 py-3 rounded-full hover:bg-gray-500"
          >
            Gray
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="bg-yellow-600 shadow-2xl text-white px-5 py-3 rounded-full hover:bg-yellow-500"
          >
            Yellow
          </button>
          <button
            onClick={() => {
              setColor("pink");
            }}
            className="bg-pink-600 shadow-2xl text-white px-5 py-3 rounded-full hover:bg-pink-500"
          >
            Pink
          </button>
          <button
            onClick={() => {
              setColor("purple");
            }}
            className="bg-purple-600 shadow-2xl text-white px-5 py-3 rounded-full hover:bg-purple-500"
          >
            Purple
          </button>
          <button
            onClick={() => {
              setColor("lavender");
            }}
            className="bg-[lavender] shadow-2xl text-black px-5 py-3 rounded-full hover:opacity-90"
          >
            Lavender
          </button>
          <button
            onClick={() => {
              setColor("white");
            }}
            className="bg-white shadow-2xl border  text-black px-5 py-3 rounded-full  hover:opacity-90"
          >
            White
          </button>
          <button
            onClick={() => {
              setColor("black");
            }}
            className="bg-black shadow-2xl text-white px-5 py-3 rounded-full hover:opacity-90"
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
