import { create } from "domain";
import { nanoid } from "nanoid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dateCreated,
  editProps,
  extractDates,
  icon,
  monthNames,
} from "../helper";
import { MyNote } from "../models";
import {
  categoryChange,
  contentChange,
  titleChange,
} from "../redux/modalValuesSlice";
import { createNote, editNote } from "../redux/noteActionsSlice";
import { RootState } from "../redux/store";

interface ModalProps {
  hideOverlayAndModal: () => void;
}

const Modal = (props: ModalProps) => {
  const dispatch = useDispatch();

  const currentId = useSelector((state: RootState) => state.currentId);

  const notes = useSelector((state: RootState) => state.noteActions);
  const index = notes.findIndex(
    (note: MyNote) => `${note.id}` === currentId.currentId
  );

  const modalValues = useSelector((state: RootState) => state.modalValues);

  editProps.valueTitle = modalValues.valueTitle;
  editProps.valueCategory = modalValues.valueCategory;
  editProps.valueContent = modalValues.valueContent;

  const createNoteDone = function () {
    if (modalValues.valueTitle === "" || modalValues.valueContent === "") {
      return alert("Please fill inpututs!");
    } else {
      const newNote = {
        icon: icon(modalValues.valueCategory),
        id: nanoid(),
        created: dateCreated(monthNames),
        title: modalValues.valueTitle,
        category: modalValues.valueCategory,
        categoryText: modalValues.valueCategory,
        content: modalValues.valueContent,
        dates: extractDates(modalValues.valueContent),
        archived: false,
      };

      return newNote;
    }
  };

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
          value={modalValues.valueTitle}
          onChange={(event) => dispatch(titleChange(event.target.value))}
        />

        <label htmlFor="select-category">Category</label>
        <select
          name=""
          id="select-category"
          className="select-category"
          value={modalValues.valueCategory}
          onChange={(event) => dispatch(categoryChange(event.target.value))}
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
          value={modalValues.valueContent}
          onChange={(event) => dispatch(contentChange(event.target.value))}
        ></textarea>
      </form>
      <div className="form-btns">
        <button
          className="app-btn btn-done-create hidden"
          onClick={() => {
            dispatch(createNote(createNoteDone()));
            props.hideOverlayAndModal();
          }}
        >
          Create
        </button>
        <button
          className="app-btn btn-done-edit hidden"
          onClick={() => {
            dispatch(editNote(index));
            props.hideOverlayAndModal();
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
