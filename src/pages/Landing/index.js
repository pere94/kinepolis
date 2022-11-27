import {
  Avatar,
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { NavBar } from "../../components/NavBar";
import background from "../../img/5230711_2650149.png";
import kineploisPlus from "../../img/kineplois +.jpg";
import camara from "../../img/camara.png";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { ButtonContained } from "../../components/OthersButton/ButtonContained";
import theme from "../../theme";
import Card from "../../components/Card";
import { InfoOutlined, RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import React from "react";

const styles = {
  icon_input: {
    fontSize: "16px!important",
  },
  email_valid: {
    fontSize: "16px!important",
    color: `#1EDEA2 !important`,
  },
};

function Landing() {
  const [passwordShown, setPasswordShown] = React.useState(false);

  return (
    <Box
      sx={{
        background: `url(https://html.dreamitsolution.net/techno/assets/images/slider/seo-bg.jpg)`,
      }}
    >
      <NavBar />
      <Stack
        direction="row"
        sx={{
          height: "800px",
          position: "relative",
          zIndex: "1",
        }}
      >
        <Stack
          alignItems="flex-start"
          spacing={3}
          sx={{
            marginTop: "22px",
            height: "800px",
            width: "60%",
            padding: "80px",
          }}
        >
          <img
            className="loader"
            style={{ width: "80px", borderRadius: "50px" }}
            src={camara}
            alt=""
          />
          <Typography
            width={"100%"}
            variant="h1"
            align="left"
            fontWeight={700}
            fontSize={35}
            color="rgba(55,130,163)"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Diversity3Icon
              sx={{
                color: "rgba(55,130,163)",
                fontSize: "35px",
                marginRight: "16px",
              }}
            />
            Grupo de Amigos Kinepolis
          </Typography>
          <Typography
            width={"100%"}
            variant="h3"
            align="left"
            fontWeight={700}
            fontSize={45}
          >
            En Kinépolis siempre tenemos más para nuestros amigos.
          </Typography>
          <Typography
            width={"100%"}
            variant="h3"
            align="left"
            fontWeight={400}
            fontSize={20}
            color="#616161"
            lineHeight="40px"
          >
            Descubre todas las ventajas de ser parte de nuestro grupo de amigos. En Kinépolis nos gusta que experimentes siempre más, es por eso que formando parte de nuestro Club de amigos tendrás beneficios exclusivos todos los meses: Entradas a preestrenos y premieres, promociones y una invitación especial para encontrarnos en tu cumple.
            <br/>
            Es gratis y solo debes completar el siguiente formulario 
          </Typography>
          <ButtonContained
            className="loaderx"
            width="250px"
            backgroundColor={theme.palette.error}
            variant="contained"
          >
            Seamos amigos
          </ButtonContained>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: "40%",
            height: "800px",
          }}
        >
          <img
            className="loader"
            style={{ width: "500px", borderRadius: "50px" }}
            src={background}
            alt=""
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          backgroundColor: "#F4F8FD",
          position: "relative",
          zIndex: "3",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-evenly"
          flexWrap="wrap"
          px={"80px"}
          sx={{
            position: "relative",
            zIndex: "6",
            top: "-50px",
            gap: "32px",
          }}
        >
          <Card
            title="¡Te queremos ver festejar!"
            description="En tu cumple te regalamos una entrada* para que vengas a disfrutar de una salida con los que más quieres."
            desc_secondary='*revisa las  bases y condiciones en nuestra web.'
            image="https://img.freepik.com/foto-gratis/foto-horizontal-hombre-cumpleanos-conmocionado-protagoniza-ojos-saltones-contiene-respiracion-contiene-globos-inflados-tarjeta-credito-no-esperaba-obtener-dinero-cuenta-bancaria-vestido-traje-negro-formal-que-posa-interior_273609-59052.jpg?w=996&t=st=1669483126~exp=1669483726~hmac=449044f714eefa617dac5260143663290a630f8ba3c15144dc837eefaded2356"
            tooltipText="*Para las películas en 4DX y ScreenX deberá pagarse el suplemento correspondiente, consultar Tarifas."
          />
          <Card
            title="Preestrenos exclusivos"
            description="Descubre antes que nadie esa peli que tienes tantas ganas de ver. ¡Llévate entradas para los mejores preestrenos y premières exclusivas!"
            image="https://img.freepik.com/foto-gratis/cine-cuarentena_155003-16284.jpg?w=996&t=st=1669484052~exp=1669484652~hmac=da01570011613fa04e483b543a7c3b3d16c28d1b570c1dac056a6f05046d5643"
          />
          <Card
            title="Descuento en tus palomitas"
            description="Disfruta de un 50% de descuento en tu envase de palomitas."
            image="https://img.freepik.com/vector-gratis/cubo-palomitas-maiz-realista_1284-11409.jpg?w=740&t=st=1669484250~exp=1669484850~hmac=143cb9afcc5a9524f7c8d1af47cc6acf6a27129bb0e998d302b81ea5e7b3aa46"
          />
          <Card
            title="Más descuentos para que no te pierdas ¡nada!"
            description="Disfruta de descuentos exclusivos en las mejores películas antes de que salgan de cartelera."
            image="https://img.freepik.com/vector-gratis/proximamente-escenario-iluminado-foco-luz_157027-1071.jpg?w=1380&t=st=1669484431~exp=1669485031~hmac=2affa51713edf0342f3cb679df3c7d805539656bcbae98fd55f9347029b7454a"
          />
          <Card
            title="Concursos y sorteos exclusivos"
            description="Consigue los productos de tu peli favorita, un Año de Cine Gratis o divertidos regalos. Solo para nuestros amigos."
            image="https://img.freepik.com/foto-gratis/hombres-mujeres-jovenes-cierran-ojos-cruzan-dedos-esperanza-anticipan-algo-expresiones-fieles-tienen-sonrisas_273609-19001.jpg?w=996&t=st=1669484560~exp=1669485160~hmac=e3933941be9cfb310e3313d03d8f927cee522cf156995718358ecc27a4569248"
          />
          <Card
            title="Visita guiada a cabina de proyección"
            description="Descubre cómo se crea la magia del cine con las visitas guiadas a nuestras cabinas de proyección para que podáis venir tú y un acompañante."
            image="https://img.freepik.com/foto-gratis/muchos-sistemas-iluminacion-led-pocos-filtros-color-escaleras-escenario-pelicula_1268-15947.jpg?w=1380&t=st=1669484662~exp=1669485262~hmac=62fa33ba65e598ac786e1412ad45fe8a98198aa500f3ee7e48beb5a059f11cc2"
          />
          <Card
            title="Descuentos para The Magic Forest"
            description="Ven con los peques al parque de ocio infantil más espectacular a un precio muy especial. (Kinépolis Ciudad de la Imagen) Celebra un cumple mágico o déjales jugando."
            image="https://magicforest.kinepolis.es/sites/default/files/styles/gallery_large/public/the_magic_forest_1.jpg?itok=wojVvPOJ"
          />
          <Card
            title="Más oferta cultural, siempre"
            description="Consigue entradas para las mejores obras de teatro, conciertos y eventos presenciales que se convertirán en experiencias únicas."
            image='https://www.valenciaconventionbureau.com/sites/default/files/styles/gallery_default/public/crm-images/GALERIA_Kinepolis%20Business%20Ideas%20_kinepolis.png?itok=qMxtmDoN'
          />
        </Stack>

        <Stack
          sx={{
            position: "relative",
            height: "750px",
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
              position: "absolute",
              backgroundColor: "#000",
              left: "0px",
              top: "0px",
              width: "100%",
              zIndex: "2",
            }}
          ></video>
          <Stack
            direction="row"
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              display: "flex",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "3",
              gap: "120px",
            }}
          >
            <Stack
              spacing={2}
              sx={{
                width: "750px",
              }}
            >
              <Typography
                align="center"
                fontSize={60}
                color="#FFF"
                fontWeight={700}
                sx={{ textDecoration: "underline" }}
              >
                Para nuestros amigos, siempre hay más
              </Typography>
              <Typography
                align="center"
                fontSize={20}
                color="#FFF"
                fontWeight={700}
              >
                Regístrate en pocos pasos y sé parte de nuestro club de amigos, es ¡Gratis!
                <br/>
                <br/>
                Te preparamos un regalo de bienvenida: Regalo de bienvenida: 50% de descuento en cualquiera de tus compras en nuestras tiendas de Food & Beverage (gasto mínimo 10€).

              </Typography>
            </Stack>
            <Stack
              width={450}
              spacing={3}
              sx={{
                backgroundColor: "#FFF",
                padding: "24px",
                marginTop: "64px",
                borderRadius: "10px",
                boxShadow: "1px 6px 33px " + theme.palette.error.main,
                zIndex: "4",
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
                  sx={{ width: "340px" }}
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
                  Acepto los Términos Generales y las Condiciones de Mi
                  Kinepolis y declaro haber leído la Política de Privacidad.
                </Typography>
              </label>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-end"
                spacing={3}
              >
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
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={3}
          sx={{
            padding: "32px 170px",
          }}
        >
          <Stack spacing={2} width='200px'>
            <Typography
              width={"100%"}
              variant="h2"
              align="left"
              fontWeight={700}
              fontSize={22}
              color="rgba(55,130,163)"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Movies
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Cine Español</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Descúbrela</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Emociónate</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">En Familia</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Todas las Peliculas</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">V.O.S.E.</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} width='200px'>
            <Typography
              width={"100%"}
              variant="h2"
              align="left"
              fontWeight={700}
              fontSize={22}
              color="rgba(55,130,163)"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Eventos
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Ballet en Kinépolis</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Ópera en Kinépolis</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Música</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Clásicos</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Hipnosis y Mentalismo - Magia</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinepolis Live (Espectáculos en vivo)</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Monólogos en vivo</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Sala de Teatro en Vivo</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} width='200px'>
            <Typography
              width={"100%"}
              variant="h2"
              align="left"
              fontWeight={700}
              fontSize={22}
              color="rgba(55,130,163)"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Kinepolis Group
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Sobre Kinépolis</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis para Empresas</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Información financiera</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Trabajar en Kinépolis</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Notas de prensa</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Sitio Catalán</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} width='200px'>
            <Typography
              width={"100%"}
              variant="h2"
              align="left"
              fontWeight={700}
              fontSize={22}
              color="rgba(55,130,163)"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Theaters
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Alicante Plaza Mar 2</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Alzira</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Granada</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis La Cañada</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Mataró Parc</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Madrid Ciudad de la Imagen</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Madrid Diversia</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Nevada</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Kinépolis Valencia</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} width='200px'>
            <Typography
              width={"100%"}
              variant="h2"
              align="left"
              fontWeight={700}
              fontSize={22}
              color="rgba(55,130,163)"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Technologies
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">3D</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Atmos</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Laser Ultra</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} width='200px'>
            <Stack spacing={2} marginBottom='20px'>
              <Typography
                width={"100%"}
                variant="h2"
                align="left"
                fontWeight={700}
                fontSize={22}
                color="rgba(55,130,163)"
                sx={{ display: "flex", alignItems: "center" }}
              >
                Follow us
              </Typography>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Facebook" src="https://cdn-icons-png.flaticon.com/512/889/889102.png?w=740&t=st=1669490169~exp=1669490769~hmac=bc01341526e15429772aa53025c06a493d38bf450c639619a13629e29666f94e" />
                <Avatar alt="Twitter" src="https://cdn-icons-png.flaticon.com/512/889/889147.png?w=740&t=st=1669490200~exp=1669490800~hmac=a17baefaa8be367e6440cc903b453b7ede5839285387c774d6e641c8682863dc" />
                <Avatar alt="Youtube" src="https://cdn-icons-png.flaticon.com/512/889/889161.png?w=740&t=st=1669490244~exp=1669490844~hmac=41e811772db33858f9f8232dab0cc8ed95fb539fb0534d0ce741d7a400023c14" />
                <Avatar alt="Instagram" src="https://cdn-icons-png.flaticon.com/512/733/733558.png?w=740&t=st=1669490274~exp=1669490874~hmac=d53680401c5a6d7fe3c5ec6031b283eae410bd7d2d8c63e42a042c31b1e2cb69" />
              </Stack>
            </Stack>
            <Typography
              width={"100%"}
              variant="h2"
              align="left"
              fontWeight={700}
              fontSize={22}
              color="rgba(55,130,163)"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Social
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Mi visita</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Mi Kinepolis</Typography>
              <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161">Contacto</Typography>
            </Stack>
            <img
                  src="https://kinepolis.es/sites/all/themes/custom/kinepolis_zen/images/kinepolis_logo.png"
                  alt="Logo de Kinepolis"
                  style={{
                    width: "120px",
                    height: "120px",
                  }}
                />
          </Stack>
        </Stack>
        
        <Stack direction='row' spacing={3} justifyContent='center' p='32px'>
          <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161" sx={{textDecoration: 'underline'}}>Condiciones de Uso</Typography>
          <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161" sx={{textDecoration: 'underline'}}>Política de privacidad</Typography>
          <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161" sx={{textDecoration: 'underline'}}>Gestión de cookies</Typography>
          <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161" sx={{textDecoration: 'underline'}}>Condiciones de Venta</Typography>
          <Typography variant="h3" fontWeight={400} fontSize={18} color="#616161" sx={{textDecoration: 'underline'}}>Preguntas Frecuentes</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Landing;
