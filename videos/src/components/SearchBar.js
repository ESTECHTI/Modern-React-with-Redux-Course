import React from 'react';

class SearchBar extends React.Component {

  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = event => {
    event.preventDefault();

    //TODO: Make sure we call
    //callback from parent component
  }

  render() {
    return (
      <div className='search-bar'>
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label>Video Search</label>
            <input 
              className="form-control" 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;