import React, {useState , useEffect} from 'react'
import '../components/Products.css'
const Products = () =>  {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProducts = async() => {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()
            setProduct(data)
        }
        fetchProducts()
    }, [])

  return <div className='productWrapper'>
        {
            product.map((products) => {
                <div className='card' key={products.id}>
                    <img src={products.image} alt="" />
                    <h4>{products.title}</h4>
                    <h5>{products.price}</h5>
                    <button className='btn'>Add to cart</button>
                </div>
            })

        
        }
    </div>
}

export default Products