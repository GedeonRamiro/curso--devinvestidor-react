import { createContext, useState, memo} from 'react'

export const TaskListContext = createContext(null)
TaskListContext.displayName = 'TaskListContext'

export const TaskListContextProvider = memo(({ children }) => {

    const [tasks, setTasks] = useState(null)

    return (
        <TaskListContext.Provider value={ {tasks, setTasks} }>
            {children}
        </TaskListContext.Provider>
    )
})