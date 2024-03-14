import { Box, TextField } from "@mui/material";
import ButtonStyle from "../Button";
import "./styles.css";

export default function Search(){
    return (
        <>
           <Box>
                <form id='form'>
                    <div id='text'>
                    <TextField sx={{minWidth: '100px', flex: '1'}} size="small" label="Modelo" variant="outlined" />
                    <TextField sx={{minWidth: '100px', flex: '1'}} size="small" label="Marca" variant="outlined" />
                    <TextField sx={{minWidth: '100px', flex: '1'}} size="small" label="Ano" variant="outlined" />
                    <TextField sx={{minWidth: '100px', flex: '1'}} size="small" label="Preço" variant="outlined" />
                    <ButtonStyle text='Pesquisar' flex='1'/>
                    </div>
                </form>
            
            </Box>      
        </>
    )
}