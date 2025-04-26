import React from 'react'

const Interesets = (data , setData) => {
    const {interesets} = data
  const handleCheckbox = (e) =>{
    // setData((prevState) => (
    //     {
    //         ...prevState , interesets : e.target.checked ? [...prevState.interesets , e.target.name ] :
    //          prevState.interesets.filter((i) => i !== e.target.name)
    //     }
    // ));
    setData((prevState) => ({
        ...prevState,
        intersets: e.target.checked
          ? [...prevState.intersets, e.target.name]
          : prevState.intersets.filter((i) => i !== e.target.name),
      }));

  }
  return (
    <div>
        <div>
            <input type='checkbox' name='coding' onChange={handleCheckbox}  checked={interesets?.includes('coding')} />
            <label>Coding</label>
        </div>
        <div>
            <input type='checkbox' name='music' onChange={handleCheckbox} checked={interesets?.includes('music')}/>
            <label>Music</label>
        </div>
        <div>
            <input type='checkbox' name='cricket' onChange={handleCheckbox} checked={interesets?.includes("cricket")}/>
            <label>Criclet</label>
        </div>
        <p>Selected option :: {data.interesets}</p>
    </div>
  )
}

export default Interesets