import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WarningIcon from '@mui/icons-material/Warning'
import ErrorIcon from '@mui/icons-material/Error'
import InfoIcon from '@mui/icons-material/Info'
import { createTheme } from '@mui/material/styles'

const palette = {
  type: 'light',
  primary: {
    main: '#5d8ef4',
    disabled: '#ABC3F4',
  },
  secondary: {
    main: '#abc3f4',
    contrastText: '#ffffff',
  },
  error: {
    main: '#eb5757',
    disabled: '#EBA4A4',
  },
  warning: {
    main: '#f5bc4a',
  },
  info: {
    main: '#5d8ef4',
  },
  success: {
    main: '#1edea2',
    contrastText: '#ffffff',
  },
  background: {
    default: '#ffffff',
    grey: '#f8f8f8',
    infoGrey: '#f9f9fb',
  },
  common: {
    black: '#262424',
    white: '#ffffff',
    yellow: '#FFBA23',
  },
  lightBlueBorder: {
    main: '#f2f6fe',
  },
  greyBorder: {
    main: '#eceded',
  },
  darkGrey: {
    main: '#989898',
  },
  placeholder: {
    main: '#b1b5b8',
  },
  green: {
    main: '#1edea2',
  },

  black: {
    main: '#262424',
  },
  white: {
    main: '#ffffff',
  },
  action: {
    hover: '#dee8fd',
  },
  analytics: {
    pageViews: {
      main: '#262424',
      bg: '#eceded',
    },
    clicks: {
      main: '#FFBA23',
      bg: '#FFF9E9',
    },
    purchases: {
      main: '#6E53DD',
      bg: '#F1EEFC',
    },
    revenues: {
      main: '#E13C8F',
      bg: '#FCECF4',
    },
    cr: {
      main: '#ADCE1C',
      bg: '#F7FBE9',
    },
    refunds: {
      main: '#EB5757',
      bg: '#FDEFEF',
    },
    confirmedCommission: {
      main: '#1EDEA2',
      bg: '#DFFBF2',
    },
    confirmedCount: {
      main: '#23B0FF',
      bg: '#E9F8FF',
    },
  },
  table: {
    row: {
      background: {
        even: '#ffffff',
        odd: '#f4f4f5',
      },
    },
  },
  affiliableLinks: {
    affiliable: {
      color: '#1EDEA2',
      background: '#E5FAF2',
    },
    affiliated: {
      color: '#989898',
      background: '#F8F8F8',
    },
    notAffiliable: {
      color: '#EB5757',
      background: '#FDEFEF',
    },
    reaffiliable: {
      color: '#FFBA23',
      background: '#FFF9E9',
    },
  },
}

const typography = {
  fontFamily: 'Poppins',
  color: palette.common.black,
  h1: {
    fontSize: 28,
    fontWeight: '500',
  },
  h2: {
    fontSize: 20,
    fontWeight: '500',
  },
  h3: {
    fontSize: 18,
    fontWeight: '500',
  },
  body1: {
    fontSize: 14,
  },
  body2: {
    fontSize: 12,
  },
  button: {
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'none',
  },
}

const shadows = [
  '0px 4px 12px rgba(0, 0, 0, 0.2)', // Tooltip, snackbar
  '0px 2px 5px rgba(0, 0, 0, 0.2)', // Paper, card
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
  '0px 4px 12px rgba(0, 0, 0, 0.2)',
]

const components = {
  MuiAlert: {
    defaultProps: {
      iconMapping: {
        success: <CheckCircleIcon />,
        warning: <WarningIcon />,
        error: <ErrorIcon />,
        info: <InfoIcon />,
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: palette.white.main,
        color: palette.black.main,
        boxShadow: shadows[0],
        fontSize: 11,
      },
    },
  },

  MuiBreadcrumbs: {
    styleOverrides: {
      root: {
        '& *': {
          color: palette.common.black,
          textDecoration: 'none',
          'a:hover': {
            textDecoration: 'underline',
          },
        },
        '& .MuiBreadcrumbs-separator': {
          fontSize: '32px',
        },
        '.MuiBreadcrumbs-li:last-of-type > .MuiTypography-root': {
          color: palette.primary.main,
        },
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      asterisk: {
        color: palette.error.main,
        '&$error': {
          color: palette.error.main,
        },
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        '&.Mui-disabled': {
          color: palette.darkGrey.main,
        },
        '&.Mui-error': {
          color: palette.error.main,
        },
      },
      asterisk: {
        color: palette.error.main,
        '&$error': {
          color: palette.error.main,
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        color: palette.common.black,
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        color: palette.common.black,
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      input: {
        color: palette.common.black,
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        color: palette.common.black,
      },
    },
  },
}

const TMBlueTheme = createTheme({
  typography,
  palette,
  shadows,
  components
})

export default TMBlueTheme
