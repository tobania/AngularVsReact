import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class Todo extends Component {
  render() {
    const { tasks, title } = this.props;
    return (
      <div className="col-md-3">
        <div className="card shadow mb-4">
          <div className="card-header">
            <span>{title}</span>
          </div>
          <div className="card-body">
            {
              tasks.map(task => (
                <Task task={task} />
              ))
            }
            <div className="row mt-4">
              <div className="col-10">
                <input type="text" className="form-control" />
              </div>
              <div className="col-2">
                <div className="btn btn-success float-right">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Todo.propTypes = {
  title: PropTypes.string,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

Todo.defaultProps = {
  title: '',
  tasks: [],
};

export default Todo;
