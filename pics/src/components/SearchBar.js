import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className='form-group'>
        <form onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input 
            className="form-control" 
            type="text" 
            value={this.state.term} 
            onChange={(e => this.setState({ term: e.target.value }))}
          />
        </form>
        </div>
    );
  }
}

export default SearchBar;