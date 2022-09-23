import React from "react";
import { MyNote } from "../models";
import NoteComponent from "./NoteComponent";

interface NoteProps {
  props: MyNote[];
  archiveNote: (id: string) => void;
  removeNote: (id: string) => void;
  editNote: (id: string) => void;
  createNote: () => void;
}

const ActiveNotesComponent = (props: NoteProps) => {
  const elementsActive = props.props
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
        archiveNote={props.archiveNote}
        removeNote={props.removeNote}
        editNote={props.editNote}
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
      <button className="btn-create-note" onClick={props.createNote}>
        Create Note
      </button>
    </section>
  );
};

export default ActiveNotesComponent;
