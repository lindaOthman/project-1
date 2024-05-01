import { Box, IconButton, Stack, Toolbar, Typography, styled } from "@mui/material";
import React from "react";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Delete } from "@mui/icons-material";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
  // @ts-ignore
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, handleDrawerOpen }) => {
  return (
    <AppBar
      position="fixed"
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          noWrap
          component="div"
          className="text-capitalize"
        >
          Revive road dashboard
        </Typography>

          <Box  flexGrow={ 1 }/>

        <Stack direction={"row"}>
       
          <IconButton aria-label="delete"  color="inherit">
            <PersonOutlineOutlinedIcon />
          </IconButton>
          
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
