import React from "react";
import ActiveNotesComponent from "./components/ActiveNotesComponent";
import ArchivedNotesComponent from "./components/ArchivedNotesComponent";
import CategoriesComponent from "./components/CategoriesComponent";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";
import { notesObj } from "./store";
import { icon } from "./helper";
import { nanoid } from "nanoid";
import { extractDates } from "./helper";
import { dateCreated } from "./helper";
import { monthNames } from "./store";
import { MyNote } from "./models";

function App() {
  const [notes, setNotes] = React.useState(notesObj);
  const [currentId, setCuerrentId] = React.useState("");
  const [valueTitle, setValueTitle] = React.useState("");
  const [valueCategory, setValueCategory] = React.useState("");
  const [valueContent, setValueContent] = React.useState("");

  const cleanInputs = function () {
    setValueTitle("");
    setValueCategory("Random Thought");
    setValueContent("");
  };

  const displayOverlayAndModal = function () {
    document.querySelector(".modal")?.classList.remove("hidden");
    document.querySelector(".overlay")?.classList.remove("hidden");
  };

  const hideOverlayAndModal = function () {
    document.querySelector(".modal")?.classList.add("hidden");
    document.querySelector(".overlay")?.classList.add("hidden");
    cleanInputs();
  };

  const archiveNote = function (id: string) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const removeNote = function (id: string) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const editNote = function (id: string) {
    displayOverlayAndModal();
    document.querySelector(".btn-done-create")?.classList.add("hidden");
    document.querySelector(".btn-done-edit")?.classList.remove("hidden");
    setCuerrentId(id);
    console.log(currentId);

    const currentNote: MyNote | undefined = notes.find(
      (note) => note.id === id
    );
    if (currentNote !== undefined) {
      setValueTitle(currentNote.title);
      setValueCategory(currentNote.category);
      setValueContent(currentNote.content);
    }
  };

  const editNoteDone = function () {
    setNotes((prev) =>
      prev.map((note) =>
        note.id !== currentId
          ? note
          : {
              ...note,
              icon: icon(valueCategory),
              title: valueTitle,
              category: valueCategory,
              categoryText: valueCategory,
              content: valueContent,
              dates: extractDates(valueContent),
            }
      )
    );
    hideOverlayAndModal();
  };

  const createNote = function () {
    displayOverlayAndModal();
    document.querySelector(".btn-done-create")?.classList.remove("hidden");
    document.querySelector(".btn-done-edit")?.classList.add("hidden");
  };

  const createNoteDone = function () {
    if (valueTitle === "" || valueContent === "") {
      return alert("Please fill inpututs!");
    } else {
      const newNote = {
        icon: icon(valueCategory),
        id: nanoid(),
        created: dateCreated(monthNames),
        title: valueTitle,
        category: valueCategory,
        categoryText: valueCategory,
        content: valueContent,
        dates: extractDates(valueContent),
        archived: false,
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
      hideOverlayAndModal();
    }
  };

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

  ///////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <ActiveNotesComponent
        props={notes}
        archiveNote={archiveNote}
        removeNote={removeNote}
        editNote={editNote}
        createNote={createNote}
      />
      <CategoriesComponent categories={categories} />
      <ArchivedNotesComponent props={notes} archiveNote={archiveNote} />
      <Modal
        hideOverlayAndModal={hideOverlayAndModal}
        createNoteDone={createNoteDone}
        editNoteDone={editNoteDone}
        setValueTitle={setValueTitle}
        setValueCategory={setValueCategory}
        setValueContent={setValueContent}
        valueTitle={valueTitle}
        valueCategory={valueCategory}
        valueContent={valueContent}
      />
      <Overlay />
    </div>
  );
}

export default App;
