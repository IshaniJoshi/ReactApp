import React, { Component } from "react";
import Component1 from "./Component1";
import Login from "./Login";
import Register from "./Register";
import Loginscreen from "./Loginscreen";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginpage: [],
      uploadScreen: []
    };
  }

  componentWillMount() {
    var loginpage = [];
    var uploadScreen = [];
    //uploadScreen.push(<Component1 name="Ishani"/>)
    loginpage.push(<Loginscreen parentContext={this} />);
    this.setState({
      loginpage: loginpage
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.loginpage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
export default App;
