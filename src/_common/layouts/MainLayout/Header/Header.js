import { useContext } from 'react'
import { MainLayoutContext } from '../context/MainLayoutContext'
import HeaderView from "./HeaderView"

const Header = () => {
    
    const { sidebarOpen, setSidebarOpen } = useContext(MainLayoutContext)
    
    const handleSidebarOpen = () => setSidebarOpen(!sidebarOpen)

    return (
       <HeaderView {...{ handleSidebarOpen }} />
    )
}

export default Header