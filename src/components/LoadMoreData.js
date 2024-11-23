import { useEffect, useState } from "react";

const LoadMoreData = () => {
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const [disable, setDisable] = useState(false)

    const fetchData = async() => {
        try{
            const response = await fetch(`https://dummyjson.com/products?skip=${10*count}&limit=30`)
            const data = await response.json()
            setProducts([...products,...data.products])
            setLoading(false)
            if(products.length>100){
                setDisable(true)
            }
        }
        catch(e){
            setError(e.message)
            
        }
    }

    useEffect(()=>{
        fetchData()
    },[count])

    if(error){
        return <h1>Error...</h1>
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    console.log("products",products,products.length);
    

    return(
        <main>
            <h1>Load More Data</h1>
            <section className="products-container">
            {products && products.map(product=>{
                return(
                    <div className="product-div" key={product.id}>
                        <img src={product.thumbnail} alt={product.title} width="300" height="300" />
                        <p>{product.title}</p>
                    </div>
                )
            })}
            </section>
            <button disabled={disable} onClick={()=>setCount(count+1)}>Load more</button>
            {disable?<p>Hey you reached very bottom</p>:null}
            <button><a href="#">go to top</a></button>
        </main>
    )
}

export default LoadMoreData;