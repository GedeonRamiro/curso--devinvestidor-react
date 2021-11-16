import React from "react";
import { Switch, Route } from "react-router-dom";
import TaskList from "./TaskList";

const TasksRoutes = ( {match: { url }} ) => {
    return (
          <Switch>
            <Route path={`${url}/:status?`} component={TaskList} />
          </Switch>
    )
}

export default TasksRoutes;