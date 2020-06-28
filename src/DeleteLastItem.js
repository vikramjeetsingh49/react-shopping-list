import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = props => {

  return (
    <button onClick={props.deleteLastItem} disabled={props.buttonDisabled}>
      Delete Last Item
    </button>
  );
};

DeleteLastItem.propTypes = {
  buttonDisabled: PropTypes.func.isRequired,
  onDeleteLastItem: PropTypes.func.isRequired,
};

export default DeleteLastItem;
