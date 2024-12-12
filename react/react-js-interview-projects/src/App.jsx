import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion/Accordian'
import RandomColor from './components/random-color/RandomColor'
import RatingBar from './components/rating/RatingBar'
import ImageSlider from './components/image-slider/ImageSlider'
import LoadMoreData from './components/load-more-data/LoadMoreData'
import TreeViewCom from './components/tree-view/TreeViewCom'
import QRGenerator from './components/qr-generator/QRGenerator'
function App() {

  return (
    <>
      <h1 style={{textAlign:'center'}}>25 react js interviews projects </h1>
      {/*Start Accordion Componetns */}
      {/* <Accordion />  */}
      {/*End Accordion Componetns */}
      {/* Rand Color Components */}
       {/* <RandomColor /> */}
       {/* <RatingBar numberOfStars={10} /> */}
       {/* <ImageSlider url={'https://picsum.photos/v2/list'} /> */}
       {/* <LoadMoreData /> */}
       {/* <TreeViewCom /> */}
       {/* QR Code Generator */}
        <QRGenerator />
        

    </>
  )
}

export default App
