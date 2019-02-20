import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewTodo extends Component {
  constructor() {
    super();
    this.state = { title: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    const { addTodo } = this.props;
    const { title } = this.state;

    return (
      <div className="col-md-3">
        <div className="card shadow mb-4">
          <div className="card-header">
            <div className="row">
              <div className="col-9">
                <input type="text" className="form-control" value={title} onChange={this.handleChange} />
              </div>
              <div className="offset-1 col-2">
                <button type="button" className="btn btn-success float-right" onClick={() => addTodo(title)}>Save</button>
              </div>
            </div>
          </div>
          <div className="card-body" />
        </div>
      </div>
    );
  }
}

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

NewTodo.defaultProps = {
};

export default NewTodo;
