import React from "react";
import ActiveNotesComponent from "./components/ActiveNotesComponent";
import ArchivedNotesComponent from "./components/ArchivedNotesComponent";
import CategoriesComponent from "./components/CategoriesComponent";
import Modal from "./components/Modal";
import Overlay from "./components/Overlay";

import { useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import {
  categoryChange,
  contentChange,
  titleChange,
} from "./redux/modalValuesSlice";
import { setCurrentId } from "./redux/currentIdSlice";

function App() {
  const dispatch = useDispatch();
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const cleanInputs = function () {
    dispatch(titleChange(""));
    dispatch(categoryChange("Random Thought"));
    dispatch(contentChange(""));
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

  ///////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <ActiveNotesComponent displayOverlayAndModal={displayOverlayAndModal} />
      <CategoriesComponent />
      <ArchivedNotesComponent />
      <Modal hideOverlayAndModal={hideOverlayAndModal} />
      <Overlay />
    </div>
  );
}

export default App;
