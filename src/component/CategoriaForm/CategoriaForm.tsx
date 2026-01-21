import {useState} from "react";
import {Categoria} from "../../models/Categoria";
import {notify, notifyArray} from "../../methods/notify/notify";
import {backendService} from "../../services/backendService";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import {Box, Button, Grid, TextField} from "@mui/material";
import {isStringEmpty} from "../../utils/isStringEmpty";
import {validateCategoria} from "../../methods/validate/validateCategoria";
import {mapCategoria} from "../../methods/map/mapCategoria";

const CategoriaForm = ({categoria}: any) => {

    const [categoriaData, setCategoriaData] = useState<Categoria>(categoria);
    const [loading, setLoading] = useState(false);

    const updateLoading = (isLoading: boolean) => {
        setLoading(isLoading);
    }

    const handleInputChange = (e: any, attribute: string) => {
        const {value} = e.target;
        setCategoriaData((prevData) => ({
            ...prevData,
            [attribute]: value,
        }));
    }

    const handleSave = async () => {

        try {
            updateLoading(true);

            const response = validateCategoria(categoriaData);
            if (!response.isValid) {
                notifyArray(response.errors, "error");
                updateLoading(false);
                return;
            }

            const categoria = mapCategoria(categoriaData);

            await backendService("POST", "/secure/categorias/save", categoria, true);

            updateLoading(false);
            notify("Categoria guardada", "success");

        } catch (e: any) {
            notify(e.message, "error");
            updateLoading(false);
        }
    }

    if (loading) return (
        <LoadingScreen/>
    )

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: "100%",
                }}
            >

                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12}>
                        <h1>
                            Categoría
                        </h1>
                    </Grid>
                </Grid>

                <TextField
                    label="Nombre"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={isStringEmpty(categoriaData.nombre)}
                    value={categoriaData.nombre}
                    onChange={e => handleInputChange(e, "nombre")}
                />

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleSave}
                    sx={{
                        marginTop: 3,
                        marginBottom: 3,
                    }}
                >
                    Guardar categoría
                </Button>
            </Box>
        </Box>
    );

}

export default CategoriaForm;