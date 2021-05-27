import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import ContactContext from '../../context/contact/contactContext'
import {
  ADD_CONTACT, 
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Sara Watson',
        email: 'sara@gmail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Tommy',
        email: 'tommy@gmail.com',
        phone: '222-222-2222',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Arthur',
        email: 'arthur@gmail.com',
        phone: '222-222-2222',
        type: 'professional'
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact })
  }

  //Dete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }

  //set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }


  //clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT })
  }

  //update Contact

  //filter contact

  //Clear Filter

  return (
    <ContactContext.Provider
    value={{
      contacts: state.contacts,
      current: state.current,
      addContact,
      deleteContact,
      setCurrent,
      clearCurrent
    }}>
      { props.children }
    </ContactContext.Provider>
  )
}


export default ContactState