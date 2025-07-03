import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import { drawerList } from "../assets/drawerList";


export const Home = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const drawerLists = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        {drawerList.map((listItems, index) => {
          return (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemText primary={listItems} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <h1> To Do Application</h1>
      <IconButton onClick={() => toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
        {drawerLists}
      </Drawer>
    </>
  );
};
