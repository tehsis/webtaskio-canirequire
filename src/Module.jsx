import React from "react";

export default class Module extends React.Component {
    render() {
      let home_link;
      let package_link;

      if ('native' === this.props.module.version) {
        let home_url = `https://nodejs.org/docs/${this.props.node_version}/api/`;
        home_link = <a href={home_url}>Node {this.props.node_version} Docs</a>
      } else {
        if (this.props.module.homepage) {
          home_link = <a href={this.props.module.homepage}>Homepage</a>;
        }
        
        let package_url = `https://www.npmjs.com/package/${this.props.module.name}`;
        package_link = <a href={package_url}>Package</a>
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
                        {home_link}
                        {package_link}
                      </div>
                  </div>
                </div>;
    }
}
