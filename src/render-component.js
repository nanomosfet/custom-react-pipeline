import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello.js';

module.exports = {
  hello: (element, msg) => {
    ReactDOM.render(
      <Hello />, element
    );
  },
}