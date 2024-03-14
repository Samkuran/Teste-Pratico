import { Hidden } from "@mui/material";
import "./styles.css";
import logo from '../../assets/img/logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from "react-router-dom";

export default function Menu (){
    const location = useLocation();

    const isActive = (url) => {
        if(location.pathname === url){
            return "active";
        }
        return "";
    }

    return (
        <>
                <nav id="nav">
                    <div id='logo'>
                            <img id='vetor' src={logo} alt="logo" />
                            <h1>SouCar</h1>
                    </div>
                    <div id='menu'>
                            <Hidden smUp>
                                         <IconButton
                                            size="large"
                                            edge="end"
                                            color="primary"
                                            aria-label="menu"
                                        >
                                            <MenuIcon />
                                        </IconButton>
                            </Hidden>
                            <Hidden smDown>
                                    <Link to='/' className={isActive('/')}>Ofertas</Link>
                                    <Link to='/administrativo' className={isActive('/administrativo')}>Administrativo</Link>                                   
                            </Hidden>
                    </div>
                </nav>     
        </>
    )
}