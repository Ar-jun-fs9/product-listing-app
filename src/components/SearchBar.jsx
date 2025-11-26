const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="border p-2 rounded w-full md:w-1/3 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400"
  />
);

export default SearchBar;
