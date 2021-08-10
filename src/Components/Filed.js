import { render } from "@testing-library/react";
import React from "react";
import ContextLanguage from "../Contexts/ContextLanguage";
class Filed extends React.Component {
  static contextType = ContextLanguage;
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
export default Filed;
