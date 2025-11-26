const SortDropdown = ({ sort, setSort }) => (
  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="border p-2 rounded w-full md:w-1/4 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
  >
    <option value="">Sort By</option>
    <option value="price-asc">Price: Low to High</option>
    <option value="price-desc">Price: High to Low</option>
  </select>
);

export default SortDropdown;
