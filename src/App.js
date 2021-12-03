import React, { useState } from "react";

import Button from "./Button";
import UserInfo from "./UserInfo";

import { AppContext, defaultObject } from "./AppContext";

import "./App.css";

const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(defaultObject.isUserLogged);
  const [isUserAdult, setIsUserAdult] = useState(true);

  const handleToggleStateIsLogged = () => {
    setIsUserLogged((prevValue) => !prevValue);
  };

  const handleToggleStateIsAdult = () => {
    setIsUserAdult((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          isUserLogged,
          toggleLoggedState: handleToggleStateIsLogged,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>
      <AppContext.Provider
        value={{
          isUserLogged: isUserAdult,
          toggleLoggedState: handleToggleStateIsAdult,
        }}
      >
        <UserInfo />
        <Button />
      </AppContext.Provider>
    </div>
  );
};
export default App;
