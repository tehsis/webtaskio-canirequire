import React from 'react';
import Module from './Module.jsx';

import fetch_modules from './fetch_modules';

export default class ModulesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      modules: [],
      modules_filtered: []
    };
  }

  updateModules(filter) {

  }

  componentDidMount() {
    fetch_modules()
      .done((data) => {
        this.setState({
          modules: data.modules,
          modules_filtered: data.modules
        });
      });
  }

  render() {
    var modules = this.state.modules_filtered
      .filter((module) => {
        return module.name.includes(this.state.filter);
      })
      .map((module) => {
        return <Module key={module.name + module.version} module={module} />
      });

    return <div className="row">{modules}</div>
  }
};
