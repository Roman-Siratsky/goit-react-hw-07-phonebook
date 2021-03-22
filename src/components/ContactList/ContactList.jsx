import React, { Component } from 'react';
import {connect} from 'react-redux'
import { deleteContact, fetchContacts } from '../../redux/phoneBook/phoneBookOperations';
import shortId from 'shortid'
import { useEffect } from 'react'
import {getVisibleContacts} from '../../redux/phoneBook/phoneBookSelectors'



class ContactList extends Component {

  componentDidMount() {
    this.props.fetchContacts()
  }

  // componentDidUpdate(prevProps, prevSat)

  render() {
      return (
          this.props.contacts.length
          ? this.props.contacts.map((contact, index) => {
            return (
              <li key={contact.id}>
                <p>{index + 1 + ') ' + contact.name + " : " + contact.number}</p>
                <button onClick={() => this.props.onDeleteContact(contact.id)} type='button'>Удалить</button>
              </li>
            )
          })
          : <li key={shortId.generate()}>
              <p>No saved contacts yet</p>
            </li>
    )
    }
}


const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state)
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
  fetchContacts: () => dispatch(fetchContacts())
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);