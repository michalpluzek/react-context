import React from "react";
import { AppContext } from "./AppContext";

class UserInfo extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <div>
            <p>
              Użytkownik jest {isUserLogged ? "zalogowany." : "niezalogowany."}
            </p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
