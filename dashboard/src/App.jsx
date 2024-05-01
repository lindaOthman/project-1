import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';





import TopBar from "./assets/componant/TopBar/TopBar.jsx"
import Sidebar from './assets/componant/sidebar/Sidebar.jsx';





const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





export default function MiniDrawer() {
 
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

    <TopBar open={open} handleDrawerOpen={handleDrawerOpen}/>

     <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum 
        </Typography>
        
      </Box>
    </Box>
  );
}
