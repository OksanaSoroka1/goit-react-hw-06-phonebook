import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import css from '../../styles/form.module.css';
import { nanoid } from 'nanoid';
import * as actions from '../../store/items/actions';
import { connect } from 'react-redux';

const Form = ({ contacts, addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    newContact({ name, number, id: nanoid() });
    reset();
  };

  function newContact(data) {
    contacts.some(contact => contact.name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : addContact(data);
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.container}>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            onChange={handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={css.label}>
          Number
          <input
            className={css.input}
            onChange={handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
      </div>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
  return {
    addContact: item => dispatch(actions.addItem(item)),
  };
};
const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
