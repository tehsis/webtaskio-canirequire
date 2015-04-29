import React from 'react';

export default class Loader extends React.Component {
  render() {
    return <div className="progress grey darken-3">
              <div className="indeterminate grey lighten-1"></div>
           </div>
  }
};
