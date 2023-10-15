// import { Routes, Route } from "react-router-dom";

export const Movies = () => {
  

  return (
    <div>
        <form className="form" >
        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          name="searchImage"
          placeholder="Search images and photos"
        />
        <button type="submit" className="searchbutton">
          {/* <FontAwesomeIcon icon={faMagnifyingGlass} beat /> */}
        </button>
      </form>

    </div>
  );
};
