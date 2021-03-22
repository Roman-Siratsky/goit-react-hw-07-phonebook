import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
import ContactsIcon from '@material-ui/icons/Contacts';


const Header = () => {
  return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <ContactsIcon />
            <Typography variant="h6" color="inherit" noWrap>
              PhoneBook
            </Typography>
          </Toolbar>
      </AppBar>
      </>
    )
}

export default Header;