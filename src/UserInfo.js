import React from "react";
import { AppContext } from "./AppContext";

class UserInfo extends React.Component {
  static contextType = AppContext;

  render() {
    const { isUserLogged } = this.context;
    const userLoggedInfo = isUserLogged ? "zalogowany." : "niezalogowany.";

    return (
      <div>
        <p>Użytkownik jest {userLoggedInfo}</p>
      </div>
    );
  }
}

export default UserInfo;
