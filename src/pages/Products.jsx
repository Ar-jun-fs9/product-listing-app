import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const categories = [
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "mobile-accessories",
  "motorcycle",
  "skin-care",
  "smartphones",
  "sports-accessories",
  "sunglasses",
  "tablets",
  "tops",
  "vehicle",
  "womens-bags",
  "womens-dresses",
  "womens-jewellery",
  "womens-shoes",
  "womens-watches"
];

const Products = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { allProducts, loading: globalLoading } = useProducts();
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sort, setSort] = useState("");

  const limit = 20; // Number of products to load per batch

  useEffect(() => {
    setSelectedCategory(category || "");
  }, [category]);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    navigate(value ? `/products/${value}` : "/products");
  };

  const filteredProducts = useMemo(() => {
    let filtered = allProducts;

    if (search) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    if (sort === "price-asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sort === "price-desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [allProducts, search, selectedCategory, sort]);

  useEffect(() => {
    const initial = filteredProducts.slice(0, limit);
    setDisplayedProducts(initial);
    setSkip(initial.length);
    setHasMore(initial.length < filteredProducts.length);
  }, [filteredProducts]);

  const loadMore = useCallback(() => {
    if (!hasMore) return;

    const nextBatch = filteredProducts.slice(skip, skip + limit);
    setDisplayedProducts((prev) => [...prev, ...nextBatch]);
    setSkip((prev) => prev + nextBatch.length);

    if (skip + nextBatch.length >= filteredProducts.length) {
      setHasMore(false);
    }
  }, [filteredProducts, skip, hasMore]);

  useInfiniteScroll(loadMore, hasMore);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onChange={handleCategoryChange}
        />
        <SortDropdown sort={sort} setSort={setSort} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {globalLoading && <Loader />}
      {!globalLoading && hasMore && <Loader />}
    </div>
  );
};

export default Products;