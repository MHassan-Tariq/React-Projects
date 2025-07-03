
const Header = () => {
    return (
      <header className="flex flex-wrap justify-between items-center px-6 py-12 bg-gray-100">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Shoes</h1>
          <p className="text-gray-600 mb-6">Explore our wide variety of shoes that fit your style and comfort. Shop now to elevate your wardrobe!</p>
          <div className="flex space-x-4">
            <button className=" p-2 rounded bg-green-600 hover:bg-green-700">Order Now</button>
            <button className=" p-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700">Category</button>
          </div>
        </div>
        <div className="max-w-md">
          <img src="src/assets/shoes-image.png" alt="Shoes" className="rounded-2xl shadow-lg" />
        </div>
      </header>
    );
  };
export default Header;
