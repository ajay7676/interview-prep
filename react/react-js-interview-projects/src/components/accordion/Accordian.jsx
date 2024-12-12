import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };
  const handleMultipleSelection = (getCurrentId) => {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    // console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMultiple);
  };
  console.log(selected, multiple);
  return (
    <>
      <h1 style={{ margin: "3rem" }}>1. Accordion</h1>

      <div className="acc-wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
          {" "}
          Enable Multi Selection
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item" key={dataItem.id}>
                <div
                  className="title"
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMultiSelection ? (
                  multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                ) : selected === dataItem.id ? (
                  <div className="acc-content ">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordian;
