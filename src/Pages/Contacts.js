import Filter from 'components/Filter';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

const Contacts = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
      <ContactForm></ContactForm>
      <h2 style={{ textAlign: 'center' }}>Contacts:</h2>
      <Filter></Filter>
      <ContactList></ContactList>
    </>
  );
};

export default Contacts;
