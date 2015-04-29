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
      modules_filtered: [],
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
          modules_filtered: data.modules
        });
      });
  }

  render() {
    if (!this.state.ready) return <Loader />;

    let modules = this.state.modules_filtered
      .filter(module => module.name.includes(this.state.filter))
      .map(module => <Module key={module.name + module.version} module={module} node_version={this.state.node_version} />);

    return <div className="row">{modules}</div>
  }
};
