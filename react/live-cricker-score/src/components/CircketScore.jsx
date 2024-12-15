import React, { useState, useEffect } from "react";
import Circle from "./circle.png";

const CircketScore = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState(" ")
  const [search, setSearch] = useState("")


  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.cricapi.com/v1/cricScore?apikey=34ec0b20-ed7c-42af-b0bb-3fc9792e8f46"
      );
      const data = await response.json();
      console.log(data)
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data)

  useEffect(() => {
    getData()
  }, []);

  const handleInput = (e) =>{
    console.log(e.target.value)
    setInputData(e.target.value)

  }
   const handleButton = () =>{
      setSearch(inputData)
   }
  return (
    <div className="main-container">
      <div className="searchBar">
        <input type="text" placeholder="Seach Match , Series" name="" id="" onChange={handleInput} />
        <button onClick={handleButton}>Search</button>
      </div>
      <div className="heading">
        <img src={Circle} alt="" />
        <p>Live Cricket Score App</p>
      </div>
      <div className="container">
        {data ? (
          data.map((currElement, index) => {
            if (currElement.status !== "Match not started") {
                // if(currElement.series.includes())
              return (
                <>
                  <div className="card" key={currElement.id}>
                    <h3>{currElement.series}</h3>
                    <h3>{currElement.matchType}</h3>
                    <div className="img">
                      <div>
                        <img src={currElement.t1img} />
                        <p>{currElement.t1}</p>
                        <p>{currElement.t1s}</p>
                      </div>
                      <div>
                        <img src={currElement.t2img} />
                        <p>{currElement.t2}</p>
                        <p>{currElement.t2s}</p>
                      </div>
                    </div>
                    <p className="status">Status : {currElement.status}</p>
                  </div>
                </>
              );
            }
          })
        ) : (
          <p>Data Not Found !</p>
        )}
      </div>
    </div>
  );
};

export default CircketScore;
