import React, { Component } from 'react';

class TvshowFilter extends Component {
  state = {}

  onSearchChange = (e) => {
    const status = e.target.value;
    this.props.filterTvshows(status);
  }

  render() {
    const search = this.state.search;
    const statuses = this.props.statuses || [];

    return (
      <div className="form-group row mt-3">
        <div className="offset-md-2 col-md-4">
          Look for a TV show by 'Ended'/'Not Ended' shows:
        </div>
        <div className="col-md-4">
          <select className="form-control" value={search} onChange={this.onSearchChange}>
            {statuses.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>
    );
  }
}

export default TvshowFilter;
