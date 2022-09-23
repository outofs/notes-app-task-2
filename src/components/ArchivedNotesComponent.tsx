import React from "react";
import ArchivedNoteComponent from "./ArchivedNoteComponent";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const ArchivedNotesComponent = () => {
  const notes = useSelector((state: RootState) => state.noteActions);

  const elementsArchive = notes
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
      />
    ));

  const toggleArchived = function () {
    document.querySelector(".archived-container")?.classList.toggle("hidden");
  };

  return (
    <section className="archived-notes">
      <div
        className="component-header archived-header"
        onClick={toggleArchived}
      >
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
