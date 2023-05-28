import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          <Link to="/">
            <HomeIcon />
          </Link>
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/work">
            <WorkIcon />
            Work
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            <ContactMailIcon />
            Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
