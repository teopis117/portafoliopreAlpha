import * as React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

const NavigationBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">Inicio</Button>
                <Button color="inherit">Acerca de</Button>
                <Button color="inherit">Experiencia</Button>
                <Button color="inherit">Contacto</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;
