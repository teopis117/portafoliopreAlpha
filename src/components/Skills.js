import * as React from 'react';
import { Typography, List, ListItem } from '@mui/material';

const Skills = () => {
    return (
        <div>
            <Typography variant="h4" component="div">Habilidades</Typography>
            <List>
                <ListItem>Habilidad 1</ListItem>
                <ListItem>Habilidad 2</ListItem>
                <ListItem>Habilidad 3</ListItem>
            </List>
        </div>
    );
}

export default Skills;
