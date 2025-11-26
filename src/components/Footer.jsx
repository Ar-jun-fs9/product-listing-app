const Footer = () => (
  <footer className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 p-8 border-t mt-1">
    <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
      {/* Left - ShopStream */}
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-lg mb-2">ShopStream</h3>
        <p className="text-sm">
          A modern, responsive e-commerce product listing app built with React,
          Vite, and Tailwind CSS.
        </p>
      </div>

      {/* Center - Features */}
      <div className="flex-1 text-center">
        <h3 className="font-semibold text-lg mb-2">Features</h3>
        <ul className="text-sm space-y-1">
          <li>Infinite scrolling</li>
          <li>Search products</li>
          <li>Category filtering</li>
          <li>Sorting options</li>
          <li>Dark/Light theme toggle</li>
        </ul>
      </div>

      {/* Right - API & Credits */}
      <div className="flex-1 text-right">
        <h3 className="font-semibold text-lg mb-2">API & Credits</h3>
        <p className="text-sm">
          Powered by{" "}
          <a
            href="https://dummyjson.com/"
            className="underline hover:text-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            DummyJSON API
          </a>
        </p>
        <p className="text-xs mt-2">&copy; 2025 ShopStream</p>
      </div>
    </div>
  </footer>
);

export default Footer;
