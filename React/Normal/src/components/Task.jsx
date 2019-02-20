import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Task extends Component {
  render() {
    const { task } = this.props;
    return (
      <li className="list-group-item">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id={task.id} />
          <label className="form-check-label" htmlFor={task.id}>{task.name}</label>
        </div>
      </li>
    );
  }
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

Task.defaultProps = {
  task: {},
};

export default Task;
