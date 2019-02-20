import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Todo from './components/Todo';
import NewTodo from './components/NewTodo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Todo Monday',
          tasks: [{ id: 1, name: 'Shop' }, { id: 2, name: 'Cook' }, { id: 3, name: 'Dishes' }, { id: 4, name: 'Wash' }],
        },
      ],
    };

    this.addTodo = this.addTodo.bind(this);
    this.showNewTodo = this.showNewTodo.bind(this);
  }

  componentDidMount() {
    // TODO http call
  }

  addTodo(title) {
    let { todos } = this.state;

    todos = [...todos, {
      id: 2,
      title,
      tasks: [],
    }];

    this.setState({ todos, showNew: false });
  }

  showNewTodo() {
    this.setState({
      showNew: true,
    });
  }

  render() {
    const { todos, showNew } = this.state;
    return (
      <>
        <Navbar showNewTodo={this.showNewTodo} />
        <div className="m-5">
          <div className="container-fluid">
            <div className="row mt-4">
              {
                todos.map(todo => (
                  <Todo key={todo.id} {...todo} />
                ))
              }
              {
                showNew
                && <NewTodo addTodo={this.addTodo} />
              }
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
