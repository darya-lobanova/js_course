//I tried

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onToggle}
        style={{ textDecoration: this.props.completed ? 'line-through' : '' }}
      >
        { this.props.value }
      </div>
    );
  }
}

TodoItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  completed: PropTypes.bool,
  onToggle: PropTypes.func,
  clear: PropTypes.value,
};

class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = { list: [] };
  }

  onItemAdd(e) {
    const valid = /^\s{1,}$/;
    if (e.keyCode === 13 && e.target.value.length) {
      this.setState({
          list: this.state.list.concat({
          value: e.target.value,
          id: Math.random(),
          completed: false,
        }),
      });

      e.target.value = '';
    }
    const newItem = this.target.value
    if (newItem !== valid) {
      this.setState({
        list: this.state.list
      })
    }

  }

  onCompletedToggle(id) {
    const result = this.state.list.filter(item => item.id === id)[0];

    if (result) {
      result.completed = !result.completed;

      this.setState({ list: this.state.list });
    }
  }

  removeItem(value) {
    const remove = null;
    if (onClick)
    removeButton(
      <button className="remove_btn" onClick={(e)=> this.remove(value)}>Delete</button>
    )
  }

  clearCompleted () {
    const clearBtn = null;
    if (this.props.completed > 0) {
      completeButton = (
        <button className="clearbtn" onClick={this.props.clearCompleted()}>Clear completed</button>
      )
    }
  }

  render() {
    return (
      <div>
        <h1 className="todoname">todos</h1>
        <input className="inp" type="text" onKeyDown={this.onItemAdd.bind(this)} placeholder="What needs to be done?"/>
        {
          this.state.list.map((item) => (
            <TodoItem
              id={item.id}
              value={item.value}
              completed={item.completed}
              onToggle={this.onCompletedToggle.bind(this, item.id)}
              key={item.id}
              // newItem={item.value}
            />
          ))
        }
        
        {
          this.state.list.filter(item => !item.completed).length
        }
      </div>
    );
  }
}

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root'),
)