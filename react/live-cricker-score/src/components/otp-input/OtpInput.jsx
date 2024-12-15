import React, { useState, useEffect, useRef } from "react";
import "./style.css";

const OtpInput = () => {
  const [inputs, setInputs] = useState(new Array(4).fill(""));
  const [inputArray, setInputArray] = useState(inputs);
  console.log("Input Array", inputArray);
  const refs = [useRef(), useRef(), useRef(), useRef()];
  const [msg, setMsg] = useState(false)


  const handleIput = (e, index) => {
    const val = e.target.value;
    console.log(val);
    //  console.log(val)
    if (!Number(val)) return;
    const copyArray = [...inputArray];
    copyArray[index] = val;
    setInputArray(copyArray);
    if (index < inputArray.length - 1) {
      refs[index + 1].current.focus();
    }
  };

  useEffect(() => {
    refs[0].current.focus();
  }, []);
  const handleKey = (e, index) => {
    console.log(e.keyCode);
    if (e.keyCode === 8) {
      const copyArray = [...inputArray];
      copyArray[index] = "";
      setInputArray(copyArray);
      if (index > 0) {
        refs[index - 1].current.focus();
      }
    }
    if (index < inputArray.length - 1) {
      if (e.keyCode === 39) {
        refs[index + 1].current.focus();
      }
    }
    if (index > 0) {
      if (e.keyCode === 37) {
        refs[index - 1].current.focus();
      }
    }
  };
  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text");
    const dataArray = data.split("");
    setInputArray(dataArray);

    refs[inputArray.length - 1].current.focus();
  };

  const handleSubmit = () =>{
    inputArray.map((currValue) =>{
       if(currValue == "" ){
          setMsg(false);
          alert("Please enter vaild input ")
       }
       else{
        setMsg(true)

       }

    })
  }
  return (
    <>
      <div className="otp-container">
        <h1>OTP Fields</h1>
        <h3> { msg ? "Verified" : "Fill All Inputs"}</h3>
        {inputs.map((currValue, index) => {
          return (
            <input
              key={index}
              ref={refs[index]}
              maxLength="1"
              value={inputArray[index]}
              type="text"
              onPaste={handlePaste}
              onChange={(e) => handleIput(e, index)}
              onKeyDown={(e) => handleKey(e, index)}
            />
          );
        })}
        <br />
        <button onClick={handleSubmit }>Verify OTP</button>
      </div>
    </>
  );
};

export default OtpInput;
