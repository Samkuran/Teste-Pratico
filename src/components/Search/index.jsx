import { Box, TextField } from "@mui/material";
import ButtonStyle from "../Button";
import "./styles.css";

export default function Search(){
    return (
        <>
           <Box>
                <form id='form'>
                    <div id='text'>
                    <TextField sx={{width: '100px'}} size="small" label="Modelo" variant="outlined" />
                    <TextField sx={{width: '100px'}} size="small" label="Marca" variant="outlined" />
                    <TextField sx={{width: '100px'}} size="small" label="Ano" variant="outlined" />
                    <TextField sx={{width: '100px'}} size="small" label="Preço" variant="outlined" />
                    <ButtonStyle text='Pesquisar' height='100%' flex='1'/>
                    </div>
                </form>
            
            </Box>      
        </>
    )
}