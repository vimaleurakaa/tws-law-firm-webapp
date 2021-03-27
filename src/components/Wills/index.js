import React, { useState } from "react";
import WillsTypes from "./WillsTypes";
import WillsCategory from "./WillsCategory";
import WillsIcon from "../../assets/Wills_Icon.png";
import AttorneyIcon from "../../assets/Attorney_Icon.png";
import ConveyancingIcon from "../../assets/Conveyancing_Icon.png";

const Wills = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [categoryToShow, setCategoryToShow] = useState("");
  const typesData = [
    {
      id: "Wills",
      title: "WILLS",
      des:
        "Our lawyers have experience advising on all aspects of the of businesses",
      icon: WillsIcon,
    },
    {
      id: "Attorney",
      title: "Power of Attorney",
      des:
        "Our lawyers have experience advising on all aspects of the of businesses",
      icon: AttorneyIcon,
    },
    {
      id: "Conveyancing",
      title: "Property Conveyancing",
      des:
        "Our lawyers have experience advising on all aspects of the of businesses",
      icon: ConveyancingIcon,
    },
  ];

  const categoryData = {
    Wills: [
      {
        title: "DIFC WILLS",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
      {
        title: "MIRROR WILLS",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
      {
        title: "ABU DHABI WILLS",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
    ],
    Attorney: [
      {
        title: "DIFC WILLS ATT",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
      {
        title: "MIRROR WILLS ATT",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
      {
        title: "ABU DHABI WILLS ATT",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
    ],
    Conveyancing: [
      {
        title: "DIFC WILLS CON",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
      {
        title: "MIRROR WILLS CON",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
      {
        title: "ABU DHABI WILLS CON",
        des:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
      },
    ],
  };

  const changeCategory = (id = "Wills") => {
    setShowCategory(!showCategory);
    setCategoryToShow(id);
  };

  // return (
  //   <div className="container">
  //     <div className="row" id={showCategory ? "willsCategory" : "willsType"}>
  //       {showCategory
  //         ? categoryData[categoryToShow].map(({ title, des }) => (
  //             <WillsCategory
  //               changeCategory={changeCategory}
  //               key={title}
  //               title={title}
  //               description={des}
  //             ></WillsCategory>
  //           ))
  //         : typesData.map(({ id, title, des, icon }) => (
  //             <WillsTypes
  //               changeCategory={changeCategory}
  //               key={id}
  //               id={id}
  //               title={title}
  //               description={des}
  //               icon={icon}
  //             >
  //               <button onClick={() => changeCategory}>Show More</button>
  //             </WillsTypes>
  //           ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="container">
      {showCategory ? (
        <WillsCategory
          categoryData={categoryData}
          changeCategory={changeCategory}
          categoryToShow={categoryToShow}
        ></WillsCategory>
      ) : (
        <WillsTypes
          typesData={typesData}
          changeCategory={changeCategory}
        ></WillsTypes>
      )}
    </div>
  );
};

export default Wills;
