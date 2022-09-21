import React from "react";

interface PropsCategory {
  icon: string | undefined;
  name: string;
  active: number;
  archived: number;
  key?: string;
}

const NoteCategory = (props: PropsCategory) => {
  return (
    <div className="container-content note-category-content">
      <div className="note-icon-title-container">
        <div className="icon-container">
          <i className={`uil ${props.icon} note-icon`}></i>
        </div>
        <h3>{props.name}</h3>
      </div>
      <div className="active-number">
        <h4>{props.active}</h4>
      </div>
      <div className="archived-number">
        <h4>{props.archived}</h4>
      </div>
    </div>
  );
};

export default NoteCategory;
