import React from "react";
import { Input } from "antd";

const { Search } = Input;

const Home = () => {
  const onSearch = (value) => console.log(value);

  return (
    <>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <div>Home Component!</div>
    </>
  );
};

export default Home;
