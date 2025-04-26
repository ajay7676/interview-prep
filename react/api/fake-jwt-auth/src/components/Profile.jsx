import React, { useEffect, useState } from "react";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const Profile = () => {
  const [formData, setFormData] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const showData = () => {
    setisLoading(true);
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`https://api.escuelajs.co/api/v1/auth/profile`, header)
      .then((res) => {
        setisLoading(false);
        setFormData(res.data);
      })
      .catch((err) => {
        setisLoading(false);
        alert(`Your are not authorized  ${err}`);
      });
  };
  useEffect(() => {
    showData();
  }, []);

  return (
    <>
      {isLoading && (
        <div className="w-full  h-[calc(100vh-70px)] flex items-center justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      {formData && (
        <div className="flex flex-col mt-7 w-full max-w-2xl mx-auto bg-[#eaeaea] p-4 rounded-sm">
          <ul className="flex flex-col items-center">
            <li>Name : {formData?.name}</li>
            <li>Email : {formData?.email} </li>
            <li>Password : {formData?.password} </li>
            <li>Role : {formData?.role} </li>
            <li className="my-4">
              Profile :{" "}
              <img src={formData?.avatar} className="w-8 h-8 rounded-full " />
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Profile;
