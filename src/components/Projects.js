import * as React from 'react';
import { Typography, List, ListItem } from '@mui/material';

const Projects = () => {
    return (
        <div>
            <Typography variant="h4" component="div">Proyectos</Typography>
            <List>
                <ListItem>Proyecto 1</ListItem>
                <ListItem>Proyecto 2</ListItem>
                <ListItem>Proyecto 3</ListItem>
            </List>
        </div>
    );
}

export default Projects;
