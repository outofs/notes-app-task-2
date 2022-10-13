import React from "react";
import { MyNote } from "../models";
import { RootState } from "../redux/store";
import NoteComponent from "./NoteComponent";
import { useSelector } from "react-redux";

interface NoteProps {
  displayOverlayAndModal: () => void;
}

const ActiveNotesComponent = (props: NoteProps) => {
  const createNote = function () {
    props.displayOverlayAndModal();
    document.querySelector(".btn-done-create")?.classList.remove("hidden");
    document.querySelector(".btn-done-edit")?.classList.add("hidden");
  };

  const notes = useSelector((state: RootState) => state.noteActions);

  const elementsActive = notes
    .filter((prop) => !prop.archived && prop)
    .map((prop) => (
      <NoteComponent
        id={prop.id}
        title={prop.title}
        created={prop.created}
        content={prop.content}
        category={prop.category}
        archived={prop.archived}
        dates={prop.dates}
        key={prop.id}
        icon={prop.icon}
      />
    ));

  return (
    <section className="active-notes">
      <div className="component-header notes-header">
        <h3 className="header-name">Name</h3>
        <h3 className="header-created">Created</h3>
        <h3 className="header-category">Category</h3>
        <h3 className="header-content">Content</h3>
        <h3 className="header-dates">Dates</h3>
        <div className="header-archive-remove-icons">
          <div className="header-archive-icon">
            <i className="uil uil-archive"></i>
          </div>
          <div className="header-archive-icon">
            <i className="uil uil-trash"></i>
          </div>
        </div>
      </div>
      <div className="notes-container">
        {/* <!-- ---active notes content--- --> */}
        {elementsActive}
      </div>
      <button className="app-btn btn-create-note" onClick={createNote}>
        Create Note
      </button>
    </section>
  );
};

export default ActiveNotesComponent;
