import React, { useState } from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import moment from "moment";
import { debounce } from "lodash";

const TodoListItem = ({ item, onRemoveTodo, onUpdateTodo }) => {
  const [readOnly, setReadOnly] = useState(true);
  /*   const formatDate = (dt) => {
    const year = dt.substring(0, 4);
    const month = dt.substring(5, 7);
    const day = dt.substring(8, 10);
    const displayDate = `${month}/${day}/${year}`;

    return displayDate;
  }; */
  const calculateDays = () => {
    return moment(item.fields.DueDate).diff(moment(), "days");
  };
  const handleImportantClick = () => {
    item.fields.Important = !item.fields.Important;
    onUpdateTodo(item);
  };
  const handleEditClick = () => {
    setReadOnly(!readOnly);
  };

  const handleSaveClick = () => {
    setReadOnly(!readOnly);
    onUpdateTodo(item);
  };
  const handleInputChange = debounce((e, property) => {
    item.fields[property] = e.target.value;
  }, 100);

  return (
    <>
      <tr>
        <td>
          {" "}
          <input
            type="text"
            defaultValue={item.fields.Title}
            onKeyUp={(e) => handleInputChange(e, "Title")}
            readOnly={readOnly}
            className={style.tableInput}
          />
        </td>
        <td>
          <input
            type="date"
            defaultValue={item.fields.DueDate}
            onChange={(e) => handleInputChange(e, "DueDate")}
            readOnly={readOnly}
            className={style.tableInput}
          />
        </td>
        <td>{calculateDays()}</td>
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
            <button
              type="button"
              onClick={handleEditClick}
              className={style.buttonEdit}
            >
              Edit
            </button>
          )}
          {!readOnly && (
            <button
              type="button"
              onClick={handleSaveClick}
              className={style.buttonSave}
            >
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
