import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonContained } from "../OthersButton/ButtonContained";
import theme from "../../theme";
import { Stack } from "@mui/material";

export function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "rgba(55,130,163, 0.7)",
          minHeight: '75px',
          paddingTop: '5px'
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            
          }}
        >
          <Stack direction='row' >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <img
              width="250px"
              src="https://kinepolis.es/sites/all/themes/custom/kinepolis_zen/logo.png"
              alt="logo"
            />
          </Stack>
          <ButtonContained
            width="150px"
            backgroundColor={theme.palette.error}
            variant="contained"
          >
            Registro
          </ButtonContained>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
