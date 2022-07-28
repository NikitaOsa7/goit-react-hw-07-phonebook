import React from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import Notiflix from 'notiflix';
import {
  useCreateContactMutation,
  useGetContactsQuery,
} from 'redux/contactSlice';

export default function Form() {
  const [params, setParams] = useState({
    id: nanoid(10),
    name: '',
    phone: '',
  });
  const [createContact] = useCreateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleInputChange = e => {
    setParams({ ...params, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.includes(params.name))) {
      Notiflix.Notify.failure(`Contact ${params.name} is already exist`);
    } else if (contacts.some(contact => contact.phone.includes(params.phone))) {
      Notiflix.Notify.failure(`phone ${params.phone} is already exist`);
    } else createContact(params);
    console.log(params);
    setParams({ id: nanoid(10), name: '', phone: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        {' '}
        Name
        <input
          autoComplete="off"
          className={s.input}
          onChange={handleInputChange}
          value={params.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        Number
        <input
          autoComplete="off"
          className={s.input}
          onChange={handleInputChange}
          value={params.phone}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
}
