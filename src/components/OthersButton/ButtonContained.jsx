import React from 'react';
import Button from '@mui/material/Button';
import theme from '../../theme'

function ButtonContained({width='100%', height='44px', backgroundColor=theme.palette.primary, children, ...props}) {
  return (
    <Button {...props} variant="contained" sx={{
      '&:hover': {backgroundColor: backgroundColor.main, boxShadow: 'none'},
      '&.Mui-disabled': {
        backgroundColor: backgroundColor.disabled,
        color: theme.palette.secondary.contrastText,
        boxShadow: 'none'
      },
      boxShadow: 'none',
      backgroundColor: backgroundColor.main,
      height: height,
      width: width,
    }}>{children}</Button>
  );
}

export {ButtonContained};
