import React from "react";
import { AppContext } from "./AppContext";

class Button extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ toggleLoggedState }) => (
          <button onClick={toggleLoggedState}>Przełącz stan użytkownika</button>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Button;
