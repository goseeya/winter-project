import React, { Component } from 'react';

import DuckImage from '../components/DuckImage/DuckImage';

class Duck extends Component {
  render() {
    return (
      <div>
        <h1>The Duck</h1>
        <DuckImage />
      </div>
    );
  }
}

export default Duck;
