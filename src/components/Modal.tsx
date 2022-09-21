import React from "react";

const Modal = () => {
  return (
    <div className="modal hidden">
      <button className="btn--close-modal">&times;</button>
      <h2 className="modal__header">Your note</h2>
      <form className="modal__form">
        <label htmlFor="add-title">Title</label>
        <input
          type="text"
          placeholder="Note title"
          id="add-title"
          className="add-title"
        />

        <label htmlFor="select-category">Category</label>
        <select name="" id="select-category" className="select-category">
          <option value="Task">Task</option>
          <option value="Random Thought" selected>
            Random Thought
          </option>
          <option value="Idea">Idea</option>
          <option value="Quote">Quote</option>
        </select>

        <label htmlFor="add-content">Note Content</label>
        <textarea
          name=""
          id="add-content"
          className="add-content"
          placeholder="Note content"
        ></textarea>
      </form>
      <div className="form-btns">
        <button className="btn-done-create hidden">Create</button>
        <button className="btn-done-edit hidden">Done</button>
      </div>
    </div>
  );
};

export default Modal;
