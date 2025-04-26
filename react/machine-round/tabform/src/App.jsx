
import { useState } from 'react'
import './App.css'
import Interesets from './components/Interesets'
import Profile from './components/Profile'
import Settings from './components/Settings'

function App() {
  const[activeTab , setIsActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Ajay Chauhan",
    email: "ajay@gmail.com",
    age: "29",
    interesets: ["coding", "music", "cricket"],
    theme: ["dark" , "light"]
  })

  const tabs = [
    {
    name : "Profile" ,
    component : Profile
    },
    {
      name : "Interesets" ,
      component : Interesets
    },
    {
      name : "Settings" ,
      component : Settings
    }

]

const ActiveComponent  = tabs[activeTab].component;
const handleTabindex = (index) =>{
     setIsActiveTab(index)
}
  return (
    <>
      <div className='heading-con'>
          {
            tabs.map((tab ,index) => (
              <div key={tab.name} onClick={() => handleTabindex(index)} className={`${activeTab === index ? "heading active" : "heading" }`}>{tab.name}</div>
            ))
          }
      </div>
      <div className='tab-content'>
       <ActiveComponent data={data} setData={setData} />      
      </div>
      
    </>
  )
}

export default App
