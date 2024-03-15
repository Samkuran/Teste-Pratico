import { Button, TextField } from "@mui/material";
import "./styles.css"

export default function ModalCreate({handleCreateCar,  handleClose}){
    return (
        <>
            <div id="form">
                        <TextField name="brand" label="Marca"  />
                        <TextField name="model" label="Modelo"   />
                        <TextField name="price" label="Preço"   />
                        <TextField name="manufacture_year" label="Ano de Fabricação"   />
                        <TextField name="model_year" label="Ano do Modelo"  />
                        <TextField name="km" label="Quilometragem"   />
                        <TextField name="image" label="URL da Imagem Principal"   />
                        <TextField name="image1" label="URL da Segunda Imagem"  />
                        <TextField name="cidade" label="Cidade"   />
                        <TextField name="cor" label="Cor"   />
                        <TextField name="placa" label="Placa"  />
                        <TextField name="data_de_cadastro" label="Data de Cadastro"   />
                        <Button size="medium" variant="contained" color="success" 
                            onClick={() => {
                            handleCreateCar();
                             handleClose();
                            }}>
                                Criar Oferta
                        </Button>
                    </div>
        </>
    )
}