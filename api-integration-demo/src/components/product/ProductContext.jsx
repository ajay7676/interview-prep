import axios from "axios";
import {  createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const[filterCategory , setFilterCategory] = useState('all');
    const[searchItem , setSearchItem] = useState("");
    const[sortItem , setSortItem] = useState("")
    const[currentPage ,setCurrentpage] = useState(0);

    const fetchData = async () => {

       try {
         const response = await axios.get('https://fakestoreapi.com/products');

         setProducts(response?.data)
           
       } catch (error) {
         console.log(error)
        
       }
    }

    useEffect(() => {
     fetchData();
    }, [])
    
    


    return (
        <ProductContext.Provider value={{products ,  filterCategory , setFilterCategory  , searchItem , setSearchItem ,sortItem , setSortItem ,currentPage ,setCurrentpage}}>
            {children}
        </ProductContext.Provider>
    )

}