import { useEffect, useState } from "react";

function Modal({
  handleCloseModal,
  addNewNote,
  dataInfo,
  editDataInfo,
  handleOpenModal,
  isEditing,
  setDataInfo,
  editedNote,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  const handleAddNote = () => {
    if (title !== "" && content !== "") {
      if (isEditing) {
        // Обновление существующей заметки
        const updatedNote = {
          id: editedNote.id,
          title: title,
          text: content,
        };

        setDataInfo((prevData) =>
          prevData.map((note) =>
            note.id === updatedNote.id ? updatedNote : note
          )
        );
      } else {
        // Добавление новой заметки
        const newNote = {
          id: dataInfo.length + 1,
          title: title,
          text: content,
        };

        addNewNote(newNote);
      }

      handleCloseModal();
    }
  };

  return (
    <div className="modal-block" onClick={handleCloseModal}>
      <div className="modal" onClick={handleModalClick}>
        <h2 className="modal__title">
          {isEditing ? "Изменить заметку" : "Добавить заметку"}
        </h2>
        <form className="modal__form">
          <div>
            <span>Title</span>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Tile"
            />
          </div>
          <div>
            <span>Content</span>
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              placeholder="Content"
            />
          </div>
        </form>
        <div className="modal__options">
          <button onClick={handleCloseModal}>Отмена</button>
          <button onClick={handleAddNote}>
            {isEditing ? "изменить" : "Добавить"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
