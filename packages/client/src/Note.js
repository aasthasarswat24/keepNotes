import React from 'react';
import ReactDOM from 'react-dom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Note= (props)=>{
    const deleteNote=()=>{
        props.deleteItem(props.id);
    };
  return ( 
  <>
  <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button className="btn" onClick={deleteNote}>
      <DeleteOutlineIcon className="deleteicon" />
      </button>
  </div>
  </>
  );

};

export default Note;
