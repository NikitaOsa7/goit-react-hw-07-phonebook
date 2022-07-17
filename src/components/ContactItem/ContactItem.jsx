import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/contacts/contactsApi'


export default function ContactItem({ id, name, number }) {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

    return (
        <>
            <span>
                {name} : {number}
            </span>
            <button
                className={s.button}
                type='submit'
                name={name}
                disabled={isDeleting}
                onClick={() => deleteContact(id)}
            >
                {isDeleting ? 'Deleting a contact...' : 'Delete'}
            </button>
        </>
    );
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
}