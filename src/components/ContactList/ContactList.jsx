import s from './ContactList.module.css';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter, getVisibleContacts } from '../../redux/selectors';
import { useGetContactsQuery } from 'redux/contactSlice';

export default function ContactList() {
  const filter = useSelector(getFilter);
  const { data } = useGetContactsQuery();
  const contacts = getVisibleContacts(filter, data);

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} id={id} name={name} number={phone} />
        ))}
    </ul>
  );
}
