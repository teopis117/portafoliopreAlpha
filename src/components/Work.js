import * as React from 'react';
import { Typography, List, ListItem } from '@mui/material';

const Work = () => {
    return (
        <div>
            <Typography variant="h4" component="div">Trabajo actual</Typography>
            <List>
                <ListItem>Trabajo 1</ListItem>
                <ListItem>Trabajo 2</ListItem>
                <ListItem>Trabajo 3</ListItem>
            </List>
        </div>
    );
}

export default Work;
