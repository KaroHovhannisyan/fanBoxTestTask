import React, { Component } from 'react';
import MyMap from "./Map";
import MapRouteEditor from "./MapRouteEditor.js";

class App extends Component {
  render() {
    return (
      <div className={"App"}>
          <MapRouteEditor/>
          <MyMap />
      </div>
    );
  }
}

export default App;
