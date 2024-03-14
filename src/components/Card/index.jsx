import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import imagem from '../../assets/img/exemplocarro.png';
import "./styles.css";
import ButtonStyle from "../Button";

export default function CardUnit (){
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
                    <ButtonStyle text='Ver Informações' width='100%' height='40'/>
                 </CardActions>
                 <div id='footer'>
                    <hr />
                    <p><span>100.000</span> Visualizações</p>
                 </div>
                 
            </Card>
        </>
    )
}