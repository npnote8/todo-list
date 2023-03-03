import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import moment from "moment";

const TodoListOutdated = ({ todoList, onRemoveTodo, onUpdateTodo }) => {
  const tableRows = todoList.map((item) => {
    if (moment(item.fields.DueDate).diff(moment(), "days") < 0) {
      return (
        <TodoListItem
          key={item.id}
          item={item}
          onRemoveTodo={onRemoveTodo}
          onUpdateTodo={onUpdateTodo}
        />
      );
    } else {
      return "";
    }
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Due Date</th>
          <th>Days Left</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};
TodoListOutdated.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};

export default TodoListOutdated;
