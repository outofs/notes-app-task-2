import React from "react";
import { MyNote } from "../models";
import ArchivedNoteComponent from "./ArchivedNoteComponent";

interface NoteProps {
  props: MyNote[];
  archiveNote: (id: string) => void;
}

const ArchivedNotesComponent = (props: NoteProps) => {
  const elementsArchive = props.props
    .filter((prop) => prop.archived && prop)
    .map((prop) => (
      <ArchivedNoteComponent
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
      />
    ));

  const click = function () {
    document.querySelector(".archived-container")?.classList.toggle("hidden");
  };

  return (
    <section className="archived-notes">
      <div className="component-header archived-header" onClick={click}>
        <h3>
          Archived <i className="uil uil-angle-down skills__arrow"></i>
        </h3>
      </div>
      <div className="archived-container notes-container hidden">
        {/* <!-- ---archived notes content--- --> */}
        {elementsArchive}
      </div>
    </section>
  );
};

export default ArchivedNotesComponent;
