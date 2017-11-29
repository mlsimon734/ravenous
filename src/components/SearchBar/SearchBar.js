import React from 'react';
import './SearchBar.css';

const sortbyOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      location:'',
      sortBy:'best_match'
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  getSortByClass(sortbyOption) {
    if (this.state.sortBy === sortbyOption) {
      return 'active';
    } else {
      return '';
    }
  }
  handleSortByChange(sortbyOption) {
    this.setState({sortBy: sortbyOption});
  } // end event handler handleSortByChange
  handleTermChange(event) {
    this.setState({term: event.target.value});
  } // end event handler handleTermChange
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  } // end event handler handleLocationChange
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();

  }
  renderSortByOptions() {
    return Object.keys(sortbyOptions).map(sortbyOption => {
      let sortByOptionValue = sortbyOptions[sortbyOption];
    return <li
    className={this.getSortByClass(sortByOptionValue)}
    key={sortByOptionValue}
    onClick={this.handleSortByChange.bind(this,sortByOptionValue)}>{sortbyOption}</li>;
    });
  }
  render() {
    return (<div class="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
    <input onChange={this.handleLocationChange} placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a onClick={this.handleSearch}>Let&#39;s Go</a>
  </div>
</div>);
  }
}
export default SearchBar;
