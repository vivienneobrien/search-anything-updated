const Filters = ({
  filters,
  onFilterChange
}) => (
  <>
    <button
      className="btn btn-primary dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Filter
    </button>

    {/* Updating values*/}
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li>
        <select
          className="form-select"
          aria-label="Default select example"
          value={filters.country}
          onChange={({ target }) => {
            onFilterChange({ country: target.value })
          }}
        >
          {/* Values for Country */}
          <option value="" hidden>
            Country
          </option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Bhutan">Bhutan</option>
        </select>
      </li>

      {/* Values for Ages*/}
      <li className="input-group p-3">
        <div className="row">
          <div className="col-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
          </div>
          <div className="col-6">
            <input
              type="number"
              contentEditable="false"
              disabled
              value={filters.age}
            />
          </div>
        </div>
        <input
          type="range"
          className="form-range"
          id="age"
          min="0"
          max="100"
          value={filters.age}
          onChange={({ target }) => {
            onFilterChange({ age: target.value })
          }}
        />
      </li>

      {/* Values for Gender*/}
      <li>
        <select
          className="form-select"
          aria-label="Default select example"
          value={filters.gender}
          onChange={({ target }) => {
            onFilterChange({ gender: target.value })
          }}
        >
          <option defaultValue hidden>
            Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </li>

      {/* Values for Profession */}
      <li>
        <select
          className="form-select"
          aria-label="Default select example"
          value={filters.prof}
          onChange={({ target }) => {
            onFilterChange({ prof: target.value })
          }}
        >
          <option defaultValue hidden>
            Profession
          </option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Business">Business</option>
          <option value="Lawyer">Lawyer</option>
          <option value="Footballer">Footballer</option>
        </select>
      </li>
    </ul>
  </>
);


export default Filters;
