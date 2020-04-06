import React, { Component } from 'react';
import SearchResultsRow from './search-results-row';

const SearchResults = (props) => {
  const tvshowRows = props.filteredTvshows.map(t =>
    <SearchResultsRow key={t.id.toString()} tvshow={t}
        setActiveTvshow={props.setActiveTvshow} />);
  return (
    <div className="mt-2" >
      <h4>Results for {props.status}:</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <td>name</td>
            <td>rating</td>
            <td>seasons</td>
          </tr>
        </thead>
        <tbody>
          {tvshowRows}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResults;
