import React from "react";
import UserCreate from "./UserCreate";

import ContextLanguage from "../Contexts/ContextLanguage";

class App extends React.Component {
  state = { language: "english" };
  onChangeLanguage = (language) => {
    console.log(this.state.language);
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select Language:
          <i
            className=" flag us"
            onClick={() => {
              this.onChangeLanguage("english");
            }}
          />
          <i
            className="flag pk"
            onClick={() => {
              this.onChangeLanguage("urdu");
            }}
          />
        </div>
        <ContextLanguage.Provider value={this.state.language}>
          <UserCreate />
        </ContextLanguage.Provider>
      </div>
    );
  }
}
export default App;
