import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

import ContactItem from './ContactItem';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {error && <h1>ERROR!</h1>}
      {isLoading && <h1>LOADING...</h1>}
      <List>
        {contacts.map(({ number, name, id }) => {
          const filterCondition = name
            .toUpperCase()
            .includes(filter.toUpperCase());

          return (
            filterCondition && (
              <ContactItem
                key={id}
                name={name}
                number={number}
                handleDelete={() => dispatch(deleteContact(id))}
              ></ContactItem>
            )
          );
        })}
      </List>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  filter: PropTypes.string,
};
