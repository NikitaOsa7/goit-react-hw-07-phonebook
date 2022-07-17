import s from './Filter.module.css';
import { getFilter } from '../../redux/contacts/contactsApi';
import { setFilter } from '../../redux/contacts/slice';
import { useSelector, useDispatch } from 'react-redux/es/exports';


export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <label className={s.label}>
            Find a contact by the name
            <input
                className={s.input}
                type='text'
                name='filter'
                value={filter}
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={evt => dispatch(setFilter(evt.target.value))}
                required
            />
        </label>
    );
};
