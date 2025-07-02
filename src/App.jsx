import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState(null);
  const [isPending, setPending] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setPending(true);
      const req = await fetch("https://dummyjson.com/product");
      const data = await req.json();
      setPending(false);
      setProducts(data);
    };
    getData();
  }, []);

  if (isPending) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    );
  }

  return (
    <div>
      {products?.products.map((product) => {
        return (
          <li className="my-2" key={product.id}>
            <div className="card card-side bg-base-100 shadow-sm w-[650px]">
              <figure>
                <img
                  src={product.thumbnail}
                  alt="Movie"
                  className="bg-cyan-100 rounded-2xl"
                />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl border-b border-b-black pb-3">
                  {product.title}
                </h2>
                <p className="mt-3.5 w-[200px]">{product.description}</p>
                <div className="card-actions justify-end flex">
                  <p className="text-[18px]">
                    {product.price} <span className="text-emerald-900">$</span>
                  </p>
                  <button className="btn btn-accent">Buy </button>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export { App };
// https://dummyjson.com/product
