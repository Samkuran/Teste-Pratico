import * as React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Modal } from "@mui/material";
import imagem from '../../assets/img/exemplocarro.png';
import "./styles.css";
import ButtonStyle from "../Button";
import ModalCar from '../Modal';

export default function CardUnit (){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

        const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

    return (
        <>
            <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                    component="img"
                    height="190"
                    image={imagem}
                    alt="Continental GT V8"
                />
                <CardHeader
                    title="Continental GT V8"
                    subheader="Bentley"
                />
                 <CardContent id='content'>
                        <h3 id='price'>R$ 300.000,00</h3>
                    <div id='information'>
                        <h5>2023/2024</h5>
                        <h5>15.000 KM</h5>
                    </div>
                  
                 </CardContent>
                 <CardActions style={{ justifyContent: 'center'}}>
                    <ButtonStyle text='Ver Informações' width='100%' height='40' onClick={handleOpen}/>
                 </CardActions>
                 <div id='footer'>
                    <hr />
                    <p><span>100.000</span> Visualizações</p>
                 </div>
                 
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <ModalCar />
                </Box>
            </Modal>
        </>
    )
}