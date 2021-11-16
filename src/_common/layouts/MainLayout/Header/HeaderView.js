import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import useStyles from './HeaderStyle'


const HeaderView = ({ handleSidebarOpen }) => {

    const classes = useStyles()

    return (
        <AppBar className={classes.root}>
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={handleSidebarOpen}>
                <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
            Task Organize
            </Typography>
        </Toolbar>
        </AppBar>
    )
}

export default HeaderView