import React from "react";

import Button from "./Button";
import UserInfo from "./UserInfo";

import { AppContext, defaultObject } from "./AppContext";

import "./App.css";

class App extends React.Component {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div className="App">
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  handleToggleStateIsLogged = () => {
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
  };
}

export default App;
