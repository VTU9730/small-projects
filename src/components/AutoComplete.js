import { useEffect, useState } from "react";

const AutoComplete = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([])
  const [flag, setFlag] = useState(false)
  const [data, setData] = useState([])

  function fetchProducts() {
    setTimeout(async () => {
      try {
        const data = await fetch("https://dummyjson.com/products?limit=190");
        const { products } = await data.json();
        setProducts(products);
        const cate = products.map((ele) => ele.category);
        setCategories(cate);
        setLoading(false);
      } catch (e) {
        console.log("error", e.message);
        setError(e.message);
      }
    }, 500);
  }

  function handleChnage(e) {
    setInput(e.target.value)
    setFlag(false)
    const filteredCategories =[... new Set(categories.map((ele) => {
        if(ele.includes(e.target.value)){
            return ele
        }
    }))];
    
    setFilteredProducts(filteredCategories)
    console.log("filteredCategories", filteredCategories);
  }

  function handleSearch(){
    const filteredProducts = products.map((ele)=>{
        if(ele.category == input){
            return ele
        }
    })
    setData(filteredProducts)
    console.log("data",data);
    
  }

  function handleClick(e){
    setInput(e)
    setFlag(!flag)
  }

  console.log("products", products);
  console.log("categories", categories);
  console.log("input", input);

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="autocomplete">
      <h1>Search your product</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            handleChnage(e);
          }}
        ></input>
        <button className="button" onClick={()=>{handleSearch()}}>Seatch</button>
        {filteredProducts && !flag && (
            <div>
                {filteredProducts.map((e)=>{
                    return(
                        <p><button onClick={()=>handleClick(e)}>{e}</button></p>
                    )
                })}
            </div>
        )}

        {
            data.length>0 && data.map(ele=>{
                if(ele !== undefined){
                    return(
                    <div>
                        <img src={ele.images[0]} alt="" width="200" height="200"/>
                        <p>{ele.title}</p>
                    </div>
                )
                }
                
            })
        }
      </section>
    </main>
  );
};

export default AutoComplete;
