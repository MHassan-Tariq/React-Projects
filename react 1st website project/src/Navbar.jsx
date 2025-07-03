
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
     <img className="h-8" src="src/assets/nike.png" alt="" />
      <div className="flex space-x-6">
        <a href="#menu" className="hover:text-gray-300">Menu</a>
        <a href="#location" className="hover:text-gray-300">Location</a>
        <a href="#aboutus" className="hover:text-gray-300">About Us</a>
        <a href="#courses" className="hover:text-gray-300">Courses</a>
        <a href="#pricing" className="hover:text-gray-300">Pricing</a>
      </div>
      <button className="p-2 rounded bg-blue-600 hover:bg-blue-700">Login</button>
    </nav>
  );
};
export default Navbar;
