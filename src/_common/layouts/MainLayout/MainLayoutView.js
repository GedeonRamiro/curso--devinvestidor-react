import Header from "./Header"
import Sidebar from "./Sidebar"
import useStyles from './MainLayoutStyle'
import Snackbar from "_common/components/Snackbar"

const MainLayoutView = ({ children, sidebarOpen }) => {

    const classes = useStyles({ sidebarOpen })

    return (
      <>
        <Header />
        <Sidebar />
        <main className={classes.main}>
            {children}
        </main>
        <Snackbar />
      </>
    )
}

export default MainLayoutView