import { useCart } from "../contexts/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 ">Your Cart is Empty</h1>
        <p className=" mb-6">Add some products to get started!</p>
        <a
          href="/products"
          className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-sm py-2 px-3 rounded-md cursor-pointer"
        >
          Shop Now
        </a>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 ">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4  rounded-lg shadow"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold ">{item.title}</h3>
                <p className=" ">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className=" px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className=" px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 p-4  rounded-lg">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold t">
            Total: ${getTotal().toFixed(2)}
          </span>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
