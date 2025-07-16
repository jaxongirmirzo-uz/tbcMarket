import Products from "../components/Products";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Home() {
  const { data: products, isPending } = useFetch(
    "https://dummyjson.com/product"
  );

  if (isPending) {
    return (
      <>
        <span className="loading loading-spinner loading-xl ml-[650px] mt-[200px]"></span>
      </>
    );
  }
  console.log(products);

  return (
    <>
      <h1>Home</h1>
      <h1 className="ml-9 text-4xl">
        Products : {products && products.products.length}
      </h1>

      {products &&
        products.products.map((p) => {
          return (
            <>
              <Link key={p.id} to={`/singleProduct/${p.id}`}>
                <Products product={p} />
              </Link>
            </>
          );
        })}
    </>
  );
}

export default Home;
