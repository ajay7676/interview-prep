import express from 'express';

const app = express();
app.get('/api/productus' , (req,res) =>{
    const products= [
        {
          "id": 1,
          "name": "Product A",
          "price": 19.99,
          "image": "https://picsum.photos/200/300"
        },
        {
          "id": 2,
          "name": "Product B",
          "price": 29.99,
          "image": "https://picsum.photos/id/237/200/300"
        },
        {
          "id": 3,
          "name": "Product C",
          "price": 39.99,
          "image": "https://picsum.photos/seed/picsum/200/300"
        },
        {
          "id": 4,
          "name": "Product D",
          "price": 49.99,
          "image": "https://picsum.photos/200/300?grayscale"
        }
      ] 
      
      setTimeout(() => {
        res.send(products)
      }, 3000);
  //http://localhost:3000/api/productus?search=Product A
  if (req.query.search) {
   const filterProduct = products.filter(product => product.name.includes(req.query.search))
   res.send(filterProduct) ;
   return;
  }
})

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})