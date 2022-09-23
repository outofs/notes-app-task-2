import React from "react";
import { MyCategory } from "../models";
import NoteCategory from "./NoteCategory";

interface CategoryProps {
  categories: MyCategory[];
}
const CategoriesComponent = (props: CategoryProps) => {
  const categories = props.categories.map((category) => (
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
        {categories}
      </div>
    </section>
  );
};

export default CategoriesComponent;
