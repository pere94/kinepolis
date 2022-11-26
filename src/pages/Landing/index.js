import { Box, Stack } from '@mui/material';
import Button from '../../components/Button'

function Landing() {
  return (
    <Box sx={{
      background: 'url(https://img.freepik.com/foto-gratis/rollo-pelicula-cosas-cine_23-2147698882.jpg?w=1380&t=st=1669412194~exp=1669412794~hmac=76860c66f1a18bae31f6bd8ae955dbe17b6fdee1d34c990ee3959fb401045112)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
    }}>
      <Stack sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
      }}>
        <Stack width={450} spacing={3}>
          <Button text='Formulario de Registro' />
          <Button text='Formulario onsite de Registro al boletín semanal' />
          <Button text='Formulario de Registro al Grupo de amigos' />
        </Stack>
      </Stack>
    </Box>
  );
}

export default Landing;