import React from 'react';
import ReactDOM from 'react-dom';

module.exports = {
  hello: (element, msg) => {
    ReactDOM.render(
      <div>Hello</div>, element
    );
  },
}