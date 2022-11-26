import { Box, Stack } from '@mui/material';
import Button from './components/Button'
import background from "./img/image1.jpg"
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  return (
    <Box sx={{
      background: `url(${background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '100%',
      height: '100%',
    }}>
      <Stack justifyContent='center' alignItems='center' sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}>
        <Stack width={450} spacing={3}>
          <Button onClick={() => navigate('/register-form')} text='Formulario de Registro' />
          <Button onClick={() => navigate('/suscribe')} text='Registro al boletín semanal' />
          <Button text='Registro al Grupo de amigos' />
          <Button onClick={() => navigate('/landing')} text='Landing de grupo de Amigos' />
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
