import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
class App extends React.Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    // This is the only time we do direct assignment to this.state
    this.state = {
      lat: null,
      errorMessage: ''
    };
  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // React says we have to define render!!
  render () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: { this.state.errorMessage } </div>
    } else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)