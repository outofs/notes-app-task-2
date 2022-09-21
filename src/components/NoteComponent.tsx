import React from "react";

interface PropsNote {
  id: string;
  created: string;
  title: string;
  category: string;
  icon: string | undefined;
  content: string;
  dates: string;
  archived: boolean | undefined;
  archiveNote: (id: string) => void;
  removeNote: (id: string) => void;
  editNote: (id: string) => void;
}

const NoteComponent = (props: PropsNote) => {
  return (
    <div className="container-content note-content">
      <div className="note-icon-title-container">
        <div className="icon-container">
          <i className={`uil ${props.icon} note-icon`}></i>
        </div>
        <h3>{props.title}</h3>
      </div>
      <div className="date-created">
        <h4>{props.created}</h4>
      </div>
      <div className="name-category">{props.category}</div>
      <div className="content">
        <h4>{props.content}</h4>
      </div>
      <div className="dates">
        <h4>{props.dates}</h4>
      </div>
      <div className="btns-container">
        <div className="btn-edit" onClick={() => props.editNote(props.id)}>
          <i className="uil uil-pen"></i>
        </div>
        <div
          className="btn-archive"
          onClick={() => props.archiveNote(props.id)}
        >
          <i className="uil uil-archive-alt"></i>
        </div>
        <div className="btn-remove" onClick={() => props.removeNote(props.id)}>
          <i className="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteComponent;
