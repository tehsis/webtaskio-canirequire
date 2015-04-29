import React from "react";

export default class Search extends React.Component {
  render() {
    return <input placeholder="e.g. mongodb" type="text" onChange={this.search} />
  }
}
