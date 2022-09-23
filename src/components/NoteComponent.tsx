import React from "react";
import { MyNote } from "../models";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { archiveNote, removeNote } from "../redux/noteActionsSlice";
import {
  categoryChange,
  contentChange,
  titleChange,
} from "../redux/modalValuesSlice";
import { setCurrentId } from "../redux/currentIdSlice";

interface PropsNote {
  id: string;
  created: string;
  title: string;
  category: string;
  icon: string | undefined;
  content: string;
  dates: string;
  archived: boolean | undefined;
}

const NoteComponent = (props: PropsNote) => {
  const displayOverlayAndModal = function () {
    document.querySelector(".modal")?.classList.remove("hidden");
    document.querySelector(".overlay")?.classList.remove("hidden");
  };

  const notes = useSelector((state: RootState) => state.noteActions);
  const index = notes.findIndex((note: MyNote) => `${note.id}` === props.id);
  const dispatch = useDispatch();

  const editNote = function (id: string) {
    displayOverlayAndModal();
    document.querySelector(".btn-done-create")?.classList.add("hidden");
    document.querySelector(".btn-done-edit")?.classList.remove("hidden");

    dispatch(setCurrentId(id));

    const currentNote: MyNote | undefined = notes.find(
      (note) => note.id === id
    );
    if (currentNote !== undefined) {
      dispatch(titleChange(currentNote.title));
      dispatch(categoryChange(currentNote.category));
      dispatch(contentChange(currentNote.content));
    }
  };

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
          className="btn-edit"
          onClick={() => {
            editNote(props.id);
          }}
        >
          <i className="uil uil-pen"></i>
        </div>
        <div
          className="btn-archive"
          onClick={() => dispatch(archiveNote(index))}
        >
          <i className="uil uil-archive-alt"></i>
        </div>
        <div className="btn-remove" onClick={() => dispatch(removeNote(index))}>
          <i className="uil uil-trash-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteComponent;
