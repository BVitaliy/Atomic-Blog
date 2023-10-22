function Search({ setSearchQuery }) {
  return (
    <input
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search by name or username..."
    />
  );
}

export default Search;
