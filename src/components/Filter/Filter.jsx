import s from './Filter.module.css';
import PropTypes from 'prop-types'


export default function Filter({ onHandleChange, filter }) {
    return (
        <label className={s.label}>
            Find a contact by the name
            <input
                className={s.input}
                type='text'
                name='filter'
                value={filter}
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={e => onHandleChange(e.target.value)}
                required
            />
        </label>
    );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
};