import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("purple");

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
         
         
          <button onClick={()=>setColor('#16a34a')} style={{backgroundColor:'#16a34a'}} className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Green
          </button>


          <button onClick={()=>setColor('pink')} style={{backgroundColor:'pink'}} className=" outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Pink
          </button>

          <button onClick={()=>setColor('#facc15')} style={{backgroundColor:'#facc15'}}  className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Yellow
          </button>

          <button onClick={()=>setColor('#9333ea')} style={{backgroundColor:'#9333ea'}}  className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Purple
          </button>

          <button onClick={()=>setColor('#dc2626')} style={{backgroundColor:'#dc2626'}}  className="outline-none px-4 py-1 rounded-full shadow-lg text-black">
            Red
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
