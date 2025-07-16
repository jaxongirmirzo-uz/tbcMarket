import { useContext, useState } from "react";
import { globalContext } from "../context/GlobalContext";
import toast from "react-hot-toast";

function Products({ product }) {
  const { dispatch, basket } = useContext(globalContext);

  const addProduct = (e, product) => {
    e.preventDefault();
    const isAdded = basket.some((item) => {
      product.id === item.id;
    });
    if (isAdded) {
      toast.error("already exists");
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: product });
      toast.success("Added");
    }
  };

  return (
    <>
      <div className="card bg-blue-300 w-96 shadow-sm mb-3 ml-[480px] inline-block ">
        <figure>
          <img
            className="bg-white rounded-4xl mt-3"
            src={product.thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl"> {product.title} </h2>
          <p className="line-clamp-3">{product.description}</p>
          <div className="card-actions justify-end items-center">
            <h3 className="text-2xl">{product.price}$</h3>

            <button
              onClick={(e) => {
                addProduct(e, product);
              }}
              className="btn btn-primary ml-auto"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
