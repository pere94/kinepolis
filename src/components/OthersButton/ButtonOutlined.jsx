import React from 'react';
import Button from '@mui/material/Button';
import theme from '../../theme'

function ButtonOutlined({width='100%', backgroundColor=theme.palette.secondary.contrastText, children, ...props}) {
  return (
    <Button {...props} variant="outlined" sx={{
      '&:hover': {backgroundColor: backgroundColor, boxShadow: 'none'},
      boxShadow: 'none',
      backgroundColor: {backgroundColor},
      height: '44px',
      width: width,
    }}>{children}</Button>
  );
}

export {ButtonOutlined};
