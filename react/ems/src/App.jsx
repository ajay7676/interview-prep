import React, {useState, useEffect, useContext } from 'react'
import Login from "./components/auth/Login";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import { AuthContext } from './context/AuthProvider';
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const  App = () => {
  // useEffect(() => {
  //   setLocalStorage();
  //   getLocalStorage();
  // },)
  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
        
  //     }
      
  //   }
  // }, [authData])
  
  
  const handleLogin = (email,password) =>{
   if (email == "admin@me.com" && password == "123") {
    setUser("admin")
    localStorage.setItem("loggedInUser" , JSON.stringify({role: "admin"}))
   }
   else if(authData){
    const employee = authData.employees.find((e) => email = e.email && password == e.password)
    if (employee) {
      setUser("employees")
      localStorage.setItem("loggedInUser" , JSON.stringify({role: "employees"}))
    }

   }
   else{
    alert("Invaild Credentails")
   }

  }

  return (
    <>
    {
      !user ? <Login handleLogin={handleLogin}/> : " "
    }
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
      {
         user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />
      }
      
    </>
  );
}

export default App;
