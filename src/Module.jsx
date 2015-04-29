import React from "react";

export default class Module extends React.Component {
    render() {
      let home;
      let package_url;

      if (this.props.module.homepage) {
        home = <a href={this.props.module.homepage}>Homepage</a>;
        package_url = <a href="https://www.npmjs.com/package/{this.props.module.name}">Package</a>
      } else {
        home = <a href="https://nodejs.org/docs/v{this.props.node_version}/api/">Node {this.props.node_version} Docs</a>
      }

      return  <div className="col s4">
                <div className="card grey darken-3">
                  <div className="card-content white-text">
                    <span className="card-title">{this.props.module.name}</span>
                    <p>
                      {this.props.module.version}
                    </p>
                    </div>
                      <div className="card-action">
                        {home}
                        {package_url}
                      </div>
                  </div>
                </div>;
    }
}
