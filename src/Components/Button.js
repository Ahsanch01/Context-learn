import React from "react";

import ContextLanguage from "../Contexts/ContextLanguage";
class Button extends React.Component {
  static contextType = ContextLanguage;
  render() {
    const text = this.context === "english" ? "english" : "urdu";
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
