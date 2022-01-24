import { ContactsListItem } from './contactsListItem';
import PropTypes from 'prop-types';
import css from '../../styles/contacts.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/items/actions';

const ContactsList = ({ contacts, deletContact }) => {
  return (
    <ul className={css.list}>
      {contacts.length > 0 &&
        contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            deletFunc={() => deletContact(contact.id)}
          />
        ))}
    </ul>
  );
};
ContactsList.propTypes = {
  contacts: PropTypes.array,
  deletFunc: PropTypes.func,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletContact: id => dispatch(actions.deletItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
