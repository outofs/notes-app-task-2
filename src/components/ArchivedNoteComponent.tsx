import React from "react";
import { MyNote } from "../models";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { archiveNote } from "../redux/noteActionsSlice";

interface Props {
  id: string;
  created: string;
  title: string;
  category: string;
  icon: string | undefined;
  content: string;
  dates: string;
  archived: boolean | undefined;
}

const ArchivedNoteComponent = (props: Props) => {
  const notes = useSelector((state: RootState) => state.noteActions);
  let index = notes.findIndex((note: MyNote) => `${note.id}` === props.id);
  const dispatch = useDispatch();

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
      <div className="name-category">
        <h4>{props.category}</h4>
      </div>
      <div className="content">
        <h4>{props.content}</h4>
      </div>
      <div className="dates">
        <h4>{props.dates}</h4>
      </div>
      <div className="btns-container">
        <div
          className="btn-archive"
          onClick={() => dispatch(archiveNote(index))}
        >
          <i className="uil uil-archive-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default ArchivedNoteComponent;
