import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

export function Demo1Dashboard() {
  return (
    <>
      <Switch>
        <Redirect
          from="/dashboard"
          exact={true}
          to="/user-profile"
        />
      </Switch>
    </>
  );
}
