import ContactItem from '../ContactItem/ContactItem'
import s from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/contacts/contactsApi';
import { useSelector } from 'react-redux';

export default function ContactList() {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    
    if (filteredContacts) {
        return (
        
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li className={s.li} key={id}>
                        <ContactItem
                            id={id}
                            name={name}
                            number={number}
                        />
                    </li>
                ))}
            </ul>
        );
    }
}





