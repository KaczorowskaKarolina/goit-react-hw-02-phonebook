import React from 'react';
import PropTypes from 'prop-types';
import css from './list.css';

export const List = ({ contacts, onDelete }) => (
  <>
    <ul>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.delButton}
            onClick={() => onDelete(contact.id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  </>
);

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};