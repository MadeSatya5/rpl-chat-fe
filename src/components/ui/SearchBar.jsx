import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="search-bar">
      <CiSearch />
      <input type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
