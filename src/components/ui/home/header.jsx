function Header() {
  return (
    <header className="py-16 bg-[#6050DC] text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Your Favorite Store</h1>
        <p className="text-lg md:text-xl mb-6">Discover the latest trends with our modern collection</p>
        <a href="#shop" className="inline-block bg-white text-[#6050DC] px-6 py-2 rounded-full font-medium text-lg hover:bg-gray-200">
          Shop Now
        </a>
      </div>
    </header>
  );
}

export default Header;
