import React from "react";

export default class Module extends React.Component {
    render() {
      let home_link;
      let package_link;
      let require_code;

      if ('native' === this.props.module.version) {
        let home_url = `https://nodejs.org/docs/${this.props.node_version}/api/`;
        home_link = <a className="webtask-red-text" href={home_url} target="_blank">Node {this.props.node_version} Docs</a>
        require_code = <code>require({"'" + this.props.module.name + "'"})</code>;
      } else {
        if (this.props.module.homepage) {
          home_link = <a className="webtask-red-text" href={this.props.module.homepage} target="_blank">Homepage</a>;
        }

        let package_url = `https://www.npmjs.com/package/${this.props.module.name}`;
        package_link = <a  className="webtask-red-text" href={package_url} target="_blank">Package</a>

        require_code = <code>require({"'" + this.props.module.name + "@" + this.props.module.version + "'"})</code>;
      }

      return  <div className="col s6 m12 l4">
                <div className="card white">
                  <div className="card-content">
                    <span className="card-title webtask-red-text">{this.props.module.name}</span>
                    <p>
                      {this.props.module.version}
                    </p>
                    <p>
                      {require_code}
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
