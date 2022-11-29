import { ContactForm } from './ContactForm/ContactForm';
import {useEffect} from 'react'
import {ContactList} from './ContactList/ContactList'
import { Filter } from './Filter/Filter';
import { Container } from './Container/Container';
import { useDispatch} from 'react-redux';
import {fetchContacts} from 'redux/operations'

export function App () {

 const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return (
    
        <>
        <Container>
            <h1>Phonebook</h1>
            <ContactForm/>
        </Container>
        <Container>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
        </Container>
        
      </>

  )


};












