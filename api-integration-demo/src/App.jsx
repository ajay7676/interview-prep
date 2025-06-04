
import './App.css'
import GetPosts from './components/GetPosts'
import PostRequest from './components/PostRequest'
import ProductPage from './components/product/ProductPage '
import { ProductProvider } from './components/product/ProductContext';


function App() {
 



  return (
    <>
      {/* <GetPosts /> */}
      {/* <PostRequest /> */}
      <ProductProvider>
         <ProductPage />
      </ProductProvider>
    </>
  )
}

export default App
