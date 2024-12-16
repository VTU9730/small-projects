import useFetchData from "./useFetchData";
import useReSize from "./useReSize";

const ScrollToTopAndBottom = () => {
  const { data, error } = useFetchData(
    "https://dummyjson.com/products?limit=30"
  );
  const size = useReSize();
//   const size = []
  return (
    <main className="scroll">
      <div className="size">
        <p>{size?.width}</p>
        <p>{size?.height}</p>
      </div>
      <h1>Fetch Data with useFetch Hook</h1>
      <a href="#bottom">
        <button id="top">Go to Bottom</button>
      </a>
      {data &&
        data.map((product) => {
          return (
            <div key={product.id}>
              <p>
                {product.id}. {product.title}
              </p>
              <img
                src={product.images[0]}
                alt={product.title}
                width="200"
                height="200"
              />
            </div>
          );
        })}
      <a href="#top">
        <button id="bottom">Go to Top</button>
      </a>
    </main>
  );
};

export default ScrollToTopAndBottom;
