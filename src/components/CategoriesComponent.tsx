import React from "react";
import { RootState } from "../redux/store";
import NoteCategory from "./NoteCategory";
import { useSelector } from "react-redux";
import { icon } from "../helper";

const CategoriesComponent = () => {
  const notes = useSelector((state: RootState) => state.noteActions);

  const countActiveAndArchived = function (category: string) {
    return {
      icon: icon(category),
      name: category,
      active: notes.filter(
        (item) => item.category === category && item.archived === false
      ).length,
      archived: notes.filter(
        (item) => item.category === category && item.archived === true
      ).length,
    };
  };

  let categories = [
    countActiveAndArchived("Task"),
    countActiveAndArchived("Random Thought"),
    countActiveAndArchived("Idea"),
    countActiveAndArchived("Quote"),
  ];

  const categoriesComp = categories.map((category) => (
    <NoteCategory
      icon={category.icon}
      name={category.name}
      active={category.active}
      archived={category.archived}
      key={category.name}
    />
  ));

  return (
    <section className="categories">
      <div className="component-header note-category-header">
        <h3 className="note-category">Note Category</h3>
        <h3 className="note-active">Active</h3>
        <h3 className="note-archived">Archived</h3>
      </div>

      <div className="notes-container categories-container">
        {/* <!-- ---categories content--- --> */}
        {categoriesComp}
      </div>
    </section>
  );
};

export default CategoriesComponent;
