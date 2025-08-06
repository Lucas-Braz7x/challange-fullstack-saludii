import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu as MenuMUI,
  MenuItem,
  Box,
  Button,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { MENU_OPTIONS } from 'src/components/organisms/Header/constants'

export const Menu = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        borderRadius: '25px',
        color: '#7c6f64',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            fontFamily: "'Pacifico', cursive",
            // color: '#bb974a',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
          }}
        >
          Receitas++
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleOpenMenu}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <MenuMUI
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {MENU_OPTIONS.map((item) => (
                <MenuItem key={item} onClick={handleCloseMenu}>
                  {item}
                </MenuItem>
              ))}
            </MenuMUI>
          </>
        ) : (
          <Box>
            {MENU_OPTIONS.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  )
}
