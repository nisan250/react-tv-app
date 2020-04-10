import React, { Component } from 'react';
// import logo from './logo.png';
import './main-page.css';
import Header from './header';
import FeaturedTvshow from './featured-tvshow';
import TvshowFilter from './tvshow-filter';
import SearchResults from '../search-results';
import TvshowDetail from '../tvshow';

class App extends Component {
  state = {}

  componentDidMount() {
    this.fetchTvshows();
  }

  fetchTvshows = () => {
    fetch('/tvshows.json')
    .then(rsp => rsp.json())
    .then(allTvshows => {
      console.log(allTvshows);
      this.allTvshows = allTvshows;
      this.determineFeaturedTvshow();
      this.determineUniqeStatus();
    })
  }

  determineFeaturedTvshow = () => {
    if (this.allTvshows) {
      const randomIndex = Math.floor(Math.random() * this.allTvshows.length);
      const featuredTvshow =  this.allTvshows[randomIndex];
      this.setState({ featuredTvshow });
    };
  }

  determineUniqeStatus = () => {
    const statuses = this.allTvshows
      ? Array.from(new Set(this.allTvshows.map(t => t.status)))
      : [];
      statuses.unshift(null);
    this.setState({ statuses });
  }

  filterTvshows = (status) => {
    this.setState({ activeTvshow: null });
    const filteredTvshows = this.allTvshows.filter((t) => t.status === status);
    this.setState({ filteredTvshows });
    this.setState({ status });
  }

  setActiveTvshow = (tvshow) => {
    this.setState({ activeTvshow: tvshow });
  }

  render() {
    let activeComponent = null;
    if (this.state.status)
      activeComponent = <SearchResults status={this.state.status}
      filteredTvshows={this.state.filteredTvshows} setActiveTvshow={this.setActiveTvshow} />;
    if (this.state.activeTvshow)
      activeComponent = <TvshowDetail tvshow={this.state.activeTvshow}/>;
    if (!activeComponent)
      activeComponent = <FeaturedTvshow tvshow={this.state.featuredTvshow} />;

    return (
      <div className="container">
        <Header subtitle="Popular TV Shows"/>
        <TvshowFilter statuses={this.state.statuses} filterTvshows={this.filterTvshows} />
        {activeComponent}
      </div>
    );
  }
}

export default App;
