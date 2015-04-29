import React from 'react';
import Module from './Module.jsx';

import fetch_modules from './fetch_modules';

export default class ModulesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modules: []};
  }

  componentDidMount() {
    fetch_modules()
      .done((data) => {
        console.log('fetch', data);
        this.setState(data.modules);
      });
  }

  render() {
    var modules = this.state.modules.map(function(module) {
      return <Module module={module} />
    });

    return <div className="row">{modules}</div>
  }
};
