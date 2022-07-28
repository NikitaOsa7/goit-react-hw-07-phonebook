import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { useDeleteContactMutation } from 'redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const [onDeleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li key={id} className={s.listContacts}>
      <p>
        {name}: {number}
      </p>
      <button
        name={name}
        type="submit"
        disabled={isDeleting}
        className={s.listBtn}
        onClick={() => onDeleteContact(id)}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
      
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
