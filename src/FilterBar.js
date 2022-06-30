const FilterBar = () => {
    return (<div className="filter-bar flex">
        <div className="toggle-container">
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round" id="toggle-switch"></span>
            </label>
            <div className="toggle-label">
                <p>Show only Answered Questions
                </p>
            </div>
        </div>
        <div className="questions-answers-search">
            <form action="/" method="GET" className="form">
                <input type="search" className="search-field" placeholder="Search Questions & Answers" />
                <span role="presentation"></span>
                <button className="c-button-unstyled search-button" type="submit" aria-label="Search" title="Search">
                    <svg aria-hidden="true" role="img" viewBox="0 0 100 100">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m28.15 26.7-7.03-7.02a9.93 9.93 0 1 0-17.6-6.29 9.93 9.93 0 0 0 16.22 7.67l7.03 7.03a.97.97 0 0 0 1.38 0c.38-.38.38-1 0-1.38zM5.48 13.4a7.98 7.98 0 1 1 15.95.02 7.98 7.98 0 0 1-15.95-.02z">
                        </path>
                        </svg>
                    </svg>
                </button>
            </form>
        </div>
        <div className="sort flex align-items-center">
            <label className="sort-by-label">Sort by: </label>
            <div className="options">
                <select autoComplete="off" className="tb-select" id="sort-selections">
                    <option defaultValue="MOST-HELPFUL-ANSWERS">Most helpful</option>
                    <option value="MOST_ANSWERS">Most answers</option>
                    <option value="MOST_RECENT_QUESTIONS">Most recent questions</option>
                    <option value="MOST_RECENT_ANSWERS">Most recent answers</option>
                    <option value="OLDEST_QUESTIONS">Oldest questions</option>
                </select>
            </div>
        </div>
    </div>);
}

export default FilterBar;