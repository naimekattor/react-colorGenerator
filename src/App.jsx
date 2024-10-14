import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
function randomColorUtility(length) {
  return Math.floor(Math.random() * length);
}
const App = () => {
  const [typeOfColor, setTypeOfColor] = useState("rgb");
  const [color, setColor] = useState("#000000");
  const handleCreatehexColor = () => {
    //#123456
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };
  const handleCreateRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRgbColor();
    else handleCreatehexColor();
  }, [typeOfColor]);
  return (
    <>
      <div className="content" style={{ background: color }}>
        <h2 className="text-white text-center">Color Generator</h2>
        <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "rgb " ? handleCreateRgbColor : handleCreatehexColor
          }
        >
          Create Random Color
        </button>
        <div className="display">
          <h3>{typeOfColor === "hex" ? "hex Color : " : "RGB Color :"}</h3>

          <h3>{color}</h3>
        </div>
      </div>
    </>
  );
};

export default App;
