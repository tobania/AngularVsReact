import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Todos from './Components/Pages/Todos';
import Demo from './Components/Pages/Demo';


class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar showNewTodo={this.showNewTodo} />
          <div className="m-5">
            <div className="container-fluid">
              <Route exact path="/" component={Todos} />
              <Route exact path="/Demo" component={Demo} />
            </div>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
