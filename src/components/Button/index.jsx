import { Button } from "@mui/material";

export default function ButtonStyle (props) {

    return (
        <Button onClick={props.onClick}
                sx={{
                width: props.width, 
                height: props.height,
                maxHeight: props.height,
                flex: props.flex,
                color: "#FC9B02",
                bgcolor: "#023047",
                textTransform: 'none',
                fontWeight: "X-Small Bold",
                fontSize: 14,
                "&:hover": {
                    color: "white",
                    bgcolor: "#FC9B02",
                    transition: 300,
                },
            }}>
                
               {props.text}
            
            </Button>
    )
}