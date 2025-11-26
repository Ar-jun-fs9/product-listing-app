import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { dark, setDark } = useContext(ThemeContext);
  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold text-sm py-2 px-3 rounded-md cursor-pointer"
    >
      {dark ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
