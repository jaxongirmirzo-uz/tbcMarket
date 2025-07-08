import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(
    "https://dummyjson.com/products/" + id
  );
  console.log(product);

  if (isPending) {
    return (
      <>
        <span className="loading loading-spinner loading-xl ml-[650px] mt-[200px]"></span>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center border-b-2 border-gray-400 border-solid pb-3">
        <div className="mr-4">
          <img
            className="mx-6 border-none bg-blue-300 rounded-4xl"
            src={product && product.thumbnail}
            alt=""
            width={500}
            height={550}
          />
        </div>

        <div className="w-[750px]">
          <h1 className="text-4xl mb-4"> {product && product.title}</h1>
          <h2 className="my-4 font-extrabold">
            Category : {product && product.category}
          </h2>
          <p className="mb-3 italic text-gray-500">
            <span className="text-2xl"> description </span>: <br />{" "}
            {product && product.description} Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Itaque quo necessitatibus eveniet
            omnis molestiae illum dolore facere in blanditiis animi. Porro velit
            ullam, fugit magni, omnis inventore voluptatibus est repudiandae
            nemo quam esse mollitia odio vitae vel minus, quia eaque voluptatum
            delectus dolores rem. Commodi, ea temporibus? Numquam, atque. Autem
            neque dolor amet officiis ratione quos porro eligendi assumenda
            impedit consequuntur quidem, eius ipsam libero quam dolorem ipsum
            omnis. Cupiditate?
          </p>
          <h3 className="font-bold">RATING : {product && product.rating} ⭐</h3>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-9 mx-8 mr-auto">
          <h1 className="mb-5 text-2xl">Dimensions : </h1>
          <ol>
            <li className="border-b-gray-300 ">
              <span className="font-semibold">Width</span>:{" "}
              {product && product.dimensions.width} sm
            </li>
            <li className="border-b-gray-300 ">
              <span className="font-semibold">Height</span> :{" "}
              {product && product.dimensions.height} sm
            </li>
            <li className="border-b-gray-300 ">
              <span className="font-semibold">Depth</span> :{" "}
              {product && product.dimensions.depth} sm
            </li>
          </ol>
        </div>

        <div className="mr-3">
          <h3 className="mb-3">
            <span className="font-semibold"> Return policy</span> :{" "}
            {product && product.returnPolicy}{" "}
          </h3>
          <h3 className="font-semibold">Sku: {product && product.sku} </h3>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
