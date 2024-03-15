import React from 'react';
import { Card, Stack } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import image2 from '../../assets/img/exemplocarro.png';
import "./styles.css"
import ButtonStyle from '../Button';

export default function ModalCar ({car}){
    const[atual, setAtual] = React.useState(0);

    function before(){
        if(atual === 0){
            setAtual(images.length - 1);
        } else {
            setAtual(atual - 1);
        }
    }

    function next(){
        if(atual < images.length - 1){
            setAtual(atual + 1);
        } else {
            setAtual(0)
        }
        
    }

    const images = [
        car.image,
        car.image1,
        image2,
    ];
    
    return(
        <>
        <div id='modalCar'>      
                        <div>
                            <Card align="center">
                                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                                    <ChevronLeft  onClick={before}/>
                                        <img id='styleImage' src={images[atual]} alt="photoCar" />
                                    <ChevronRight  onClick={next}/>
                                </Stack>
                            </Card>
                        </div>
                        <div id="descrition">
                <h2>{car.brand} {car.model}</h2>
                <p>{car.description}</p>
                <div id='table'>
                    <table>
                        <thead>
                            <tr >
                                <th id="thead">Cidade</th>
                                <th id="thead">Ano</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{car.cidade}</td>
                                <td>{`${car.manufacture_year}/${car.model_year}`}</td>
                            </tr>
                            <tr>
                                <th id="thead">Cor</th>
                                <th id="thead">Placa</th>
                            </tr>
                            <tr>
                                <td>{car.cor}</td>
                                <td>{car.placa}</td>
                            </tr>
                            <tr>
                                <th id="thead">Quilometragem</th>
                                <th id="thead">Data de Cadastro</th>
                            </tr>
                            <tr>
                                <td>{`${car.km} KM`}</td>
                                <td>{car.data_de_cadastro}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h2>{`Valor anunciado: R$ ${car.price.toFixed(2)}`}</h2>
            </div>
            <div id='buy'>
                <ButtonStyle text='COMPRAR' width='100%' />
            </div>
        </div>
        </>
    )

}