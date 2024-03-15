import { Box, Button, Modal } from "@mui/material";
import Header from "../../components/Menu";
import "./styles.css"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState, useEffect } from "react";
import ModalCreate from "./ModalCreate";

export default function Administrative(){
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    


    const [carsData, setCarsData] = useState([]);
    console.log(carsData)
    const theme = createTheme({
        palette: {
          primary: {
            main: '#FC9B02',
          },
        },
      });

      useEffect(() => {
        async function fetchCarsData() {
        try {
            const response = await fetch("http://localhost:3000/cars");
            const data = await response.json();
            setCarsData(data);
        } catch (error) {
            console.error("Erro ao buscar dados do endpoint. Inicialize o JSON-SERVER com o comando $ npx json-server db/db.json", error);
        }
        }

        fetchCarsData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/cars/${id}`, {
                method: 'DELETE'
            });
            setCarsData(carsData.filter(car => car.id !== id));
        } catch (error) {
            console.error("Erro ao excluir o carro:", error);
        }
    };

    const generateNewId = () => {
        const maxId = carsData.reduce((max, car) => Math.max(max, parseInt(car.id)), 0);
        return (maxId + 1).toString();
    };

    const handleCreateCar = async () => {
        const newId = generateNewId();
        const newCar = {
            id: newId,
            brand: "Volkswagen",
            model: "Golf GTI",
            price: 38000,
            manufacture_year: 2022,
            model_year: 2022,
            km: 20000,
            views: 0,
            image: "https://www.greeleyvolkswagen.com/blogs/1154/wp-content/uploads/2021/12/VW_NGW6_Showroom_GolfGTI_Gallery_Exterior-1.jpg",
            image1: "https://ogimg.infoglobo.com.br/in/24539051-fed-cf1/FT1086A/O-novo-Bronco-em-versao-de-quatro-portas.jpg",
            cidade: "São Paulo",
            cor: "Branco",
            placa: "KLM-7890",
            data_de_cadastro: "14/03/2024"
        };
    
        try {
            const response = await fetch("http://localhost:3000/cars", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCar),
            });
            const data = await response.json();
            setCarsData([...carsData, data]);
        } catch (error) {
            console.error("Erro ao criar novo carro:", error);
        }
    };

    return (
        <>
        <ThemeProvider theme={theme}>
            <Header /> 
        </ThemeProvider>
            <section id="body">
                <div id='create'>
                <h1 id="title">Carros ofertados:</h1>
                <Button size="medium" variant="contained" color="success" onClick={handleOpen}>Criar Oferta</Button>
                </div>
                
                <div>
                <table >
          <thead >
            <tr>
              <th >Código</th>
              <th >Modelo</th>
              <th >Ações</th>
            </tr>
          </thead>
          {carsData?.map((item, index) => {
            return (
              <tbody key={index}>
                <tr >
                  <td >{item.id}</td>
                  <td >{item.model}</td>
                  <td id='buttons'>
                    <Button  size="small" variant="contained">Editar</Button>
                    <Button  size="small" variant="contained" color="error" onClick={() => handleDelete(item.id)}>Excluir</Button>
                  </td>
                </tr>
              </tbody>
            )
          })}
        </table>
                </div>
           </section>
                <Modal
                open={open}
                onClose={handleClose}
                 aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >   
                 <Box sx={style}>
                    <ModalCreate handleCreateCar={handleCreateCar}  handleClose={handleClose}/>
                </Box>
            </Modal>
        </>
    )
}

