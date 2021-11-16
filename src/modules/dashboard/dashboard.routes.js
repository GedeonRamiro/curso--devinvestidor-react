import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";


const DashboardRoutes = ( {match: { url }} ) => {
    return (
          <Switch>
            <Route path={`${url}/`} component={Dashboard} />
          </Switch>
    )
}

export default DashboardRoutes;