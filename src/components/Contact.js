import * as React from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Contact = () => {
    return (
        <div>
            <Typography variant="h4" component="div">Contacto</Typography>
            <form>
                <TextField label="Nombre" />
                <TextField label="Email" />
                <Button variant="contained">Enviar</Button>
            </form>
        </div>
    );
}

export default Contact;
