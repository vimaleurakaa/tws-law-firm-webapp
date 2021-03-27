import React from "react";
import ListIcon from "../../assets/Icon1.png";
import "./Wills.scss";

const WillsCategory = ({ categoryData, categoryToShow, changeCategory }) => {
  return (
    <div className="row" id="willsCategory">
      {categoryData[categoryToShow].map(({ title, des }) => (
        <div className="col-lg-4 col-sm-6 mb-4" key={title}>
          <div className="card card-list">
            <div className="py-3 ps-3">
              <img src={ListIcon} alt="" width="70" height="70"></img>
            </div>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{des}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          className="btn back-btn"
          type="button"
          onClick={() => changeCategory()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default WillsCategory;
