import React from "react";
import { Switch, Route } from "react-router-dom";
import TaskList from "./TaskList";
import { TaskListContextProvider } from "./TaskList/context/TaskListContext";

const TasksRoutes = ( {match: { url }} ) => {
    return (
          <Switch>
            <TaskListContextProvider>
               <Route path={`${url}/:status?`} component={TaskList} />
            </TaskListContextProvider>
          </Switch>
    )
}

export default TasksRoutes;