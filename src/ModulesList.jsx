import React from 'react';
import Loader from './Loader.jsx';
import Module from './Module.jsx';

import fetch_modules from './fetch_modules';

export default class ModulesList extends React.Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
    this.state = {
      filter: '',
      node_version: '',
      modules: [],
      ready: false,
      limit: 12
    };
  }

  componentDidMount() {
    fetch_modules()
      .done((data) => {
        this.setState({
          ready: true,
          node_version: data.node_version,
          modules: data.modules,
          limit: 12
        });
      });
  }

  filter() {
    
  }

  loadMore() {
    this.setState({
      limit: this.state.limit + 12
    });
  }

  render() {
    if (!this.state.ready) return <Loader />;

    let filter_modules =
      this.state.modules
        .filter(module => module.name.toLowerCase().includes(this.state.filter.toLowerCase()));


    let modules = filter_modules
      .slice(0, this.state.limit)
      .map(module => <Module key={module.name + module.version} module={module} node_version={this.state.node_version} />);

    let loadMoreButton;
    if (this.state.limit < filter_modules.length) {
      loadMoreButton = <a className="center btn-floating btn-large waves-effect waves-light red" onClick={this.loadMore}><i className="material-icons">expand_more</i></a>;
    }

      return <div className="section white">
        <div className="row">
            <h5 className="col s12 m6 l6 webtask-red-text">Node Version: {this.state.node_version}</h5>
            <h5 className="col s12 m6 l6 webtask-red-text">Showing: {modules.length} of {filter_modules.length} modules </h5>
        </div>
        <div className="webtask-red">
          <div className="row">{modules}</div>
        </div>
        <div className="center">
          {loadMoreButton}
        </div>
      </div>
  }
};
