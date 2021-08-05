const Search = ({ query, onQueryChange, onSearch, isLoading }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch();
  }

  return (
    <form className="row" onSubmit={handleSearch}>
      <div className="col-10 col-md-11">
        <input
          type="search"
          className="form-control"
          id="search"
          placeholder="Enter Query To Search"
          value={query}
          onChange={({ target }) => onQueryChange(target.value)}
        />
      </div>
      <div className="col-2 col-md-1">
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          🔎
        </button>
      </div>
    </form>
  );
};

export default Search;
