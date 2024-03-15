import CardUnit from "../../components/Card";
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
            <div id="home">
                    <div id="search">
                        <Search />
                    </div>
                    <div id="offers">
                        <CardUnit/>
                    </div>
            </div>
        </ThemeProvider>
        </>
    )
}

