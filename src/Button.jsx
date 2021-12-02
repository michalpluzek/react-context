import React from "react";
import { AppContext } from "./AppContext";

class Button extends React.Component {
  static contextType = AppContext;

  render() {
    const { toggleLoggedState } = this.context;

    return (
      <button onClick={toggleLoggedState}>Przełącz stan użytkownika</button>
    );
  }
}

export default Button;
