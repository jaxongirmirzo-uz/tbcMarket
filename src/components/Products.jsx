function Products({ product }) {
  console.log(product);

  return (
    <>
      <div className="card bg-blue-300 w-96 shadow-sm mb-3 ml-[480px]">
        <figure>
          <img
            className="bg-white rounded-4xl mt-3"
            src={product.thumbnail}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl"> {product.title} </h2>
          <p>{product.description}</p>
          <div className="card-actions justify-end items-center">
            <h3 className="text-2xl">{product.price}$</h3>
            <button className="btn btn-primary ml-auto">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
