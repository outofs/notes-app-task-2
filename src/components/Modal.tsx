import React from "react";

interface ModalProps {
  hideOverlayAndModal: () => void;
  createNoteDone: () => void;
  editNoteDone: () => void;
  setValueTitle: any;
  setValueCategory: any;
  setValueContent: any;
  valueTitle: string;
  valueCategory: string;
  valueContent: string;
}

const Modal = (props: ModalProps) => {
  return (
    <div className="modal hidden">
      <button className="btn--close-modal" onClick={props.hideOverlayAndModal}>
        &times;
      </button>
      <h2 className="modal__header">Your note</h2>
      <form className="modal__form">
        <label htmlFor="add-title">Title</label>
        <input
          type="text"
          placeholder="Note title"
          id="add-title"
          className="add-title"
          value={props.valueTitle}
          onChange={(event) => props.setValueTitle(event.target.value)}
        />

        <label htmlFor="select-category">Category</label>
        <select
          name=""
          id="select-category"
          className="select-category"
          value={props.valueCategory}
          onChange={(event) => props.setValueCategory(event.target.value)}
        >
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
          value={props.valueContent}
          onChange={(event) => props.setValueContent(event.target.value)}
        ></textarea>
      </form>
      <div className="form-btns">
        <button
          className="btn-done-create hidden"
          onClick={props.createNoteDone}
        >
          Create
        </button>
        <button className="btn-done-edit hidden" onClick={props.editNoteDone}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
