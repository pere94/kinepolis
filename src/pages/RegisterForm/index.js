import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ButtonOutlined } from "../../components/OthersButton/ButtonOutlined";
import { ButtonContained } from "../../components/OthersButton/ButtonContained";
import { InfoOutlined, RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import React from "react";
import theme from "../../theme";
import { useNavigate } from "react-router-dom/dist";

const styles = {
  icon_input: {
    fontSize: "16px!important",
  },
  email_valid: {
    fontSize: "16px!important",
    color: `#1EDEA2 !important`,
  },
};

function RegisterForm() {
  const [passwordShown, setPasswordShown] = React.useState(false);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background:
          "url(https://img.freepik.com/foto-gratis/grupo-gente-joven-cine_23-2148115826.jpg?w=996&t=st=1669425314~exp=1669425914~hmac=2f4641d61729def8a958bf28ff252493dd0fdab9823deb269675ac1460430e5a)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "absolute",
        zIndex: '1',
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        paddingTop: '20px',
        overflow: "hidden",
      }}
    >
      <video
        src="https://media.istockphoto.com/id/1321349856/es/v%C3%ADdeo/mujeres-alegres-divirti%C3%A9ndose-en-el-cine-chicas-alegres-riendo-en-el-cine.mp4?s=mp4-640x640-is&k=20&c=D8HXD1APXLSLqS7gmAzoHcbZqh-Lbm_Mj8ZPGXNSIwg="
        autoPlay={true}
        muted={true}
        loop={true}
        poster="https://carontestudio.com/img/contacto.jpg"
        style={{
          position: 'absolute',
          backgroundColor: '#000',
          left: '0px',
          top: '0px',
          width: '100%',
          zIndex: '2',
        }}
      ></video>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: '3',
        }}
      >
        <Stack
          width={450}
          spacing={3}
          sx={{
            backgroundColor: "#FFF",
            padding: "24px",
            borderRadius: "10px",
            boxShadow: "1px 6px 33px " + theme.palette.error.main,
            zIndex: '4',
          }}
        >
          <Stack direction="row" justifyContent="flex-end">
            <img
              src="https://kinepolis.es/sites/all/themes/custom/kinepolis_zen/images/kinepolis_logo.png"
              alt="Logo de Kinepolis"
              style={{
                width: "120px",
                height: "120px",
                position: "relative",
                right: "50px",
                top: "-100px",
                marginBottom: "-100px",
              }}
            />
          </Stack>
          <TextField
            id="outlined-basic"
            label="Primer y Segundo Nombre"
            variant="outlined"
            size="small"
            required
            sx={styles.input}
            InputProps={{
              type: "text",
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <TextField
              id="outlined-basic"
              label="Primer Apellido"
              variant="outlined"
              size="small"
              required
              sx={{ width: "50%" }}
              InputProps={{
                type: "text",
              }}
            />
            <TextField
              id="outlined-basic"
              label="Segundo Apellido"
              variant="outlined"
              size="small"
              sx={{ width: "50%" }}
              InputProps={{
                type: "text",
              }}
            />
          </Stack>
          <TextField
            id="outlined-basic"
            label="Tu email por favor"
            helperText="Ej: adolfosuarez@gmail.com"
            variant="outlined"
            size="small"
            required
            sx={styles.input}
            InputProps={{
              type: "email",
            }}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="top"
          >
            <TextField
              id="outlined-basic"
              label="Contraseña"
              helperText="Mínimo 8 caracteres"
              variant="outlined"
              size="small"
              required
              sx={{ width: "90%" }}
              InputProps={{
                type: passwordShown ? "text" : "password",
                endAdornment: (
                  <InputAdornment position="end">
                    {!passwordShown ? (
                      <IconButton
                        onClick={() => setPasswordShown(!passwordShown)}
                        aria-label="Mostrar contraseña"
                        edge="end"
                      >
                        <RemoveRedEye className={styles.icon_input} />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={() => setPasswordShown(!passwordShown)}
                        aria-label="Ocultar contraseña"
                        edge="end"
                      >
                        <VisibilityOff className={styles.icon_input} />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Tooltip
              placement="bottom-end"
              sx={{ width: "340px"}}
              title={
                <Typography
                  component={"div"}
                  variant="body1"
                  sx={{ width: "340px", padding: "5px" }}
                >
                  La contraseña requiere:
                  <ul>
                    <li style={{ width: "280px" }}>
                      Caracteres especiales: @*!/
                    </li>
                    <li>Mayúsculas</li>
                    <li>Minúsculas</li>
                    <li>Números</li>
                  </ul>
                </Typography>
              }
            >
              <InfoOutlined sx={{ color: "gray", fontSize: "25px" }} />
            </Tooltip>
          </Stack>
          <label style={{ display: "flex", gap: "5px" }}>
            <Checkbox size="small" />
            <Typography component={"p"} fontSize="14px">
              Acepto los Términos Generales y las Condiciones de Mi Kinepolis y
              declaro haber leído la Política de Privacidad.
            </Typography>
          </label>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            spacing={3}
          >
            <ButtonOutlined
              width="150px"
              height="44px"
              backgroundColor={theme.palette.error}
              onClick={() => navigate("/")}
            >
              Cancelar
            </ButtonOutlined>
            <ButtonContained
              width="150px"
              backgroundColor={theme.palette.error}
              variant="contained"
            >
              Registrarse
            </ButtonContained>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default RegisterForm;
