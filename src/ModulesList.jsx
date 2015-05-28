import React from 'react';
import Loader from './Loader.jsx';
import Module from './Module.jsx';

import fetch_modules from './fetch_modules';

export default class ModulesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      node_version: '',
      modules: [],
      ready: false
    };
  }

  componentDidMount() {
    fetch_modules()
      .done((data) => {
        this.setState({
          ready: true,
          node_version: data.node_version,
          modules: data.modules,
        });
      });
  }

  render() {
    if (!this.state.ready) return <Loader />;

    let modules = this.state.modules
      .filter(module => module.name.includes(this.state.filter))
      .map(module => <Module key={module.name + module.version} module={module} node_version={this.state.node_version} />);

    return <div>
      <h4 className="white-text">Node Version: {this.state.node_version}</h4>
      <h5 className="white-text">Number of modules: {modules.length}</h5>
      <div className="row">{modules}</div>
      </div>
  }
};
