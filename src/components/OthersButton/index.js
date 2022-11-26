import React from 'react'
import { styled } from '@mui/material/styles'
import MuiButton from '@mui/material/Button'

const StyledButton = styled(MuiButton)(({ theme }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  border: '1px solid ' + theme.palette.primary.main,
  borderRadius: 4,
  fontSize: '14px',
  svg: {
    width: '20px',
    height: '20px',
  },
  '&:hover': {
    backgroundColor: theme.palette.white.main,
    boxShadow: 'none',
    border: '1px solid ' + theme.palette.primary.main,
    color: theme.palette.primary.main,
  },
  '&:disabled': {
    backgroundColor: theme.palette.secondary.main,
    border: '1px solid ' + theme.palette.secondary.main,
    color: theme.palette.white.main,
    boxShadow: 'none',
  },
  '&.MuiButton-containedSecondary': {
    border: '1px solid ' + theme.palette.primary.main,
    backgroundColor: theme.palette.white.main,
    color: theme.palette.primary.main,
    '&:disabled': {
      border: '1px solid ' + theme.palette.secondary.main,
      color: theme.palette.secondary.main,
    },
  },
  '&.MuiButton-containedError': {
    border: '1px solid ' + theme.palette.error.main,
    '&:hover': {
      border: '1px solid ' + theme.palette.error.main,
      color: theme.palette.error.main,
    },
    '&:disabled': {
      border: '1px solid ' + theme.palette.error.disabled,
      backgroundColor: theme.palette.error.disabled,
    },
  },
  '&.MuiButton-containedSuccess': {
    border: '1px solid ' + theme.palette.success.main,
    '&:hover': {
      border: '1px solid ' + theme.palette.success.main,
      color: theme.palette.success.main,
    },
    '&:disabled': {
      border: '1px solid ' + theme.palette.success.main,
      color: theme.palette.success.main,
    },
  },
  '&.MuiButton-textError': {
    border: '1px solid transparent',
    '&:hover': {
      color: theme.palette.error.main,
    },
  },
  '&.MuiButton-sizeSmall': {
    height: '30px',
  },
  '&.MuiButton-sizeMedium': {
    height: '36px',
  },
  '&.MuiButton-sizeLarge': {
    height: '44px',
  },
  '&.MuiButton-sizeXlarge': {
    height: '56px',
  },
}))

export const IconButton = ({ ...props }) => (
  <StyledButton
    variant='contained'
    sx={{
      '&.MuiButton-sizeSmall': {
        minWidth: '30px',
        width: '30px',
        height: '30px',
      },
      '&.MuiButton-sizeMedium': {
        minWidth: '36px',
        width: '36px',
        height: '36px',
      },
      '&.MuiButton-sizeLarge': {
        minWidth: '44px',
        width: '44px',
        height: '44px',
      },
      '&.MuiButton-sizeXlarge': {
        minWidth: '56px',
        width: '56px',
        height: '56px',
      },
    }}
    {...props}
  />
)

const Button = props => <StyledButton variant='contained' {...props} />

export default Button
