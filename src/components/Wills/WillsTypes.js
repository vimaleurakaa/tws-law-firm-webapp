import React from "react";
import "./Wills.scss";

const WillsTypes = ({ typesData, changeCategory }) => {
  return (
    <div className="row" id="willsType">
      {typesData.map(({ id, title, des, icon }) => (
        <div
          className="col-lg-4 col-sm-6 mb-4"
          id={id}
          key={id}
          onClick={() => changeCategory(id)}
        >
          <div className="card border-0 shadow rounded-xs card-bg">
            <div className="card-body text-center">
              <img src={icon} width="70" height="70" alt=""></img>
              <h4 className="mt-4 mb-3">{title}</h4>
              <p>{des}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WillsTypes;
