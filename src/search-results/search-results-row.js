import React from 'react';

const SearchResultsRow = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActiveTvshow(props.tvshow);
    };

    return <tr onClick={setActive}>
        <td>{props.tvshow.name}</td>
        <td>{props.tvshow.rating}</td>
        <td>{props.tvshow.seasons}</td>
    </tr>
};

export default SearchResultsRow;
