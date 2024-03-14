import { Hidden } from "@mui/material";
import CardUnit from "../../components/Card";
import Filter from "../../components/Filter";
import Header from "../../components/Menu";
import "./styles.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Search from "../../components/Search";


export default function Home(){

    const theme = createTheme({
        palette: {
          primary: {
            main: '#FC9B02',
          },
        },
      });

    return (
        <>
        <ThemeProvider theme={theme}>
            <Header />
            <div id="teste">
                <Hidden smDown>
                    <Filter />
                </Hidden>
                
                <div>
                    <Search />
                    <div>
                        <CardUnit />
                    </div>
                </div>
            </div>
        </ThemeProvider>
        </>
    )
}

