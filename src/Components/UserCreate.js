import React from "react";
import ReactDOM from "react-dom";
import Filed from "./Filed";
import Button from "./Button";
class UserCreate extends React.Component {
  render() {
    return (
      <div className="ui form">
        <Filed />
        <Button />
      </div>
    );
  }
}
export default UserCreate;
