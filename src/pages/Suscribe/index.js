import {
  Box,
  Hidden,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import background from "../../img/image1.jpg";
import suscribe from "../../img/3125746-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import React from "react";

function Suscribe() {
  const navigate = useNavigate();
  const [showSuscribe, setShowSuspribe] = React.useState(false);
  return (
    <Box
      sx={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
      }}
    >
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          bottom: "20px",
          right: "300px",
        }}
      >
        <IconButton
          onClick={() => setShowSuspribe(!showSuscribe)}
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <div className="loader">
            <img src={suscribe} alt="Suscribe" style={{ width: "200px" }} />
          </div>
        </IconButton>
        <div
          className="card"
          style={{
            transition: "ease-in-out",
            transitionDuration: 500,
            display: showSuscribe ? "flex" : "none",
          }}
        >
          <h2 className="card__title">Subscribe</h2>
          <p className="card__content">
            Recibe las ofertas y carteleras semanales sin ningún esfuerzo!!
          </p>
          <div className="card__form">
            <input type="text" placeholder="Tu Email" />
            <button className="sign-up">Suscribir Email</button>
          </div>
        </div>
      </Stack>
    </Box>
  );
}

export default Suscribe;
