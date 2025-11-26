import { useEffect } from "react";

const useInfiniteScroll = (callback, hasMore = true) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        hasMore &&
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 200
      ) {
        callback();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback, hasMore]);
};

export default useInfiniteScroll;
