const CategoryFilter = ({ categories, selected, onChange }) => (
  <select
    value={selected}
    onChange={(e) => onChange(e.target.value)}
    className="border p-2 rounded w-full md:w-1/4 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
  >
    <option value="">All Categories</option>
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat.replace(/-/g, ' ')}
      </option>
    ))}
  </select>
);

export default CategoryFilter;
