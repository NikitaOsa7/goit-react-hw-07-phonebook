import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem'
import s from './ContactList.module.css';
import {useGetContactsQuery } from '../../redux/contacts/contactsApi';

export default function ContactList({ filter }) {
    const { data } = useGetContactsQuery();

    const filteredContacts = data?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    
    if (filteredContacts) {
        return (
        
            <ul>
                {filteredContacts.map(({ id, name, number }) => (
                    <li className={s.li} key={id}>
                        <ContactItem id={id} name={name} number={number}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
};




