import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.state = {
      task: ""
    };
  }
  

  removeTodo(event, id) {
    this.props.removeTodo(id)
  }
  render() {
    let todos = this.props.todos.map((val, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, val.id)}
        task={val.task}
        key={index}
      />
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">Task: </label>
          <input
            type="text"
            name="task"
            id="task"
            onChange={this.handleChange}
          />
          <button>Add a Todo!</button>
        </form>
        <div>
          <ul>{todos}</ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     addTodo: function(task) {
//       dispatch({
//         type: "ADD_TODO",
//         task
//       });
//     }
//   };
// }
export default connect(
  mapStateToProps,
  { addTodo, removeTodo }
)(TodoList);
