const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br ">
      <div className="text-center p-8 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 ">
        <h1 className="text-5xl font-bold mb-4">Welcome to ShopStream</h1>
        <p className="text-xl mb-8">
          Discover amazing products from around the world
        </p>
        <a
          href="/products"
          className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-md py-2 px-3 rounded-md cursor-pointer"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Home;
