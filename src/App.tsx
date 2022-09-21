import React from "react";
import ActiveNotesComponent from "./components/ActiveNotesComponent";
import ArchivedNotesComponent from "./components/ArchivedNotesComponent";
import CategoriesComponent from "./components/CategoriesComponent";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";
import { notesObj } from "./store";
import { icon } from "./helper";

function App() {
  const [notes, setNotes] = React.useState(notesObj);

  // const cleanInputs = function () {
  //   document.querySelector(".add-title").value = "";
  //   document.querySelector(".select-category").value = "Random Thought";
  //   document.querySelector(".add-content").value = "";
  // };

  // const displayOverlayAndModal = function () {
  //   document.querySelector(".modal").classList.remove("hidden");
  //   document.querySelector(".overlay").classList.remove("hidden");
  // };

  // const hideOverlayAndModal = function () {
  //   document.querySelector(".modal").classList.add("hidden");
  //   document.querySelector(".overlay").classList.add("hidden");
  //   cleanInputs();
  // };

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
    // displayOverlayAndModal();
    // document.querySelector(".btn-done-create").classList.add("hidden");
    // document.querySelector(".btn-done-edit").classList.remove("hidden");

    const currentNote = notes.find((note) => note.id === id);
    // document.querySelector(".add-title").value = currentNote.title;
    // document.querySelector(".select-category").value = currentNote.category;
    // document.querySelector(".add-content").value = currentNote.content;
  };

  const createNote = function () {
    // displayOverlayAndModal();
    // document.querySelector(".btn-done-create").classList.remove("hidden");
    // document.querySelector(".btn-done-edit").classList.add("hidden");
  };

  // const createNoteDone = function () {
  //   if (
  //     document.querySelector(".add-title").value === "" ||
  //     document.querySelector(".add-content").value === ""
  //   ) {
  //     return alert("Please fill inpututs!");
  //   } else {
  //     const newNote = {
  //       icon: icon(document.querySelector(".select-category").value),
  //       id: nanoid(),
  //       created: dateCreated(monthNames),
  //       title: document.querySelector(".add-title").value,
  //       category: document.querySelector(".select-category").value,
  //       categoryText: document.querySelector(".select-category").textContent,
  //       content: document.querySelector(".add-content").value,
  //       dates: extractDates(document.querySelector(".add-content").value),
  //       archived: false,
  //     };

  //     setNotes((prevNotes) => [...prevNotes, newNote]);
  //     hideOverlayAndModal();
  //   }
  // };

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
      <Modal />
      <Overlay />
    </div>
  );
}

export default App;
