import React, { useState, useEffect } from "react";
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Modal } from "@mui/material";
import "./styles.css";
import ButtonStyle from "../Button";
import ModalCar from '../Modal';

export default function CardUnit (){
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
        const [carsData, setCarsData] = useState([]);
        const [selectedCar, setSelectedCar] = useState(null);

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

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

        const handleViewDetails = async (carId) => {
            const car = carsData.find((car) => car.id === carId);
        setSelectedCar(car); // Armazenando o carro selecionado
        setOpen(true); // Abrindo o modal
        try {
            await fetch(`http://localhost:3000/cars/${carId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...car, views: car.views + 1 }), // Atualizando as visualizações do carro
            });
        } catch (error) {
            console.error("Erro ao atualizar visualizações do carro:", error);
        }
    };
        

    return (
        <>
            {carsData.map((car) => (
        <Card key={car.id} sx={{ minWidth: 300, maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="190"
            image={car.image}
            alt={`${car.brand} ${car.model}`}
          />
          <CardHeader title={`${car.model}`} subheader={car.brand} />
          <CardContent id="content">
            <h3 id="price">{`R$ ${car.price.toFixed(2)}`}</h3>
            <div id="information">
              <h5>{`${car.manufacture_year}/${car.model_year}`}</h5>
              <h5>{`${car.km} KM`}</h5>
            </div>
          </CardContent>
          <CardActions style={{ justifyContent: "center" }}>
            <ButtonStyle
              text="Ver Informações"
              width="100%"
              height="40"
              onClick={() => {
                handleOpen();
                handleViewDetails(car.id);
              }}
            />
          </CardActions>
          <div id="footer">
            <hr />
            <p>
              <span>{car.views}</span> Visualizações
            </p>
          </div>
        </Card>

      ))}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {selectedCar && <ModalCar car={selectedCar} />}
        </Box>
      </Modal>
    </>
    )
}