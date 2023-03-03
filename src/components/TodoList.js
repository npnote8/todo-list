import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import style from "./TodoList.module.css";
import ButtonSortTitle from "./ButtonSortTitle";
import ButtonSortDate from "./ButtonSortDate";
import ButtonSortDays from "./ButtonSortDays";
import moment from "moment";

const TodoList = ({ todoList, onRemoveTodo, setTodoList, onUpdateTodo }) => {
  const tableRows = todoList.map((item) => {
    if (moment(item.fields.DueDate).diff(moment(), "days") >= 0) {
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
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>
              Title
              {
                <ButtonSortTitle
                  todoList={todoList}
                  setTodoList={setTodoList}
                />
              }
            </th>
            <th>
              Due Date
              {<ButtonSortDate todoList={todoList} setTodoList={setTodoList} />}
            </th>
            <th>
              Days Left
              {<ButtonSortDays todoList={todoList} setTodoList={setTodoList} />}
            </th>
            <th>Important</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </>
  );
};
TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  setTodoList: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};
export default TodoList;
