import React from "react";
import { CircularProgress } from "@material-ui/core";
import { toAbsoluteUrl } from "../../_helpers";

export function SplashScreen() {
  return (
    <>
      <div className="splash-screen">
        <img
          src={toAbsoluteUrl("/media/logos/cbnet.svg")}
          alt="CBNET logo"
        />
        <CircularProgress className="splash-screen-spinner" />
      </div>
    </>
  );
}
