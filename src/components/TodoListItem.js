import React, { useState } from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import moment from "moment";

const TodoListItem = ({ item, onRemoveTodo, onUpdateTodo }) => {
  const [readOnly, setReadOnly] = useState(true);
  /*   const formatDate = (dt) => {
    const year = dt.substring(0, 4);
    const month = dt.substring(5, 7);
    const day = dt.substring(8, 10);
    const displayDate = `${month}/${day}/${year}`;

    return displayDate;
  }; */
  const handleImportantClick = () => {
    item.fields.Important = !item.fields.Important;
    onUpdateTodo(item);
  };
  const handleEditClick = () => {
    const flag = structuredClone(readOnly);
    setReadOnly(!flag);
    console.log("readOnly", readOnly);
  };
  const handleSaveClick = () => {
    console.log("readOnly", readOnly);
    setReadOnly(!readOnly);
    onUpdateTodo(item);
  };

  return (
    <>
      <tr>
        <td>
          {" "}
          <input type="text" value={item.fields.Title} readonly={readOnly} />
        </td>
        <td>
          <input type="date" value={item.fields.DueDate} readonly={readOnly} />
        </td>
        <td>{moment(item.fields.DueDate).diff(moment(), "days")}</td>
        <td>
          {item.fields.Important === true ? (
            <button
              type="button"
              onClick={handleImportantClick}
              className={style.buttonImportant}
              style={{ backgroundColor: "red" }}
            ></button>
          ) : (
            <button
              type="button"
              onClick={handleImportantClick}
              className={style.buttonImportant}
            ></button>
          )}
        </td>
        <td>
          {readOnly && (
            <button type="button" onClick={handleEditClick}>
              Edit
            </button>
          )}
          {!readOnly && (
            <button type="button" onClick={handleSaveClick}>
              Save
            </button>
          )}
        </td>
        <td>
          <button
            type="button"
            className={style.buttonRemove}
            onClick={() => onRemoveTodo(item.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onUpdateTodo: PropTypes.func,
};
export default TodoListItem;
