import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const EditOption = ({ task, index, onUpdate, onDelete }) => {
  const [valueToBeEdited, setValueToBeEdited] = useState(task);
  const [isEditing, setIsEditing] = useState(false);

  //Do the Edit Functionality
  const handleEditValue = () => {
    setIsEditing(true);
  };

  const handleValueToBeEdit = (e) => {
    const { value } = e.target;
    setValueToBeEdited(value);
  };

  const handleSaveEditValue = () => {
    //pass two argument to onUpdate function to parent(home.jsx)
    onUpdate(valueToBeEdited, index);
    console.log("task is updated:", valueToBeEdited);
    setIsEditing(false);
  };

  //Do the Delete Functionality
  const handleDeleteValue = () => {
    onDelete(index);
     console.log("task is Deleted:", index,valueToBeEdited);
  };

  return isEditing ? (
    <>
      <input value={valueToBeEdited} onChange={handleValueToBeEdit}></input>
      <button onClick={handleSaveEditValue}>Save</button>
    </>
  ) : (
    <>
      {task}
      <EditIcon
        onClick={handleEditValue}
        sx={{
          fontSize: 18,
          marginRight: "15px",
          marginLeft: "15px",
          cursor: "pointer",
        }}
      />
      <DeleteIcon
        onClick={handleDeleteValue}
        sx={{ fontSize: 18, cursor: "pointer" }}
      />
    </>
  );
};
