import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';
import { useDeleteContactMutation } from 'redux/contactSlice';

const ContactListItem = ({ id, name, number }) => {
  const [onDeleteContact] = useDeleteContactMutation();

  return (
    <li key={id} className={s.listContacts}>
      <p>
        {name}: {number}
      </p>
      <button className={s.listBtn} onClick={() => onDeleteContact(id)}>
        Delete
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
