import { useCart } from "../contexts/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const imageUrl =
    product.images && product.images.length > 0 ? product.images[0] : "";

  const categoryColors = {
    beauty: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    fragrances:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    furniture:
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    groceries:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "home-decoration":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "kitchen-accessories":
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    laptops:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    "mens-shirts":
      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "mens-shoes":
      "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
    "mens-watches":
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    "mobile-accessories":
      "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-200",
    motorcycle:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "skin-care":
      "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200",
    smartphones:
      "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200",
    "sports-accessories":
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    sunglasses:
      "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200",
    tablets:
      "bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-200",
    tops: "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200",
    vehicle: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    "womens-bags":
      "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200",
    "womens-dresses":
      "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200",
    "womens-jewellery":
      "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    "womens-shoes":
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    "womens-watches":
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  };

  const colorClass =
    categoryColors[product.category] ||
    "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300";

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow  dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 flex flex-col h-full">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={product.title}
          className="w-50 h-50 flex items-center justify-center mx-auto rounded-md mb-4 "
        />
      )}
      <h2 className="font-bold text-lg text-center mb-2  dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400">
        {product.title}
      </h2>
      <p className="text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 mb-4 flex">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-auto ">
        <span className={`text-xs px-2 py-1 rounded-full ${colorClass}`}>
          {product.category.replace(/-/g, " ")}
        </span>
        <span className="font-bold text-lg text-green-600 dark:text-green-400">
          ${product.price}
        </span>
      </div>
      <div className="mt-5">
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-sm py-2 px-3 rounded-md cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
