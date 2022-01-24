import { PropTypes } from 'prop-types';
import css from '../../styles/filter.module.css';
import { useState, useEffect } from 'react';
import * as actions from '../../store/items/actions';
import { connect } from 'react-redux';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Find contact by name</p>
      <label>
        <input
          onChange={e => changeFilter(e.target.value)}
          type="text"
          name="filter"
          value={filter}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeFilter: value => dispatch(actions.changeFilter(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
