import React, { useState, useEffect } from "react";

const RandomColor = () => {
   const [typeOfColor, setTypeOfColor] = useState('hex') ;
   const [color, setColor] = useState("olive")

   const randomColorUtility = (length) =>{
      return Math.floor(Math.random() * length);
   }

   const handleCreateRandomHexColor  = () =>{
    const hex = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
      }
      setColor(hexColor);
      console.log(hexColor)
   }

   const handleCreateRandomRgbColor = () =>{

    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
   }

   useEffect(() => {
     if(typeOfColor  === "rgb") handleCreateRandomRgbColor();
     else handleCreateRandomHexColor();
   }, [typeOfColor])
  console.log(typeOfColor)
  return (
    <>
      <h1 style={{ margin: "3rem 0" }}>2. RandomColor</h1>
      <div
        style={{
          width: "100%",
          height: "100vh",
          background: color,
          textAlign:"center"
        }}
      >
        <button style={{padding: "7px"}} onClick={() => setTypeOfColor('hex')} >Create HEX Color</button>
        <button style={{padding: "7px"}} onClick={() => setTypeOfColor('rgb')} >Create RGB Color</button>
        <button style={{padding: "7px"}} onClick={typeOfColor === 'rgb' ? handleCreateRandomRgbColor : handleCreateRandomHexColor }>Generate Random Color</button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "60px",
            marginTop: "50px",
            flexDirection: "column",
            gap: "20px",
          }}
        >
         {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
          <h1>{color}</h1>
        </div>
      </div>
    </>
  );
};

export default RandomColor;
