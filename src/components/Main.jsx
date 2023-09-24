import grid from "../assets/images/grid.svg";
import dell from "../assets/images/dell.svg";
import pencil from "../assets/images/pencil.svg";
import { useState } from "react";
import flex from "../assets/images/flex.svg";

function Main({ dataInfo, dataInfoDell, editDataInfo }) {
  const [isGridMode, setIsGridMode] = useState(false);

  const handleChangeClass = () => {
    setIsGridMode(!isGridMode);
  };
  const handleDellInfo = (id) => {
    dataInfoDell(id);
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main__header">
          <h2 className="main__header-title">
            {dataInfo.length > 0 ? "Все заметки" : "нету заметок"}
          </h2>
          <button className="main__header-btn" onClick={handleChangeClass}>
            {isGridMode ? <img src={grid} alt="" /> : <img src={flex} alt="" />}
            <span>Список</span>
          </button>
        </div>

        <div className={`main__block ${isGridMode ? "ismain__block" : ""}`}>
          {dataInfo.map((item, i) => (
            <div className="main__block-card" key={item.id}>
              <div className="card__head">
                <h3 className="card__head-title">{item.title}</h3>
                <span>07.03.2022</span>
              </div>
              <p className="card__txt">{item.text}</p>
              <div className="card__options">
                <button
                  className="card__edit"
                  onClick={() => editDataInfo(item)}
                >
                  <img src={pencil} alt="" />
                  <span>РЕДАКТИРОВАТЬ</span>
                </button>
                <button
                  className="card__dell"
                  onClick={() => handleDellInfo(item.id)}
                >
                  <img src={dell} alt="" />
                  <span>Удалить</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
