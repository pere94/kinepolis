import React from 'react';
import Button from '@mui/material/Button';

function ButtonText({width='100%', height='44px', children, ...props}) {
  return (
    <Button {...props} variant="text" sx={{
      boxShadow: 'none',
      height: height,
      width: width,
    }}>{children}</Button>
  );
}

export {ButtonText};
