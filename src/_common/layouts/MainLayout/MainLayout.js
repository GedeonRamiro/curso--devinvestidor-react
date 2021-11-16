import { MainLayoutContext } from "./context/MainLayoutContext"
import MainLayoutView from "./MainLayoutView"
import { useContext } from 'react'


const MainLayout = ({ children }) => {

    const { sidebarOpen } = useContext(MainLayoutContext)
  
    return (
       <MainLayoutView {...{children, sidebarOpen}} />
    )
}

export default MainLayout