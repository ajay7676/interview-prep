import { useEffect, useCallback, useState , useRef  } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setcharacterAllowed] = useState(false);
  const [pasword, setPasword] = useState("");
  const inputRef = useRef(null);

  const paswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+-={}[]<>,.?|~`:str";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPasword(pass);
  }, [length, numberAllowed, characterAllowed]);
  

  useEffect(() => {
    paswordGenerator();
  }, [length, numberAllowed ,characterAllowed, paswordGenerator]);

  const copyToCLickBoard = () =>{
     inputRef.current.setSelectionRange(0,5)   ;
     inputRef.current.focus();
     try {
      const selectedText = inputRef.current.value.slice(
        inputRef.current.selectionStart,
        inputRef.current.selectionEnd
      );
      navigator.clipboard.writeText(selectedText);
      console.log('Copied:', selectedText);
      
     } catch (err) {
      console.error('Failed to copy:', err);
     }

  }

  return (
    <>
      {/* <h1 className='text-4xl text-center mt-5'>Paaaword Generator</h1> */}
      <div className="w-full max-w-md mx-auto shaow-md px-4v py-3 my-8 text-white bg-gray-500  rounded-md">
        <h1 className="text-white text-center text-2xl">Password Genrator </h1>
        <div className="flex  overflow-hidden mb-4 p-5">
          <input
            type="text"
            value={pasword}
            className="outline-0 rounded-2xl w-full py-1 px-3 text-gray-600 bg-white"
            placeholder="Password"
            readOnly
            ref={inputRef}

          />
          <button
          onClick={copyToCLickBoard}
           className="bg-blue-600 py-2 cursor-pointer px-2 rounded-sm ml-2 text-white">
            {" "}
            Copy
          </button>
        </div>
        <div className="flex  text-sm gap-3.5 px-5 justify-start w-100">
          <div className=" flex whitespace-nowrap gap-x-1 items-center ">
            <input
              type="range"
              min={8}
              maxLength={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className=" flex  gap-x-1 items-center ">
            Number
            <input type="checkbox" name="number" onChange={() => setNumberAllowed((prev) => !prev) } value={numberAllowed} />
          </div>
          <div className=" flex  gap-x-1 items-center ">
            Character
            <input type="checkbox" name="character" onChange={() => setcharacterAllowed((prev) => !prev) }  value={characterAllowed} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
