import {AppBar, Toolbar, IconButton, Typography, Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    return (
    <AppBar position="static" style={{background: "#CE353A"}}>
        <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6">TIGRES SUELTOS</Typography>
            <div style={{justifySelf: "flex-end", marginLeft: "auto"}}>
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Álbumes</Button>
                <Button color="inherit">Merchandising</Button>
                <Button color="inherit">Próximas fechas</Button>
                <Button color="inherit">Sobre</Button>
            </div>
        </Toolbar>
    </AppBar>
    );
};

export default NavBar;