import React from 'react';
import Module from './Module.jsx';

export default class ModulesList extends React.Component {
  render() {
    console.log(this.props.modules);
    var modules = this.props.modules.modules.map(function(module) {
      return <Module module={module} />
    });

    return <div className="row">{modules}</div>
  }
};
