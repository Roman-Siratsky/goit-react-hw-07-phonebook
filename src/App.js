import React from 'react'
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm'
import Filter from './components/Filter/Filter'
import ContactList from './components/ContactList/ContactList'
import './sass/main.scss'
// import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core'
// import ContactsIcon from '@material-ui/icons/Contacts';
import Header from './components/Header/Header'


const App = () => {
    return (
      <div className="App">
        <Header />
        <div className='container'>
          <div>
            <ContactForm/>
          </div>
          <div>
            <h2>Contacts</h2>
            <Filter/>
            <ul>
              <ContactList/>
            </ul>
          </div>
        </div>
    </div>
  )
} 



export default App;
