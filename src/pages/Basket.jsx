import { useContext, useState } from "react";
import { globalContext } from "../context/GlobalContext";

import { MdOutlineAddShoppingCart } from "react-icons/md";

function Basket() {
  const [counter, setCounter] = useState(0);
  const { basket: products } = useContext(globalContext);
  return (
    <div>
      {products &&
        products.map((p) => {
          return (
            <>
              <div className="flex border border-black px-6 py-5 rounded-3xl mx-4 my-4">
                <div>
                  <img
                    className="bg-blue-950 rounded-4xl "
                    src={p.thumbnail}
                    alt=""
                    width={200}
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <p className="italic mb-13 ml-5">
                      By the company :
                      <span className="font-bold text-2xl">{p.brand}</span>
                    </p>
                    <h1 className="text-3xl mt-4 ml-46 underline mb-[80px]">
                      {p.title}
                    </h1>
                  </div>
                  <span className="text-4xl ml-5">Price : $ {p.price}</span>
                  {counter === 0 && (
                    <button
                      onClick={() => setCounter(counter + 1)}
                      className="btn btn-accent absolute right-30 bottom-85 w-[280px]"
                    >
                      Buy <MdOutlineAddShoppingCart className="text-3xl" />
                    </button>
                  )}

                  {counter > 0 && (
                    <div className="flex items-center gap-3 absolute right-30 bottom-85">
                      <button
                        onClick={() => setCounter(counter + 1)}
                        className="btn btn-accent"
                      >
                        &#43;
                      </button>
                      <span>{counter}</span>
                      <button
                        onClick={() => setCounter(counter - 1)}
                        className="btn btn-error"
                      >
                        &#8722;
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default Basket;
