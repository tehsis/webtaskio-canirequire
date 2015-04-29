import React from "react";

export default class Module extends React.Component {
    render() {
      return  <div className="col s4">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">{this.props.module.name}</span>
                    <p>
                      {this.props.module.version}
                    </p>
                    </div>
                    <div className="card-action">
                      <a href={this.props.module.homepage}>Documentation</a>
                    </div>
                  </div>
                </div>;
    }
}
