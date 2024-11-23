import { useEffect, useState } from "react";
const Slicer = () => {
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchProducts = async () => {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false)
    }
    catch(e){
        setError(e.message)
    }
  };
  console.log("products", products);

  const handlePrev = () => {
    if (current == 0) {
      setCurrent(products.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const handleNext = () => {
    if (current == products.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if(error){
    return(
        <h1>error</h1>
    )
  }

  if(loading){
    return(
        <h1>Loading...</h1>
    )
  }

  return (
    <div>
      <h1>Slicer</h1>
      <section className="products-section">
        {products[current]?.image ? (
          <div className="product-ele">
            <button onClick={() => handlePrev()}>
            <i class="material-icons">chevron_left</i>
            </button>
            <img
              src={products[current].image}
              alt={products[current].image}
              width="300"
              heigth="200"
              className="product-img"
            />
            <button onClick={() => handleNext()}>
            <i class="material-icons">chevron_right</i>
            </button>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
        {/* {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="product-ele">
                <button>Pre</button>
                <img
                  src={product.image}
                  alt={product.image}
                  width="300"
                  heigth="200"
                  className="product-img"
                />
                <button>Next</button>
              </div>
            );
          })} */}
      </section>
    </div>
  );
};

export default Slicer;
