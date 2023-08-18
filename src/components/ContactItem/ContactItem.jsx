import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from './ContactItem.styled';
import { Button } from 'components/Commons/Button.styled';

import { selectIsLoading } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactListItem>
      <p>
        {name}: {number}
      </p>
      <Button onClick={onDeleteContact} disabled={isLoading}>
        Delete
      </Button>
    </ContactListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
};
