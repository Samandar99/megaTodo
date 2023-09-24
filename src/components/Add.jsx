import pencil from "../assets/images/pencil.svg";

function Add({ handleOpenModal }) {
  return (
    <div className="add" onClick={handleOpenModal}>
      <img src={pencil} alt="" />
    </div>
  );
}

export default Add;
