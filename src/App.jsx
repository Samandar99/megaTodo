import { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Add from "./components/Add";
import Modal from "./components/Modal";

function App() {
  const [isModal, setIsModal] = useState(false);
  const [dataInfo, setDataInfo] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filteredNotes = dataInfo.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredNotes);
  }, [dataInfo, searchText]);

  useEffect(() => {
    const storedDataInfo = localStorage.getItem("dataInfo");
    if (storedDataInfo) {
      setDataInfo(JSON.parse(storedDataInfo));
    }
  }, []);

  const addNewNote = (newNote) => {
    const newDataInfo = [...dataInfo, newNote];
    setDataInfo(newDataInfo);

    localStorage.setItem("dataInfo", JSON.stringify(newDataInfo));
  };

  const dataInfoDell = (idInfo) => {
    // console.log(idInfo);
    const updatedDataInfo = dataInfo.filter((item) => item.id !== idInfo);

    setDataInfo(updatedDataInfo);

    localStorage.setItem("dataInfo", JSON.stringify(updatedDataInfo));
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleOpenModal = () => {
    // console.log('s');
    setIsModal(true);
    setIsEditing(false);
  };

  function editDataInfo(updatedNote) {
    setEditedNote(updatedNote);
    setIsModal(true);
    setIsEditing(true);
  }

  return (
    <>
      <Header setSearchText={setSearchText} searchText={searchText} />

      <Main
        dataInfo={filteredData}
        searchText={searchText}
        dataInfoDell={dataInfoDell}
        editDataInfo={editDataInfo}
      />

      <Add handleOpenModal={handleOpenModal} />
      {isModal && (
        <Modal
          editedNote={editedNote}
          editDataInfo={() => setIsModal(false)}
          isEditing={isEditing}
          handleCloseModal={handleCloseModal}
          addNewNote={addNewNote}
          dataInfo={dataInfo}
          setDataInfo={setDataInfo}
        />
      )}
    </>
  );
}

export default App;
