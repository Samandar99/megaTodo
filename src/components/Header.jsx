import search from "../assets/images/search.svg";
import arrow from "../assets/images/arrow.svg";
import close from "../assets/images/close.svg";
import { useState } from "react";

function Header({ setSearchText,searchText  }) {
  const [isSecondBlockOpen, setIsSecondBlockOpen] = useState(false);
  const [isFirstBlockOpen, setIsFirstBlockOpen] = useState(true);

  const handleSearchButtonClick = () => {
    setIsFirstBlockOpen(false);
    setIsSecondBlockOpen(true);
  };
  const handleBack = () => {
    setIsFirstBlockOpen(true);
    setIsSecondBlockOpen(false);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        {isFirstBlockOpen && (
          <div className="header__nav-block">
            <button className="header__nav-lang">RU</button>
            <h2 className="header__nav-title">Заметки</h2>
            <button
              className="header__nav-search"
              onClick={handleSearchButtonClick}
            >
              <img src={search} alt="" />
            </button>
          </div>
        )}
        {isSecondBlockOpen ? (
          <div className="header__nav-block">
            <div className="header__nav-form">
              <img src={arrow} alt="" onClick={handleBack} />
              <input
                type="text"
                placeholder="Поиск..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <img className="header__nav-close" src={close} alt="" />
          </div>
        ) : null}
      </nav>
    </header>
  );
}
export default Header;
