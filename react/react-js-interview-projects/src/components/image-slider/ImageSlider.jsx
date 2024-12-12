import React, { useState, useEffect } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetachImages = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== " ") fetachImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

  const clickOnPrevSlide = (getCurrentIndex) =>{
    setCurrentSlide( currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    console.log("Prev Icon" , currentSlide);
  }

  const clickOnNextSlide = (getCurrentIndex) =>{

    setCurrentSlide(currentSlide === images.length -1  ? 0  :  currentSlide + 1);
    console.log("Next Icon" , currentSlide)


  }
  return (
    <>
      <h3 className="m-3"> Image Slider</h3>
      <div className="container">
        <BsArrowLeftCircleFill onClick={clickOnPrevSlide} className="arrow arrow-left" />
        {images && images.length
          ? images.map((imageItem, index) => (
              <img
                key={imageItem.id}
                src={imageItem.download_url}
                alt={imageItem.author}
                className={ currentSlide === index ? "current-image" : "current-image hide-current-image"}
              />
            ))
          : null}
        <BsArrowRightCircleFill onClick={clickOnNextSlide} className="arrow arrow-right" />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator" }></button>
              ))
            : null}
        </span>
      </div>
    </>
  );
};

export default ImageSlider;
