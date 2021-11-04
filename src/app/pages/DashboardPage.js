import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { Dashboard } from "../../_metronic/_partials";
import UserProfilePage from "../modules/UserProfile/UserProfilePage";

export function DashboardPage() {
  return (
    <Dashboard />
  );
}
