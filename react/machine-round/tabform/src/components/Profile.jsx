import React from 'react'

const Profile = ({data , setData}) => {
    const {name , email , age} = data;
    const handleinput = (e , item) =>{
        setData({
            ...data , [item]: e.target.value
        })

    }

  return (
    <div>
        <div style={{margin: "7px 0"}}>   
            <label> Name : </label>
            <input type='text'   value={name} onChange={(e) => handleinput(e,"name")} />
        </div>
        <div style={{margin: "7px 0"}}>
            <label> Email : </label>
            <input type='email' value={email} onChange={(e) => handleinput(e,"email")} />
        </div>
        <div style={{margin: "7px 0"}}>
            <label> Age : </label>
            <input type='number'  value={age} onChange={(e) => handleinput(e,"age")} />
        </div>
    </div>
  )
}

export default Profile