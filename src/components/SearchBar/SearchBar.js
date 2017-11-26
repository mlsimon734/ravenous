import React from 'react';
import './SearchBar.css';

const sortbyOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count"
}
class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortbyOptions).map(sortbyOption => {
      let sortByOptionValue = sortbyOptions[sortbyOption];
    return <li key={sortByOptionValue}>{sortbyOption}</li>;
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
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let&#39;s Go</a>
  </div>
</div>);
  }
}
export default SearchBar;
